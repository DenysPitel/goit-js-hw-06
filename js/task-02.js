const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const lis = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.classList = 'item';
  li.textContent = ingredient;

  return li;
});

ingredientsEl.append(...lis);



