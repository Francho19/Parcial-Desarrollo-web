document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("btnLogin");
    const usuarioInput = document.getElementById("usuario");
    const passwordInput = document.getElementById("password");
    const icono = document.querySelector(".form__icons");

    icono.addEventListener("click", () => {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        icono.textContent = passwordInput.type === "password" ? "👀" : "🙈";
    });

    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const usuario = usuarioInput.value.trim();
        const password = passwordInput.value;

        if (usuario === "user" && password === "admin") {

            sessionStorage.setItem("loggedIn", "true");

            window.location.href = "index.html";

        } else {
            alert(" Usuario o contraseña incorrectos");
        }
    });

});