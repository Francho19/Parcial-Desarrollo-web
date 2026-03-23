document.addEventListener("DOMContentLoaded", () => {
 
    const icono = document.querySelector(".form__icons");
    const input = document.getElementById("password");
    const btnLogin = document.getElementById("btnLogin");
 
    // 👁 Toggle mostrar/ocultar contraseña
    icono.addEventListener("click", () => {
        input.type = input.type === "password" ? "text" : "password";
        icono.textContent = input.type === "password" ? "👀" : "🙈";
    });
 
    // 📦 Cargar datos guardados (solo usuario, no contraseña por seguridad)
    const savedUser = localStorage.getItem("usuario");
    if (savedUser) {
        document.getElementById("usuario").value = savedUser;
        document.getElementById("recordar").checked = true;
    }
 
    // 🔑 Login con Enter
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") login();
    });
 
    // 🔑 Login con botón
    btnLogin.addEventListener("click", login);
});
 
function mostrarError(msg) {
    const errorDiv = document.getElementById("error-msg");
    errorDiv.textContent = msg;
    errorDiv.style.display = "block";
    setTimeout(() => { errorDiv.style.display = "none"; }, 3000);
}
 
function login() {
    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value;
    const recordar = document.getElementById("recordar").checked;
 
    if (!usuario || !password) {
        mostrarError("⚠️ Completa todos los campos.");
        return;
    }
 
    if (usuario === "Jerson Javier" && password === "admin123") {
 
        // Guardar solo el usuario (nunca la contraseña en localStorage)
        if (recordar) {
            localStorage.setItem("usuario", usuario);
            localStorage.setItem("loggedIn", "true");
        } else {
            localStorage.removeItem("usuario");
            localStorage.removeItem("loggedIn");
        }
 
        // Sesión activa mientras el tab esté abierto
        sessionStorage.setItem("loggedIn", "true");
 
        window.location.href = "index.html";
 
    } else {
        mostrarError("❌ Usuario o contraseña incorrectos.");
    }
}
 
