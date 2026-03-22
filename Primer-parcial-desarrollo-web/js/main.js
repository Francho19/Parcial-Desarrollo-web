const span = document.querySelectorAll('.form__icons');

document.addEventListener('DOMContentLoaded', () => {

    setupPasswordToggle();

})

const setupPasswordToggle = () => {
            span.forEach(element => {
           
            element.addEventListener('click', () => {
              const field = element.closest('.form__field--password');
              const input = field.querySelector('.form__input');
              const icon = field.querySelector('.form__icon');

              if (input) {
                if (input.type === 'password') {
                    input.type ='text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash')
                } else {
                    input.type = 'password'
                    icon.classList.remove('fa-eye-slash')
                    icon.classList.add('fa-eye');
                }
              }
              
                
            })
            
        });
}