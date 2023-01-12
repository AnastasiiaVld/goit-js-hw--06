let counterValue = 0;
const valueEl = document.querySelector('#value');




const btnDecrementEl = document.querySelector('#counter button[data-action = "decrement"]');
const handlerOnDecrement = (event) => {
    event = counterValue -= 1;

   valueEl.textContent = event;
}
btnDecrementEl.addEventListener("click", handlerOnDecrement);


const btnIncrementtEl = document.querySelector('#counter button[data-action = "increment"]');
const handlerOnIncrement = (event) => {
    event = counterValue += 1;

    valueEl.textContent = event;
}
btnIncrementtEl.addEventListener("click", handlerOnIncrement);

