import { getHeroe } from "./bases/08-import";

// las promesas son asincronas
/* const promesa = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        const heroe = getHeroe(2);
        //console.log(heroe);
        //resolve envia los datos al .then()
        //resolve(heroe);
        reject("Id no encontrado");
    },2000)
});

promesa.then((heroe)=>{
    console.log(heroe)
})
.catch(error => console.warn(error)); */


const getHeroeByIdAsync = (id) =>{

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            const heroe = getHeroe(id);
            heroe?resolve(heroe):reject("no se encontro id");
        },2000)
    });
}

getHeroeByIdAsync(3)
    .then(heroe => console.log('Heroe', heroe))
    .catch(error => console.warn(error));