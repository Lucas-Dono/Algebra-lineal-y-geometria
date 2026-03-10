Potencias de Matrices.

La diagonalización simplifica dramáticamente el cálculo de potencias de matrices.

Fórmula para Potencias.

Si A es igual a pe por de por pe inversa, entonces A a la ene es igual a pe por de a la ene por pe inversa.

Y como de es diagonal, de a la ene es muy fácil de calcular. Simplemente elevamos cada elemento diagonal a la potencia ene. Si la diagonal tiene lambda uno, lambda dos, hasta lambda ene, entonces de a la ene tiene lambda uno a la ene, lambda dos a la ene, y así sucesivamente.

Demostración.

A al cuadrado es pe por de por pe inversa, todo al cuadrado, que es pe por de por pe inversa por pe por de por pe inversa. Como pe inversa por pe es la identidad, esto se simplifica a pe por de al cuadrado por pe inversa.

Por inducción, A a la ene es pe por de a la ene por pe inversa.

Ejemplo: Fibonacci.

La sucesión de Fibonacci está definida por efe cero igual a cero, efe uno igual a uno, y cada término siguiente es la suma de los dos anteriores.

Esta sucesión se puede expresar matricialmente. Si definimos la matriz A con uno, uno en la primera fila y uno, cero en la segunda, entonces el vector efe ene más uno, efe ene es igual a A a la ene por el vector uno, cero.

Los autovalores de A se obtienen del polinomio lambda al cuadrado menos lambda menos uno igual a cero. Las raíces son fi, la razón áurea, que es aproximadamente uno punto seis uno ocho, y psi, que es aproximadamente menos cero punto seis uno ocho.

La fórmula de Binet para los números de Fibonacci es efe ene igual a fi a la ene menos psi a la ene, todo dividido por raíz de cinco.

Ejemplo Numérico.

Calculemos A a la diez donde A tiene dos, uno en la primera fila y uno, dos en la segunda.

Los autovalores son tres y uno con autovectores uno, uno y uno, menos uno.

La matriz pe tiene estos autovectores como columnas. De tiene tres, cero y cero, uno en la diagonal.

De a la diez tiene tres a la diez, cero y cero, uno. Tres a la diez es cincuenta y nueve mil cuarenta y nueve.

Multiplicando pe por de a la diez por pe inversa, obtenemos A a la diez, una matriz con veintinueve mil quinientos veinticinco en las esquinas de la diagonal y veintinueve mil quinientos veinticuatro en las otras posiciones.

Comportamiento a Largo Plazo.

El comportamiento de A a la ene cuando ene tiende a infinito depende de los autovalores.

Si todos los autovalores tienen valor absoluto menor que uno, A a la ene converge a la matriz cero.

Si el autovalor de mayor valor absoluto es mayor que uno, la norma de A a la ene crece sin cota.

Cadenas de Markov.

Una matriz estocástica pe tiene entradas no negativas y cada columna suma uno.

Si equis de ene es el vector de probabilidades en el paso ene, entonces equis de ene más uno es igual a pe por equis de ene. Y equis de ene es pe a la ene por equis de cero.

Por ejemplo, si modelamos el clima con dos estados, soleado y nublado, los autovalores de la matriz determinan el comportamiento a largo plazo. El autovalor uno da la distribución estacionaria, el vector de probabilidades al que el sistema converge sin importar el estado inicial.

Exponencial de Matrices.

La exponencial de una matriz se define como la serie infinita: la identidad más A más A al cuadrado sobre dos factorial, más A al cubo sobre tres factorial, y así sucesivamente.

Si A es diagonalizable, e a la A es pe por e a la de por pe inversa, donde e a la de es la diagonal con e a la lambda uno, e a la lambda dos, y así.

La aplicación principal es la solución de sistemas de ecuaciones diferenciales. La solución de equis prima de te igual a A por equis de te es equis de te igual a e a la A te por equis de cero.

Método sin Diagonalización: Cayley-Hamilton.

Si conocemos el polinomio característico, podemos usar el teorema de Cayley-Hamilton para calcular potencias.

Por ejemplo, si el polinomio es lambda al cuadrado menos cinco lambda más seis, entonces A al cuadrado es igual a cinco A menos seis I.

A al cubo es A por A al cuadrado, que es A por cinco A menos seis I, que es cinco A al cuadrado menos seis A. Sustituyendo A al cuadrado, obtenemos diecinueve A menos treinta I.

Cualquier potencia de A se puede reducir a una combinación lineal de la identidad y A.

En la siguiente sección veremos aplicaciones de autovalores y autovectores.
