const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const createIngredients = ingredients.map(ingredient => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.className = "item";
  ingredientsEl.append(itemEl);

})

console.log(ingredientsEl)


