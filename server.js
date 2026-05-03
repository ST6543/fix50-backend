import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(bodyParser.json());

// DATABASE CONNECTIE (Render gebruikt ENV variabelen)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Fix50 backend draait op Render!");
});

// VOORBEELD: scooters ophalen
app.get("/api/scooters", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM scooters");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database fout" });
  }
});

// PORT FIX VOOR RENDER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server draait op poort ${PORT}`);
});

app.post("/api/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !password) {
        return res.json({ error: "Gebruikersnaam en wachtwoord verplicht" });
    }

    const hash = await bcrypt.hash(password, 10);

    db.run(
        "INSERT INTO users (username, email, passwordHash) VALUES (?, ?, ?)",
        [username, email, hash],
        err => {
            if (err) {
                return res.json({ error: "Gebruiker bestaat al" });
            }
            res.json({ success: true });
        }
    );
});
