let 
menu__button__open = document.querySelector("#menu__btn--open"),
menu__button__close = document.querySelector("#menu__btn--close"),
menu = document.querySelector("#wrapper-menu");

menu__button__open.addEventListener("click", () => {
    menu.classList.add("menu--open");
    menu.classList.remove("menu--close");
}); 

menu__button__close.addEventListener("click", () => {
    menu.classList.add("menu--close");
    menu.classList.remove("menu--open");
}); 
