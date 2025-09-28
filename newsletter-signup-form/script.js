const formElement = document.querySelector('#form');
const emailInputElement = document.querySelector('#email');
const errorHintElement = document.querySelector('.input-error-hint');

formElement.addEventListener('submit', (event) => {
event.preventDefault();
const emailValue = emailInputElement.value.trim ();
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


if (!emailValue) {
    errorHintElement.textContent = 'Valid email required';
    emailInputElement.classList.add('email-input-error');
    emailInputElement.focus();
    return
}

if (!emailRegex.test(emailValue)) {
    errorHintElement.textContent = 'Invalid email format';
    emailInputElement.classList.add('email-input-error');
    emailInputElement.focus();
    return
}

console.log('Form submitted successfully');
emailInputElement.value = '';
errorHintElement.textContent = '';
emailInputElement.classList.remove('email-input-error');
});