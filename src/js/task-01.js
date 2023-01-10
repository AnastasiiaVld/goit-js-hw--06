const itemEL = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEL.length}`);

const elements = itemEL.forEach(elem => {
    const nameEl = elem.firstElementChild.textContent;
    const elementEl = elem.lastElementChild;

    console.log(`Category: ${nameEl}`);
    console.log(`Elements: ${elementEl.querySelectorAll("li").length}`)
})



