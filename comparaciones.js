// Comparaciones en JS

// Igualdad debil == solo checkea el valor 
// Igualdad fuerte === compara el valor y el type

let a = 5;
let b = 5;

if (a == b) {
    console.log("a es igual a b debíl")
}

if (a === b) {
    console.log("a es igual a b fuerte")
}

let c = 5;
console.log(typeof c)
let d = "5";
console.log(typeof d)

if (c == d) {
    console.log("c es igual a d debíl")
}

if (c === d) {
    console.log("c es igual a d fuerte")
}


// Desigualdad basica no es igual

let e = 4;
let f = "4";

if (e != f) {
    console.log("e es diferente a f debíl")
}

if (e !== f) {
    console.log("e es diferente a f fuerte")
}

// Comparaciones mayores y menores


let max =10;
let min = 5 ;

if(max > min) {
    console.log("max es mayor que min");
}

if(max >= min) {
    console.log("max es mayor o igual que min");
}

if(min < max) {
    console.log("min es menor que max");
}

if(100 <= max) {
    console.log("min es menor o igual que max");
}