//ESTRUTURAS DE REPETICAO

//for
// break
//continue (pula a execucao do momento)
for (i=0; i < 10; i++){
    //
    if (i > 50 ){
        break;
    }
    else if (true){
        continue;
    }
}



//while
//ideal para quando nao se sabe o momento da parada
let j = 5648435312315144;
while(j > 10){
    //loop
    console.log(i)
    j /= 35;
}



//for...of
let name = 'ada';
let names = ['adinha', 'bob'];

for (let char of name){
    console.log(char)
}

for (let name of names){
    console.log(name)
}



//for...in
let person = {
    name: 'ada',
    age:99,
    subscribed: true
}

for (let prop in person){
    console.log(person[prop]);
}