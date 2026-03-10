Propiedades de los Determinantes.

Las propiedades de los determinantes simplifican cálculos y revelan conexiones profundas con otras estructuras matriciales.

Propiedades Básicas.

El determinante de la identidad es uno.

El determinante de la transpuesta de A es igual al determinante de A. Esto implica que todo resultado válido para filas también vale para columnas.

El determinante de un producto es el producto de los determinantes. El determinante de A por B es igual al determinante de A multiplicado por el determinante de B. Como consecuencia, el determinante de A elevado a ene es el determinante de A, elevado a ene.

Si A es invertible, el determinante de su inversa es uno sobre el determinante de A. La demostración es simple: el determinante de A por el determinante de A inversa es igual al determinante de A por A inversa, que es el determinante de la identidad, que es uno.

El determinante de ce por A, donde ce es un escalar, es ce elevado a ene multiplicado por el determinante de A, donde ene es el orden de la matriz. Por ejemplo, si A es de tres por tres, el determinante de dos por A es dos al cubo, que es ocho, multiplicado por el determinante de A.

Efecto de Operaciones Elementales.

Intercambiar dos filas cambia el signo del determinante. Una consecuencia inmediata es que si dos filas son iguales, el determinante es cero.

Multiplicar una fila por un escalar ce multiplica el determinante por ce.

Sumar un múltiplo de una fila a otra no cambia el determinante. Esta es la operación que más usamos en la eliminación gaussiana.

Condiciones para Determinante Cero.

El determinante de A es cero si y solo si ocurre alguna de las siguientes situaciones.

Una fila, o una columna, es toda ceros.

Dos filas, o dos columnas, son iguales.

Una fila es múltiplo de otra.

Una fila es combinación lineal de las otras.

Las columnas son linealmente dependientes.

El rango de A es menor que ene.

O equivalentemente, A es singular, no invertible.

Multilinealidad.

El determinante es multilineal en las filas. Esto significa que si una fila se escribe como suma de dos vectores, el determinante se puede calcular sumando dos determinantes donde solo esa fila cambia. Y si una fila se multiplica por un escalar, el determinante se multiplica por ese escalar.

Alternancia.

El determinante es alternante: intercambiar dos filas cambia el signo. Esto lo hace antisimétrico en sus filas.

Determinante y Rango.

Para una matriz ene por ene, el determinante es distinto de cero si y solo si el rango es ene, si y solo si A es invertible.

Teoremas Importantes.

El teorema de invertibilidad dice que A es invertible si y solo si su determinante es distinto de cero.

La fórmula de la adjunta permite calcular la inversa: A inversa es uno sobre el determinante de A, multiplicado por la adjunta de A, que es la transpuesta de la matriz de cofactores.

Determinantes de Matrices Especiales.

El determinante de una matriz triangular es el producto de los elementos de la diagonal.

El determinante de una matriz diagonal también es el producto de los elementos diagonales.

Para matrices por bloques, si tenemos una matriz con B arriba a la izquierda, Ce arriba a la derecha, la matriz cero abajo a la izquierda, y De abajo a la derecha, entonces el determinante es el determinante de B multiplicado por el determinante de De.

El determinante de una matriz ortogonal es uno o menos uno.

El determinante de una matriz antisimétrica de orden impar es cero.

Ejemplos de Aplicación.

Si A es de cuatro por cuatro con determinante cinco, entonces el determinante de tres A es tres elevado a cuatro, que es ochenta y uno, multiplicado por cinco, igual a cuatrocientos cinco.

Si el determinante de A es dos y el de B es menos tres, entonces el determinante de A al cuadrado por B inversa es el determinante de A al cuadrado, multiplicado por el determinante de B inversa, que es cuatro por menos un tercio, igual a menos cuatro tercios.

Para verificar si una matriz es invertible, podemos calcular su determinante. Si una fila es combinación lineal de las otras, el determinante es cero y la matriz no es invertible.

En la siguiente sección estudiaremos la Regla de Cramer para resolver sistemas.
