export default function initDropdownMenu() {

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
        this.classList.add('active');
        clickOutside(this, ['touchstart', 'click'], () => {
            this.remove('active');
        });
    }
    
    function clickOutside(element, events, callback){
        const html = document.documentElement;
        const outside = 'data-outside';
    
        if(!element.hasAttribute(outside)){
            events.forEach( userEvent => {
                html.addEventListener(userEvent, handleOutsideClick);
            })
            element.setAttribute(outside, '');
        }
    
        function handleOutsideClick(event){
            if(!element.contains(event.target)){
                element.removeAttribute(outside);
                events.forEach( userEvent => {
                    html.removeEventListener(userEvent, handleOutsideClick);
                })
                callback();        
            }
        }
    }
    
}

