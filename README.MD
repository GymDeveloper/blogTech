### CONST - LET - VAR

Esto es para JS y TS

* CONST => Es usado para constantes, en el JS moderno se recomienda usar const cuando tu variable no cambie, porque const es inmutable, ademas const pesa menor que let y var.

```
const expess = require('express')
```

* LET => Es usado cuando el valor de la variable puede cambiar en el contexto, por ejemplo.

```
let suma = 0;

suma = 6 + 4;
```

* VAR => Es muy parecido a let pero ya no se usa, por que var va en un contexto global, ademas var es muy pesado

```
nota: ya no se de usar var
```

# JWT

```
nota: El login y el signUp (register) no se deben proteger, porque son las encargadas de generar el token
```

### Headers

La forma en la que se pasan los tokens es por el HEADER

Usando la palabra reserva

```
Authorization: Bearer <token>
```

### Status

```
200: ok
403: forbidden (falta de permisos) unathorization
500: internal error
404: not found
401: error message
201: created
```