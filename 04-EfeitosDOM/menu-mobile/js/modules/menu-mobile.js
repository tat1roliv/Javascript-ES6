import clickOutside from './clickOutside.js'; 

export default function initMenuMobile() {


}

const menuButton = document.querySelector('.menu-mobile');
const menuList = document.querySelector('.menu-mobile-list');

function openMenu(event) {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menuList, ['click', 'touchstart'], ()=>{
        menuList.classList.remove('active');
        menuButton.classList.remove('active');

    })
}

menuButton.addEventListener('click', openMenu);

