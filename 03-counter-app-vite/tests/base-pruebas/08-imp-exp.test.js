import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Prueba en 08-imp-exp", () => {
  test("getHeroById debe retornar un Heroe por id", () => {
    
    const id = 1;

    const hero = getHeroeById(id);
    console.log(hero);

    expect( hero ).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
    })
  });

test("getHeroById debe retornar undefined si no existe", () => {
    
    const id = 100;

    const hero = getHeroeById(id);
    console.log(hero);

    //.toBeFalsy() acepta valores false, null y undefined
    expect( hero ).toBeFalsy();
 
  });


test("getHeroByOwner 'DC' debe retornar un arreglo con 3 objs", () => {
    
    const owner = "DC";

    const herosOwner = getHeroesByOwner(owner);

    expect(herosOwner.length).toEqual(3);


 
  }); 


  test("getHeroByOwner 'Marvel' debe retornar un arreglo con 2 objs", () => {
    
    const owner = "Marvel";

    const herosOwner = getHeroesByOwner(owner);
    console.log(herosOwner.length);

    expect( herosOwner.length ).toEqual(2);
 
  });


});
