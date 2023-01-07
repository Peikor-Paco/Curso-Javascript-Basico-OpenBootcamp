// Bucles for
//for(inicializacion; condicion; actaulizacion) {
//
//}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

for (let i = 0; i < 10; i = i + 3 ) {
    console.log(i)
}

let lista = [1, 3, 8, 9, 13]
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]*3)
}


// Estructura for ..of

for (let cualquierNombredeVariable of lista) {
    console.log(cualquierNombredeVariable)
}

// Estructura forEach

lista.forEach( cualquierNombredeVariable =>{
    console.log(cualquierNombredeVariable)
})


// 

let persona = {
    nombre: "Paco",
    apellido: "Moreno",
    edad: 34,
    isDeveloper: true,
}

console.log(persona.nombre);

for (let propiedad in persona) {
    console.log(persona[propiedad]);
    console.log(propiedad);
    
}