// helpers
function getToken() {
  return localStorage.getItem("token");
}
function clearToken() {
  localStorage.removeItem("token");
}

// elements
const dashboardCard = document.getElementById("dashboardCard");
const userBar = document.getElementById("userBar");
const userNameLabel = document.getElementById("userNameLabel");
const welcomeName = document.getElementById("welcomeName");
const scooterList = document.getElementById("scooterList");
const noScootersMsg = document.getElementById("noScootersMsg");
const scooterMessage = document.getElementById("scooterMessage");

// logout
document.getElementById("logoutBtn").onclick = () => {
  clearToken();
  localStorage.removeItem("username");
  window.location = "login.html";
};

// dashboard tonen
async function showDashboard() {
  const username = localStorage.getItem("username");

  if (!username) {
    window.location = "login.html";
    return;
  }

  userNameLabel.textContent = username;
  welcomeName.textContent = username;

  dashboardCard.classList.remove("hidden");
  userBar.classList.remove("hidden");

  await loadScooters();
}

// scooters laden
async function loadScooters() {
  scooterList.innerHTML = "";
  noScootersMsg.style.display = "none";

  const token = getToken();
  if (!token) return;

  const res = await fetch("/api/scooter/list", {
    headers: {
      "Authorization": "Bearer " + token
    }
  });

  const scooters = await res.json();

  if (!scooters.length) {
    noScootersMsg.style.display = "block";
    return;
  }

  scooters.forEach(s => {
    const li = document.createElement("li");
    li.className = "scooter-item";
    li.innerHTML = `
      <strong>${s.merk} ${s.model}</strong><br>
      Kenteken: ${s.kenteken || "-"}<br>
      Bouwjaar: ${s.bouwjaar || "-"}
    `;
    scooterList.appendChild(li);
  });
}

// scooter opslaan
document.getElementById("saveScooterBtn").onclick = async () => {
  scooterMessage.textContent = "";

  const merk = document.getElementById("scooterMerk").value.trim();
  const model = document.getElementById("scooterModel").value.trim();
  const kenteken = document.getElementById("scooterKenteken").value.trim();
  const bouwjaar = document.getElementById("scooterBouwjaar").value.trim();

  if (!merk || !model) {
    scooterMessage.textContent = "Merk en model zijn verplicht.";
    return;
  }

  const token = getToken();
  if (!token) {
    scooterMessage.textContent = "Je bent niet ingelogd.";
    return;
  }

  const res = await fetch("/api/scooter/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({ merk, model, kenteken, bouwjaar })
  });

  const data = await res.json();

  if (data.success) {
    scooterMessage.textContent = "Voertuig opgeslagen.";
    document.getElementById("scooterMerk").value = "";
    document.getElementById("scooterModel").value = "";
    document.getElementById("scooterKenteken").value = "";
    document.getElementById("scooterBouwjaar").value = "";
    await loadScooters();
  } else {
    scooterMessage.textContent = "Opslaan mislukt.";
  }
};

// auto-login
window.onload = showDashboard;
