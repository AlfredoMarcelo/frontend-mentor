import heroes, {jugador} from "../data/heroes";


//find() => busca un solo resultado
export const getHeroe = (id)=>{
    return heroes.find(heroe => heroe.id == id);
}
//console.log(getHeroe(3)); 
//filter => puede retornar mas de un resultado
export const getHeroesByOwner = (owner)=>heroes.filter((heroes)=>heroes.owner === owner);

//console.log(getHeroesByOwner('DC'));
//console.log(jugador)