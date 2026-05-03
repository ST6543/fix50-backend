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
