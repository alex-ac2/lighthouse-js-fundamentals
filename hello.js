// Say Hello function 
function sayHello(name) {
    console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");


// Say Hello function w/ return statement
function returnSayHello(name) {
      return "Hello, " + name;
}

var greeting = returnSayHello('John');
console.log(greeting);

