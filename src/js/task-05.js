const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

const handleOnInput = event => {
    if(event.target.value.length === 0) {
        nameEl.textContent = "Anonymous"
    } else {
        nameEl.textContent = event.target.value;
    }
}

inputEl.addEventListener("input", handleOnInput);
