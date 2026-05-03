document.getElementById("loginBtn").onclick = async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if (!email || !password) {
        errorMsg.textContent = "Vul alle velden in.";
        return;
    }

    const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
        errorMsg.textContent = data.error || "Inloggen mislukt.";
        return;
    }

    // token opslaan
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", email);

    // doorsturen naar dashboard
    window.location.href = "dashboard.html";
};
