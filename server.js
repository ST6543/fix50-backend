import express from "express";
import cors from "cors";
import fs from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "fix50supersecret";

const USERS_FILE = "./users.json";
const SCOOTERS_FILE = "./scooters.json";

/* HELPERS */
function loadJson(path) {
  if (!fs.existsSync(path)) return [];
  return JSON.parse(fs.readFileSync(path));
}

function saveJson(path, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

/* AUTH MIDDLEWARE */
function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer "))
    return res.status(401).json({ error: "Geen token" });

  try {
    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: "Ongeldige token" });
  }
}

/* REGISTER */
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;

  const users = loadJson(USERS_FILE);
  if (users.find(u => u.email === email))
    return res.status(400).json({ error: "Gebruiker bestaat al" });

  const hashed = bcrypt.hashSync(password, 10);
  users.push({ email, password: hashed });
  saveJson(USERS_FILE, users);

  const token = jwt.sign({ email }, SECRET, { expiresIn: "7d" });
  res.json({ success: true, token });
});

/* LOGIN */
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const users = loadJson(USERS_FILE);
  const user = users.find(u => u.email === email);

  if (!user) return res.status(400).json({ error: "Onjuiste gegevens" });

  const match = bcrypt.compareSync(password, user.password);
  if (!match) return res.status(400).json({ error: "Onjuiste gegevens" });

  const token = jwt.sign({ email }, SECRET, { expiresIn: "7d" });
  res.json({ token });
});

/* SCOOTERS OPHALEN */
app.get("/api/scooters", authMiddleware, (req, res) => {
  const scooters = loadJson(SCOOTERS_FILE);
  const userScooters = scooters.filter(s => s.owner === req.user.email);
  res.json(userScooters);
});

/* SCOOTER TOEVOEGEN */
app.post("/api/scooters", authMiddleware, (req, res) => {
  const { naam, kenteken, km } = req.body;

  const scooters = loadJson(SCOOTERS_FILE);

  const newScooter = {
    id: Date.now(),
    naam,
    kenteken,
    km,
    owner: req.user.email
  };

  scooters.push(newScooter);
  saveJson(SCOOTERS_FILE, scooters);

  res.json({ success: true, scooter: newScooter });
});

/* SCOOTER VERWIJDEREN */
app.delete("/api/scooters/:id", authMiddleware, (req, res) => {
  const id = Number(req.params.id);

  let scooters = loadJson(SCOOTERS_FILE);
  scooters = scooters.filter(s => !(s.id === id && s.owner === req.user.email));

  saveJson(SCOOTERS_FILE, scooters);

  res.json({ success: true });
});

/* SCOOTER BEWERKEN */
app.put("/api/scooters/:id", authMiddleware, (req, res) => {
  const id = Number(req.params.id);
  const { naam, kenteken, km } = req.body;

  const scooters = loadJson(SCOOTERS_FILE);
  const scooter = scooters.find(s => s.id === id && s.owner === req.user.email);

  if (!scooter) return res.status(404).json({ error: "Scooter niet gevonden" });

  scooter.naam = naam;
  scooter.kenteken = kenteken;
  scooter.km = km;

  saveJson(SCOOTERS_FILE, scooters);

  res.json({ success: true, scooter });
});

/* SERVER START */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Fix50 backend draait op poort", port));
