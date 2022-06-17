export default function initAnimaNumeros(){


    function animaNumeros(){

        const numeros = document.querySelectorAll('[data-numero]');
        //console.log(numeros);
        
        numeros.forEach((numero) => {
            const total = numero.innerText;
            let start = 0;
        
            const incremento = Math.floor(total / 100);
        
            const timer = setInterval(() => {
                //start++;
                start = start + incremento;
                numero.innerText = start;
                if(start >= total){
                    numero.innerText = total; /* por conta do incremento, no caso de retornar n maior que o numero original*/
                    clearInterval(timer);
                }
            }, 25 * Math.random());
        
        })
        
        }
        
        function handleMutation(mutation){
            if(mutation[0].target.classList.contains('ativo')){
                observer.disconnect();
                animaNumeros();
            }
        
        }
        
        const observerTarget = document.querySelector('.numeros');
        const observer = new MutableObserver(handleMutation);
        observer.observe(observerTarget , {attributes: true});

}

