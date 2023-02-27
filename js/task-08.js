const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleFormSabmit);

function handleFormSabmit(event) {
    event.preventDefault();

 const formElements = event.currentTarget.elements;
console.log(formElements);

const email = formElements.email.value;
const password = formElements.password.value;

if (formElements.email.value === "" || formElements.password.value === "") {
      alert('Всі поля повинні бути заповнені.');
    }
console.log(`email: ${email} password: ${password}`);
    event.currentTarget.reset();
};
