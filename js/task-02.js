const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const UL = document.querySelector('#ingredients');
console.log(UL);

const li = []

ingredients.forEach(ingredient => {
  const item = document.createElement('li')
  item.className = 'item'
  item.textContent = ingredient
  li.push(item)
  UL.append(item)
})

UL.append(...li)