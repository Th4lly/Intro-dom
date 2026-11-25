// 1 - Capturando elementos
const botaoMenu = document.getElementById("menu-toggle");
const menu = document.querySelector("#menu");

const mediaQuery = window.matchMedia("(min-widht: 48rem)");

//acessando lista de classes
console.log(menu.classList);


// 2 - CONFIGURANDO EVENTO/AÇÃO
botaoMenu.addEventListener("click", function() {
menu.classList.toggle("menu-ativo");

//verificando se o menu está aberto
const menuAberto = menu.classList.contains("menu-ativo")
botaoMenu.setAttribute("aria-expanded", menuAberto);

//atualizando a acessibilidade                                                                                            
if(menuAberto){
    botaoMenu.setAttribute("aria-label", "Fechar menu");
} else {
    botaoMenu.setAttribute("aria-label", "Abrir menu");
}

// bloquando scroll
document.body.style.overflow = menuAberto ? "hidden" : "";
});

// fechando o menu ao aumentar a tela
mediaQuery.addEventListener("change", function(event){
    if (event.matches) {
        menu.classList.remove("menu-ativo")
        botaoMenu.setAttribute("aria-label", "abrir menu");
        botaoMenu.setAttribute("aria-expanded", "False");

        document.body.style.overflow = "";
    }
});