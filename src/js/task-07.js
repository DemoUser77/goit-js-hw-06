const styleInputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

styleInputEl.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    spanEl.style.fontSize = event.currentTarget.value + "px";
    }
console.log(styleInputEl);
