const textInputEl = document.querySelector('#validation-input');

textInputEl.addEventListener('focus', handleInputChangeFocus);
textInputEl.addEventListener('blur', handleInputChangeBlur);

function handleInputChangeFocus(event) { 
    event.target.style.outline = '2px solid  #bdbdbd';
    console.log(focus);
};

function handleInputChangeBlur(event) {
    if (event.target.value.length === Number(textInputEl.getAttribute('data-length'))) {
        event.target.style.outline = '2px solid #4caf50';
    } else {
        event.target.style.outline = '2px solid #f44336';
    }
};
console.log(textInputEl);
