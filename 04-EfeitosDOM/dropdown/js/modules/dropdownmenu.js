export default function initDropdownMenu() {


}

const dropdownMenu = document.querySelectorAll( [data-dropdown] );

dropdownMenu.forEach((element) => {
    //element.addEventListener('click', handleClick );
    //element.addEventListener('touchstart', handleClick );
    ['touchstart', 'click'].forEach(eventUser => {
        element.addEventListener(userEvent, handleClick);
    })
});

function handleClick(event){
    event.preventDefault();
    this.classList.toggle('active');
}