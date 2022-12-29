function say_hello(name){
    if(name === null || name === ""){
        return console.error("Name is not provided.");
    }
    return `Hello, ${name}!`
}

function say_bonjour(name){
    if(name === null || name === ""){
        return console.error("Name is not provided.");
    }
    return `Bonjour, ${name}!`
}
module.exports = {
    say_hello,
    say_bonjour
}