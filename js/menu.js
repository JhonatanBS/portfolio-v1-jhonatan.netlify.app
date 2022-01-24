const botao = document.querySelector(".botao-menu");

function hamburger(){
    const menu = document.querySelector(".menu");
    menu.classList.toggle("ative");
}

botao.addEventListener("click", hamburger);