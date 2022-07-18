/*
1; 2
*/

let weight;
console.log(typeof weight);

/*
3; 4.1; 4.2
*/

let student = {
    name: 'ada',
    age: 99,
    stars: 5.55,
    isSubscribed: false,
};
console.log(typeof student);
console.log(`studant data : name: ${student.name} | age: ${student.age} |  stars: ${student.stars} |  isSubscribed: ${student.isSubscribed} `);


/*
5, 6, 7
*/

let students = [];
students.push(student);
console.log(students[0]);


/*
8
*/
let bob = {
    name: 'bob',
    age: 18,
    stars: 4.20,
    isSubscribed: true,
};

students[1] = bob;  
console.log(students);

/*
9
*/
console.log(a)
var a = 1;
//hoisting



