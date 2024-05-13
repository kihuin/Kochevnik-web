document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('password1');
    const errorText = document.getElementById('error-msg');
    const passwordError = document.getElementById('password-error');

    passwordInput.addEventListener('input', function() {
        const passwordRegex = /^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я])[a-zA-Zа-яА-Я0-9]{6,}$/;
        if (!passwordRegex.test(this.value)) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    });

    confirmPasswordInput.addEventListener('input', function() {
        if (this.value !== passwordInput.value) {
            errorText.textContent = 'Пароли не совпадают';
            errorText.style.display = 'block';
        } else {
            errorText.textContent = '';
            errorText.style.display = 'none';
        }
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(this);
        
        fetch('/registratesubmit', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                location.href = "./";
                console.log('Данные успешно отправлены на сервер');
            } else {
                errorText.textContent = 'Ошибка при отправке данных на сервер';
                errorText.style.display = 'block';
                console.error('Ошибка при отправке данных на сервер');
            }
        })
        .catch(error => {
            errorText.textContent = 'Ошибка при отправке данных на сервер';
            errorText.style.display = 'block';
            console.error(error.message);
        });
    });
});