const botao = document.querySelector(".botao-menu");
const iconeBotao = document.querySelector(".bi-list");

function hamburger(){
    const menu = document.querySelector(".menu");
    menu.classList.toggle("ative");
    
    if(iconeBotao.classList.contains("bi-list")){
        iconeBotao.classList.remove("bi-list");
        iconeBotao.classList.add("bi-x-lg");
    }
    else if(iconeBotao.classList.contains("bi-x-lg")){
        iconeBotao.classList.remove("bi-x-lg");
        iconeBotao.classList.add("bi-list");
    }
}

botao.addEventListener("click", hamburger);