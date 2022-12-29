function say_hello(name){
    if(name === null || name === ""){
        return console.error("Name is not provided.");
    }
    console.log(`Hello, ${name}!`);
}

function say_bonjour(name){
    if(name === null || name === ""){
        return console.error("Name is not provided.");
    }
    console.log(`Bonjour, ${name}!`);
}
module.exports = {
    say_hello,
    say_bonjour
}