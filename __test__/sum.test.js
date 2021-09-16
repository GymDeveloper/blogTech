import { sumar, restar } from "../operations";

/**
 * *Part1: test('recibe la descripcion de la prueba', 'callback')
 */
test("Esta funcion va a recibir 6 + 4 y retorna 10", () => {
  // Dentro de expect debo llamar a la funcion y saber que me va a retornar
  expect(sumar(6, 4)).toBe(10);
});

test("Esta funcion va a restar 8 - 6 y retorna 2", () => {
  expect(restar(8, 6)).toBe(2);
});
