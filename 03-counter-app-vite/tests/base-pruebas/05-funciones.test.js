import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Prueba en 05-funciones test', ()=>{
    test('getUser debe retornar un objeto', () => {
            const testUser = {
                uid: 'ABC123',
                username: 'El_Papi1502'
            };

            const user = getUser();
            //para comparar objetos se utiliza el .toEqual
            //los obj ocupan diferentes espacios en la memoria
            expect( testUser).toEqual( user);
        })

    test('getUsuarioActivo debe retornar un obj con un nombre', () => {
            //inicializacion
            const name = 'Alfredo';

            const objTest = {
                uid: 'ABC567',
                username: name
            }

            //estimulo
            const objNombre = getUsuarioActivo(name);

            //observar comportamiento
            expect(objNombre).toEqual( objTest );
        })
})