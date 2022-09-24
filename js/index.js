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



//FUNCIONES ANONIMAS

function start(){
    return 'starting..';
}

console.log(start());