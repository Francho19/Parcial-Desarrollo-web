document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.form__icons').forEach(btn => {

        btn.addEventListener('click', () => {
            const field = btn.closest('.form__field--password');
            const input = field.querySelector('.form__input');

            if (input.type === 'password') {
                input.type = 'text';
                btn.textContent = '🙈';
            } else {
                input.type = 'password';
                btn.textContent = '👁';
            }
        });

    });

    const form = document.querySelector('.form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = document.querySelector('input[type="email"], input[type="text"]');
        const passwordInput = document.querySelector('input[type="password"]');

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "user" && password === "admin") {

            alert("Bienvenido ");

            form.reset();

        } else {

            alert("Credenciales incorrectas ❌");

            form.reset();

        }

    });

});