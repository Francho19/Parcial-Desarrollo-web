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
                btn.textContent = '👀';
            }
        });

    });

});