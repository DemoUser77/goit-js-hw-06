const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleFormSabmit);

function handleFormSabmit(event) {
    event.preventDefault();

 const formElements = event.currentTarget.elements;
console.log(formElements);

    const dataForm = {
        email: formElements.email.value,
        password: formElements.password.value
    };
   
if (dataForm.email === "" || dataForm.password === "") {
      alert('Всі поля повинні бути заповнені.');
}
     console.log(dataForm);
    event.currentTarget.reset();
};
