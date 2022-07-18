/*
* FUNCTIONS
*/


//function statement, invoke
function test(){
    console.log('test');
}
test();


//params
const sum = function (a, b){ return a+b };

//args
sum(1,2);


//function hoisting
testing();//funcao declarada faz o hoisting
function testing(){ console.log('testing')};

//testingAnonymous();//funcao anonima nao faz o hoisting
const testingAnonymous = function() {
    console.log('testing anonymous')
};


//arrow function
const arrowFunction = (e) => { return e};
arrowFunction('element');


//callback function
function sayMyName(name){
    console.log('before callback');
    name();
    console.log('after callback')
}

sayMyName(
    () => { console.log('invoke callback function')}
)


//constructor function
function Person(user) {
    this.user = user;
    this.walk = function(){ return 'walking...'}
}

const marley = new Person("marley");
const pepe = new Person("pepe");
console.log(marley.user);
console.log(pepe.walk());


let date = new Date("2022-07-18");
console.log(date)






