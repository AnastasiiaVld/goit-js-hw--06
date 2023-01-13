function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
let value = "";
let initialSize = 30;


const getInputValue = event => {
  value = event.target.value;
}

function createBoxes(amount) {
  for (let index = 1; index <= amount; index++) {
    const box = `
      <div style="width: ${initialSize}px; height: ${initialSize}px; background: ${getRandomHexColor()}"></div>
    `;

    boxesEl.insertAdjacentHTML("beforeend", box);

    initialSize += 10;
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = ""
}



inputEl.addEventListener('input', getInputValue);
createBtn.addEventListener('click', () => {
  if(value) {
    createBoxes(value)
  }
});
destroyBtn.addEventListener('click', destroyBoxes);
