let divContainer = document.querySelector('#container');

divContainer.addEventListener("mouseover", function() {
    let texto = document.querySelector('#texto');
    divContainer.style.backgroundColor = 'green';
    texto.classList.remove("hide");
});

divContainer.addEventListener("mouseout", function() {
    let texto = document.querySelector('#texto');
    divContainer.style.backgroundColor = 'red';
    texto.classList.add("hide");
});
