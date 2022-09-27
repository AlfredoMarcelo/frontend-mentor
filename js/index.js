//DESTRUCTURACION OBJETOS

/*Rest (unificar valores en arreglo)y spred operator */
//https://www.freecodecamp.org/espanol/news/operadores-rest-spread-de-javascript-cual-es-la-diferencia/

/* const arr1 = [1,2,3,4];
const arr2 = [...arr1,"alfredo", 45]
console.log(arr2);

function bio(nombre,apellido, ...mas){//
    const arr3 = [nombre,apellido,...mas]
    return arr3;
}

console.log(bio( 2, 3,"alfredo", "marcelo"))
 */

/* const user = {
    name:"alfredo",
    age: 30,
};

function printInfo(user){
    const {name, age} = user;
    return "<h1>Hola "+ name + age +"</h1>";
}


document.body.innerHTML = printInfo(user); */

//Map
/* const arreglo = [1,2,3,4,5]

const arregloMap = arreglo.map(function(numero){
    return numero * 2;
})

console.log(arregloMap) */


//FUNCIONES ANONIMAS

/* 
function start(){
    return 'starting..';
}

const getUser =()=>({id:2536,nombre:"alfredo"});

console.log(getUser());

const getUsuarioActivo = (nombre)=>({id:9099, nombre: nombre});
const userName = getUsuarioActivo("alfredo Supanta");
console.log(userName); */

//Desestructuracion de objetos------------------------

/* const persona = {
    nombre: "tony",
    apellido: "ferguson",
    skills:{
        fuerte: "jiu-jitsu",
        debilidad: "grapling"
    }
}

const {nombre:nombrePeleador} = persona;//cambiando el nombre de la key
console.log(nombrePeleador)

const retornarPersona = ({nombre, apellido}) =>{//desestructuracion en parametro
    console.log(nombre + " " + apellido)
}
// de esta manera se puede deses.. anidada un doble obj y guardarlos en variables
const {nombre, apellido,skills:{fuerte,debilidad}} = persona

retornarPersona(persona);
console.log(debilidad) */

//Desestructuracion de arreglos--------------------------

const personajes = ['Ton', 'Jean', 'Gonza',()=>{console.log("hola")}];

const [p1,,,arr] = personajes;
console.log(p1);
arr();

// find busca un solo resulatdo, filter busca mas de uno