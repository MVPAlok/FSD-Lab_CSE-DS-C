const loginForm = document.getElementById("loginForm");
const loginMsg = document.getElementById("loginMsg");
const loginCard = document.getElementById("loginCard");
const dashboard = document.getElementById("dashboard");
const logoutBtn = document.getElementById("logoutBtn");

function showMessage(el, text, type) {
  el.textContent = text;
  el.className = "message " + type;
}

// Login
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const btn = document.getElementById("loginBtn");
  btn.disabled = true;
  btn.textContent = "Signing in...";

  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      showMessage(loginMsg, data.message, "success");
      setTimeout(() => {
        loginCard.style.display = "none";
        dashboard.style.display = "block";
        document.getElementById("userName").textContent = data.user.name;
        document.getElementById("dashName").textContent = data.user.name;
        document.getElementById("dashEmail").textContent = data.user.email;
      }, 800);
    } else {
      showMessage(loginMsg, data.message, "error");
    }
  } catch (err) {
    showMessage(loginMsg, "Could not connect to server", "error");
  }

  btn.disabled = false;
  btn.textContent = "Sign In";
});

// Logout
logoutBtn.addEventListener("click", () => {
  dashboard.style.display = "none";
  loginCard.style.display = "block";
  loginForm.reset();
  loginMsg.className = "message";
});
