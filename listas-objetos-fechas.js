// Listas, Objetos y Fechas en JS

// Listas, array


const lista = [1, "hola", true, undefined, null];
const lista2 = new Array (2, "hola", true, undefined, null);
const lista3 = new Array (3);
const lista4 = [lista,lista2,lista3]


console.log(lista);
console.log(lista2);
console.log(lista3);

lista3[0] = "item";
console.log(lista3);

console.log(lista4);


// Objetos son representaciones en datos de objetos en la vida real
// se define con atributos son keys

const movil = {
    ancho: 22,
    largo: 40,
    marca: "xaoim",
    isWhite: true,
    contactos: ["paco", "marta"],

    // podemos definir otro objeto

    tarjeta: {
        marca: "sandisk",
        alamacenamiento: 16,
    }
}

console.log(movil);
console.log(movil.largo);
console.log(movil.tarjeta);
console.log(movil.tarjeta.alamacenamiento);

// se pueden dar nuevos atributos al objeto

movil.anyo = 2019;
console.log(movil);
console.log(movil.anyo);

// se pueden cambiar los valores del atributo

movil.largo = 60;
console.log(movil.largo);


// Fechas
new Date();

// Fechas en el momento de creada la variable
const ahora = new Date();
console.log(ahora);

const fecha_mil = new Date(10);
console.log(fecha_mil);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(dia);
console.log(mes);
console.log(anyo);
console.log(dia,mes,anyo);