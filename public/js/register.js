const registerForm = document.getElementById("registerForm");
const registerMsg = document.getElementById("registerMsg");

function showMessage(el, text, type) {
  el.textContent = text;
  el.className = "message " + type;
}

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const btn = document.getElementById("registerBtn");
  btn.disabled = true;
  btn.textContent = "Creating account...";

  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (data.success) {
      showMessage(registerMsg, data.message + " Redirecting to login...", "success");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    } else {
      showMessage(registerMsg, data.message, "error");
    }
  } catch (err) {
    showMessage(registerMsg, "Could not connect to server", "error");
  }

  btn.disabled = false;
  btn.textContent = "Create Account";
});
