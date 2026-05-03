document.getElementById("registerBtn").onclick = async () => {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    msg.style.color = "#ff4d4d";
    msg.textContent = "";

    if (!username || !email || !password) {
        msg.textContent = "Vul alle velden in.";
        return;
    }

    const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();

    if (data.error) {
        msg.textContent = data.error;
        return;
    }

    msg.style.color = "#4dff4d";
    msg.textContent = "Account aangemaakt!";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
};
