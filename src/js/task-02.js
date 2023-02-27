const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const listItemEl = ingredients.map(element => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = element;
  return(listEl);
 
});
ingredientsEl.append(...listItemEl);



