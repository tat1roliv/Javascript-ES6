import clickOutside from './clickOutside.js'; 

export default function initMenuMobile() {


}

const menuButton = document.querySelector('.menu-mobile');
const menuList = document.querySelector('.menu-mobile-list');

function openMenu(){
    menuList.classList.add('active');
}

menuButton.addEventListener('click', openMenu);

