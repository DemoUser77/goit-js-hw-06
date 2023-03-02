function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColorEL  = document.querySelector('.change-color');
const valueColorEl = document.querySelector('.color');

buttonChangeColorEL.addEventListener('click', changeColor);

function changeColor() {
  
const colorData = getRandomHexColor()
  document.body.style.backgroundColor = colorData;
  valueColorEl.textContent = colorData;
  
  console.log(valueColorEl);
}



