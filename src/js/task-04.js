let counterValue = 0;
let step = 1;

const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value');

counterEl.firstElementChild.addEventListener('click', () => {
  counterValue -= step;
  valueEl.textContent = counterValue;

  console.log(counterValue);
});

counterEl.lastElementChild.addEventListener('click', () => {
  counterValue += step;
  valueEl.textContent = counterValue;

  console.log(counterValue);
});
