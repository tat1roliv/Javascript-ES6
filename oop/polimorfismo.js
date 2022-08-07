class Atleta{
    peso;
    altura;

    constructor(peso){
        this.peso = peso;
    }

    definirCategoria(){
        if (this.peso <= 50){
            this.categoria = 'a';
        }
        else if (this.peso <= 65 ) {
            this.categoria = 'b';
        }
        else {
            this.categoria = 'c';
        }
    }
}

class Lutador extends Atleta{

    constructor(peso){
        super(peso);
    }

    //override
    definirCategoria(){
        if (this.peso <= 54){
            this.categoria = 'pluma';
        }
        else if (this.peso <= 60) {
            this.categoria = 'leve';
        }
        else if (this.peso <= 75) {
            this.categoria = 'meio-leve';
        }
        else {
            this.categoria = 'pesado';
        }
        
    }


}

