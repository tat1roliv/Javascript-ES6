/*HTMLElement*/

const h1 = document.querySelector('h1');
Object.prototype.toString.call(h1); 
// [objectHTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object


/*HTMLElement*/

const h1 = document.querySelector('h1');
Object.prototype.toString.call(h1); 
// [objectHTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object



/*Dataset*/
<div data-cor="azul" data-width="500">Uma Div</div>
<span data-anime="left" data-tempo="2000">Um Span</span>

// Ambos os valores selecionam a mesma div acima.
let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');
div.dataset;
// DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul'
div.dataset.width; // '500'
div.dataset.tempo = 1000;
// DOMStringMap {cor: "azul", width: "500", tempo: "1000"}




/*Data Atributes*/
<div data-anima="left" data-tempo="1000">Div 1</div>
<div data-anima="right" data-tempo="2000">Div 2</div>

const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
 div.classList.add(div.dataset.anima);
});
// adiciona em cada div
// uma classe com o mesmo nome
// que o valor de data



/*Data vs Class*/
<div data-anima="left" data-tempo="1000">Div 1</div>
<div class="anima-left tempo-1000">Div 2</div>

