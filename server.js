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
const ONDERHOUD_FILE = "./onderhoud.json";

/* ------------------------------
   HELPERS: BESTANDEN LEZEN/SCHRIJVEN
------------------------------ */

function loadJson(path) {
  if (!fs.existsSync(path)) return [];
  return JSON.parse(fs.readFileSync(path));
}

function saveJson(path, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

function loadUsers() {
  return loadJson(USERS_FILE);
}

function saveUsers(users) {
  saveJson(USERS_FILE, users);
}

function loadScooters() {
  return loadJson(SCOOTERS_FILE);
}

function loadOnderhoud() {
  return loadJson(ONDERHOUD_FILE);
}

/* ------------------------------
   AUTH MIDDLEWARE
------------------------------ */

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null;

  if (!token) return res.status(401).json({ error: "Geen token meegegeven" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // { email: ... }
    next();
  } catch (err) {
    return res.status(401).json({ error: "Ongeldige of verlopen token" });
  }
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

  const token = jwt.sign({ email }, SECRET, { expiresIn: "7d" });

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
   PROTECTED: SCOOTERS
------------------------------ */

app.get("/api/scooters", authMiddleware, (req, res) => {
  const scooters = loadScooters();

  // eventueel filteren op user:
  // const userScooters = scooters.filter(s => s.owner === req.user.email);

  res.json(scooters);
});

/* ------------------------------
   PROTECTED: ONDERHOUD
------------------------------ */

app.get("/api/onderhoud", authMiddleware, (req, res) => {
  const onderhoud = loadOnderhoud();

  // eventueel filteren op user:
  // const userOnderhoud = onderhoud.filter(o => o.owner === req.user.email);

  res.json(onderhoud);
});

/* ------------------------------
   SERVER STARTEN
------------------------------ */

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Fix50 backend draait op poort", port));
