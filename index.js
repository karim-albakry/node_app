function Say_Hello(name){
    if(name === null || name === ""){
        return console.error("Name is not provided.");
    }
    console.log('Hello, World!');
}