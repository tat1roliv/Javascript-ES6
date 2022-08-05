//console.log('rodando via script')

//process.stdout.write("testing \n\n");

const questions = [ 
    "question 1",
    "question 2",
    "question 3",
    "question 4",
]

const ask = ( index  = 0) => {
    process.stdout.write("\n\n" + questions[index] + " >");
}

ask();

const answers = [];

process.stdin.on('data', (data) => {
    //process.stdout.write(data.toString().trim() + '\n');
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }  
})

process.on('exit', function imprimeTela(){
    console.log(`
        resultados 
        _____________________________
        resposta à pergunta 1:
        ${answers[0]}

        resposta à pergunta 2:
        ${answers[1]}

        resposta à pergunta 3:
        ${answers[2]}

        resposta à pergunta 4:
        ${answers[3]}
    `)
}
)