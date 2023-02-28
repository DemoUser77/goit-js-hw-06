function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColorEL  = document.querySelector('.change-color');
const valueColorEl = document.querySelector('.color');

buttonChangeColorEL.addEventListener('click', changeColor);

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  valueColorEl.textContent = getRandomHexColor();
  
  console.log(valueColorEl);
}



