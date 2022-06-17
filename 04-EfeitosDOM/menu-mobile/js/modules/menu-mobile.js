import clickOutside from './clickOutside.js'; 

export default function initMenuMobile() {


}

const menuButton = document.querySelector('.menu-mobile');
const menuList = document.querySelector('.menu-mobile-list');
const eventos = ['click', 'touchstart'];

function openMenu(event) {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menuList, eventos, ()=>{
        menuList.classList.remove('active');
        menuButton.classList.remove('active');

    })
}

eventos.forEach((evento) => {
    menuButton.addEventListener('click', openMenu);
})

