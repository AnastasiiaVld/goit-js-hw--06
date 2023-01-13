const inputEl = document.querySelector("#validation-input");

const hendleOnTexeLength = (event) => {
  const inputValue = event.target.value;

    if (inputValue.length === 0) {
        return inputEl.classList = "";
    };

    inputValue.length == inputEl.dataset.length
        ? inputEl.classList = "valid"
        : inputEl.classList = "invalid";
    
};

inputEl.addEventListener("blur", hendleOnTexeLength);
