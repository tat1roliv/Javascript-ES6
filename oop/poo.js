//poo

class Poligono {

    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area(){
        return this.#calculaArea;
    }

    #calculaArea() {
        return this.altura * this.largura;
    }

}

let poligono = new Poligono(50,60);
console.log(poligono);
console.log(poligono.area);


