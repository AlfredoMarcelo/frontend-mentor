describe('Pruebas en <Demo/>', () => {
    
    test("probando prueba", ()=>{
        // 1 inicializacion
        const msg1 = 'Hola mundo';
        
        //2 estimulo
        const msg2 = msg1.trim();
        
        //3 observar comportamiento.. esperado
        expect(msg1).toBe(msg2);
    })
    
})

// autocompletado para jest
// yarn add -D @types/jest