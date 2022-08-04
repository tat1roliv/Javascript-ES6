const getFlagValue = require('./flags.js');

console.log(`${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)


//node greetings --name "ada" --greeting "teste"