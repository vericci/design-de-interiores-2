//Aqui adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburguer.
hamburgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("flex");
    //Criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo nossa caixa (Div) aparecer, ou seja, ficar visível.
});


closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("flex");
});

window.revelar = ScrollReveal({ reset: true });

revelar.reveal('.container-sec3', {
    duration: 4000,
    distance: '100px',
    origin: "left",
})

revelar.reveal('.container-sec4', {
    duration: 2000,
    distance: '120px'
})

revelar.reveal('.', {
    duration: 2000,
    distance: '200px'
})

revelar.reveal('.', {// deixar aqui caso preciase
    duration: 2000,
    distance: '200px'
})


$(document).ready(function () {

    $('.container-sec-4').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinit: true,
        dots: true,
        arrows: true,
    })
})