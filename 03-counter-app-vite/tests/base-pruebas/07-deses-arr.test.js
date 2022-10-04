import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Prueba en 07-deses-arr", () => {
  test("debe retornar un string y un numero", () => {
    const [letra, numer] = retornaArreglo();

    expect(letra).toBe("ABC");
    expect(numer).toBe(123);

    expect( typeof letra ).toBe('string');
    expect( typeof numer ).toBe('number');
    
    expect( letra ).toEqual( expect.any(String));

  });
});
