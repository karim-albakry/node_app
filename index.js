const greetings = require('./greetings');
const prompt = require("prompt-sync")({ sigint: true });

const name =prompt("What is your name? ");

console.log(greetings.say_hello(name));
console.log(greetings.say_bonjour(name));