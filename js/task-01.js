const UL = document.querySelector('#categories');
console.log("Number of categories: " + UL.children.length);
[...UL.children].forEach(element => {
    console.log("Category: " + element.firstElementChild.textContent);
    console.log("Elements: " + element.lastElementChild.children.length);
    console.log("");
});

