// function burgerMenu(selector) {
//     let menu = $(selector);
//     let links = menu.find('.burger-menu__link');
//     let overlay = menu.find('.burger-menu__overlay');


//     links.on('click', () => toggleMenu());
//     overlay.on('click', () => toggleMenu());

//     function toggleMenu() {
//         menu.toggleMenu('burger-menu__active');

//         if (menu.hasClass('burger-menu__active')) {
//             $('body').css('overflow', 'hidden');
//         } else {
//             $('body').css('overflow', 'visible');
//         }
//     }
// }

// burgerMenu('.burger-menu');


let header__burger = document.querySelector('.header__burger');
let burger_menu = document.querySelector('.header__burger-menu');
let back = document.querySelector('body');
let menu_list = document.querySelector('.burger-menu_list');
let menu_link = document.querySelector('.burger-menu_link');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    burger_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

menu_list.onclick = function () {
    menu_list.classList.remove('active');
    back.classList.toggle('lock');
}

menu_link.onclick = function () {
    header__burger.classList.remove('active');
    burger_menu.classList.remove('active');

}