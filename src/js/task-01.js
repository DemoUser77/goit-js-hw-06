const navEl = document.querySelectorAll('#categories h2');
console.log(`Number of categories:`, navEl.length);

const navFirstEl = categories.querySelectorAll('.item ');

navFirstEl.forEach((navFirstEl) => {

console.log(`Category:`, navFirstEl.firstElementChild.textContent);

const navLastEl = navFirstEl.querySelectorAll('li').length;
console.log(`Elements:`, navLastEl);
});
