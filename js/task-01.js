const numberOf–°ategoriesEl = document.querySelectorAll(".item");
    console.log(`Number of categories: ${numberOf–°ategoriesEl.length}`);


numberOf–°ategoriesEl.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});