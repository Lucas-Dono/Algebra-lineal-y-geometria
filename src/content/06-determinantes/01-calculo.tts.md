Cálculo de Determinantes.

Existen varios métodos para calcular determinantes, cada uno con sus ventajas según el contexto.

Determinante Dos por Dos.

Para una matriz de dos por dos con elementos a, b en la primera fila y ce, de en la segunda, el determinante es a por de menos b por ce.

La regla es simple: producto de la diagonal principal menos producto de la diagonal secundaria.

Por ejemplo, el determinante de la matriz con cinco, tres en la primera fila y dos, siete en la segunda es cinco por siete menos tres por dos, que es treinta y cinco menos seis, igual a veintinueve.

Determinante Tres por Tres con la Regla de Sarrus.

Para matrices de tres por tres existe un método gráfico llamado regla de Sarrus.

Se copian las dos primeras columnas a la derecha de la matriz. Luego se suman los productos de las tres diagonales que bajan hacia la derecha, y se restan los productos de las tres diagonales que suben hacia la derecha.

Por ejemplo, para la matriz con uno, dos, tres en la primera fila, cuatro, cinco, seis en la segunda, y siete, ocho, nueve en la tercera, el cálculo da: uno por cinco por nueve, más dos por seis por siete, más tres por cuatro por ocho, menos tres por cinco por siete, menos uno por seis por ocho, menos dos por cuatro por nueve. Esto es cuarenta y cinco más ochenta y cuatro más noventa y seis, menos ciento cinco menos cuarenta y ocho menos setenta y dos, que es cero.

Importante: la regla de Sarrus solo funciona para matrices tres por tres. No se puede usar para dimensiones mayores.

Expansión por Cofactores.

Este método funciona para cualquier dimensión.

Primero, el menor de la posición i, jota es el determinante de la submatriz que resulta de eliminar la fila i y la columna jota.

El cofactor de la posición i, jota es el menor multiplicado por menos uno elevado a i más jota. El signo alterna en un patrón de tablero de ajedrez: positivo en las esquinas, negativo en las adyacentes, y así sucesivamente.

Para calcular el determinante, elegimos cualquier fila y sumamos cada elemento multiplicado por su cofactor. También podemos elegir cualquier columna.

Por ejemplo, para una matriz de tres por tres, si expandimos por la primera columna que tiene un cero, podemos ahorrarnos un cálculo. El determinante es el primer elemento por su cofactor, más el segundo elemento, que es cero, por su cofactor, más el tercer elemento por su cofactor.

Método de Reducción por Filas.

Se usa eliminación gaussiana para obtener una matriz triangular. El determinante de una matriz triangular es simplemente el producto de los elementos de la diagonal.

Pero hay que tener cuidado con cómo las operaciones elementales afectan al determinante.

Intercambiar dos filas multiplica el determinante por menos uno. Multiplicar una fila por un escalar ce multiplica el determinante por ce. Y sumar un múltiplo de una fila a otra no cambia el determinante.

Por ejemplo, si durante la reducción intercambiamos filas dos veces, el determinante de la matriz original es el de la triangular, porque menos uno por menos uno es uno.

Determinante de Matrices Triangulares.

Para cualquier matriz triangular, sea superior o inferior, el determinante es el producto de los elementos de la diagonal.

Esto es muy útil porque es fácil de calcular.

Determinante de Matriz Diagonal.

El determinante de una matriz diagonal es simplemente el producto de los elementos diagonales.

Resumen de Métodos.

Para matrices dos por dos, usamos la fórmula directa, que es instantánea.

Para matrices tres por tres, la regla de Sarrus es rápida.

Para matrices pequeñas con muchos ceros, la expansión por cofactores es conveniente.

Para matrices grandes, el método de reducción es el más eficiente, con complejidad del orden de ene al cubo.

En la siguiente sección estudiaremos las propiedades de los determinantes.
