const numberOfСategoriesEl = document.querySelectorAll(".item");
    console.log(`Number of categories: ${numberOfСategoriesEl.length}`);


numberOfСategoriesEl.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});