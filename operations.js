//* Como convertir una variable a entero ?
//* parseInt()
//* +
// +"1" = 1
/**
 * La funcion retorna la suma de dos numeros
 * @param {number} a
 * @param {number} b
 * @returns number
 */
export const sumar = (a, b) => +a + +b;

export const restar = (a, b) => +a - +b;

export const multplicar = (a, b) => +a * +b;

export const dividir = (a, b) => {
  try {
    return +a / +b;
  } catch (e) {
    throw typeError(e.toString());
  }
};
