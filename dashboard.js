// Check of gebruiker is ingelogd
const token = localStorage.getItem("token");
const email = localStorage.getItem("email");

if (!token || !email) {
    window.location.href = "login.html";
}

document.getElementById("userName").textContent = email;

// Logout
document.getElementById("logoutBtn").onclick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.href = "login.html";
};

// Scooter laden
async function loadScooters() {
    const res = await fetch("/api/scooters", {
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    const list = document.getElementById("scooterList");
    const noScooters = document.getElementById("noScooters");

    list.innerHTML = "";

    if (!res.ok) {
        noScooters.textContent = "Kon voertuigen niet laden.";
        return;
    }

    const scooters = await res.json();

    if (scooters.length === 0) {
        noScooters.style.display = "block";
        return;
    }

    noScooters.style.display = "none";

    scooters.forEach(s => {
        const div = document.createElement("div");
        div.className = "scooter-item";
        div.innerHTML = `
            <strong>${s.merk} ${s.model}</strong><br>
            Kenteken: ${s.kenteken || "-"}<br>
            Bouwjaar: ${s.bouwjaar || "-"}
        `;
        list.appendChild(div);
    });
}

loadScooters();

// Scooter opslaan
document.getElementById("saveScooterBtn").onclick = async () => {
    const merk = document.getElementById("merk").value.trim();
    const model = document.getElementById("model").value.trim();
    const kenteken = document.getElementById("kenteken").value.trim();
    const bouwjaar = document.getElementById("bouwjaar").value.trim();
    const msg = document.getElementById("msg");

    msg.textContent = "";

    if (!merk || !model) {
        msg.textContent = "Merk en model zijn verplicht.";
        msg.style.color = "#ff4d4d";
        return;
    }

    const res = await fetch("/api/scooters", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({ merk, model, kenteken, bouwjaar })
    });

    const data = await res.json();

    if (!res.ok) {
        msg.textContent = data.error || "Opslaan mislukt.";
        msg.style.color = "#ff4d4d";
        return;
    }

    msg.textContent = "Voertuig opgeslagen!";
    msg.style.color = "#4dff4d";

    document.getElementById("merk").value = "";
    document.getElementById("model").value = "";
    document.getElementById("kenteken").value = "";
    document.getElementById("bouwjaar").value = "";

    loadScooters();
};
