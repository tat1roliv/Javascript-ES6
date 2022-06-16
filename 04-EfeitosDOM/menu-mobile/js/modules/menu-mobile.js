import clickOutside from './clickOutside.js'; 

export default function initMenuMobile() {


}

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

function openMenu(){
    menuList.classList.add('active');
}

menuButton.addEventListener('click', openMenu);

