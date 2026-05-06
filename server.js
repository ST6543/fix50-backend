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

/* ------------------------------
   USERS LADEN / OPSLAAN
------------------------------ */

function loadUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(USERS_FILE));
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

/* ------------------------------
   REGISTER (DIRECT INLOGGEN)
------------------------------ */

app.post("/api/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Email en wachtwoord verplicht" });

  const users = loadUsers();

  if (users.find(u => u.email === email))
    return res.status(400).json({ error: "Gebruiker bestaat al" });

  const hashed = bcrypt.hashSync(password, 10);
  users.push({ email, password: hashed });
  saveUsers(users);

  // DIRECT TOKEN AANMAKEN
  const token = jwt.sign({ email }, SECRET, { expiresIn: "7d" });

  // DIRECT TERUGSTUREN
  res.json({
    success: true,
    token
  });
});

/* ------------------------------
   LOGIN
------------------------------ */

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const users = loadUsers();
  const user = users.find(u => u.email === email);

  if (!user) return res.status(400).json({ error: "Onjuiste gegevens" });

  const match = bcrypt.compareSync(password, user.password);
  if (!match) return res.status(400).json({ error: "Onjuiste gegevens" });

  const token = jwt.sign({ email }, SECRET, { expiresIn: "7d" });

  res.json({ token });
});

/* ------------------------------
   SERVER STARTEN
------------------------------ */

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Fix50 backend draait op poort", port));

/* ------------------------------
   AUTH MIDDLEWARE
------------------------------ */
function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer "))
    return res.status(401).json({ error: "Geen token" });

  try {
    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // email
    next();
  } catch {
    return res.status(401).json({ error: "Ongeldige token" });
  }

   app.get("/api/scooters", authMiddleware, (req, res) => {
  const scooters = loadJson("./scooters.json");
  const userScooters = scooters.filter(s => s.owner === req.user.email);
  res.json(userScooters);
});

app.post("/api/scooters", authMiddleware, (req, res) => {
  const { naam, kenteken, km } = req.body;

  if (!naam || !kenteken || !km)
    return res.status(400).json({ error: "Alle velden verplicht" });

  const scooters = loadJson("./scooters.json");

  const newScooter = {
    id: Date.now(),
    naam,
    kenteken,
    km,
    owner: req.user.email
  };

  scooters.push(newScooter);
  saveJson("./scooters.json", scooters);

  res.json({ success: true, scooter: newScooter });
});


}

