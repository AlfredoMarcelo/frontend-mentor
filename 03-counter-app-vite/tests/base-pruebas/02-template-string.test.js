import { getSaludo } from "../../src/base-pruebas/02-template-string";
//prueba con .toBe()
describe('Prueba en 02-template', () => {
    
    test('getSaludo debe retornar "Hola Alfredo"', ()=>{
        const name = 'Alfredo';
        const message = getSaludo( name );
        expect( message ).toBe(`Hola ${ name }!!`);
    })
})