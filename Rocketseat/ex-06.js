
const button = document.getElementById('openModal');

const modal = document.querySelector('.modal-wrapper');

button.addEventListener('click', () => {
    modal.classList.remove('invisible');
});

document.addEventListener('keydown', (event) => {
 const isEscKey = event.key ==='Escape';

 if(isEscKey) {
    modal.classList.add('invisible');
 }
    
})