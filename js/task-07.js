const styleInputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

styleInputEl.addEventListener('input', handleInputChange);

spanEl.style.fontSize = styleInputEl.value + "px";

function handleInputChange(event) {
spanEl.style.fontSize = event.currentTarget.value + "px";
}
console.log(styleInputEl);
