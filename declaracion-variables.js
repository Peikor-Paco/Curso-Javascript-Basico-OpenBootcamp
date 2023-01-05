// Declaración de variables y escritura dinámica

// 2 formas de declarar variables -> el valor puede cambiar
// var aplica a todas las variables del código



var variable;

var a = 1;
console.log(a);

a = 4;
console.log(a);


var variable ="Soy var"
for (var i = 0; i < 3; i++) {
    console.log(variable);
    var variable = "cambio el valor de la variable";
    console.log(variable);

}

console.log(variable);


// cambia el valor de la variable 

// let solo al bloque en el que se usa

let b = 2;
console.log(b);

b = 4;
console.log(b);

let variableLet = "Soy let"
for (var i = 0; i < 3; i++) {
    let variableLet = "cambio el valor de la variableLet";
    console.log(variableLet);
}


console.log(variableLet);

// 1 formas de declarar constante

const constante = "soy una constante";
console.log(constante);


//typeof te dice que tipo primitivo es lo que pasamos

console.log(typeof variableLet);
console.log(typeof null);
console.log(typeof 0);