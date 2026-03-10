Matriz Inversa.

La inversa de una matriz juega el rol del recíproco para números: permite deshacer la multiplicación.

Definición.

Una matriz cuadrada A es invertible, también llamada no singular, si existe una matriz B tal que A por B es igual a B por A es igual a la identidad.

La matriz B se llama inversa de A y se denota A elevado a menos uno.

Si A no tiene inversa, se dice que es singular.

Unicidad.

Si una matriz es invertible, su inversa es única. No puede haber dos inversas diferentes.

La demostración es elegante. Si B y Ce son ambas inversas de A, entonces B es igual a B por la identidad, que es B por A por Ce, que es la identidad por Ce, que es Ce.

Condiciones Equivalentes.

Para una matriz ene por ene, hay muchas condiciones equivalentes a que sea invertible.

A es invertible si y solo si su determinante es distinto de cero. También es equivalente a que el rango de A sea ene, o a que el espacio nulo de A contenga solo el vector cero.

Otra forma de verlo es que las columnas de A sean linealmente independientes. Lo mismo aplica para las filas.

A es invertible si y solo si es producto de matrices elementales. También si y solo si el sistema A equis igual al vector cero tiene solo la solución trivial. O si el sistema A equis igual a be tiene solución única para todo be.

Finalmente, A es invertible si y solo si su forma escalonada reducida es la identidad.

Cálculo de la Inversa.

El método de Gauss-Jordan funciona así. Primero formamos la matriz aumentada con A a la izquierda y la identidad a la derecha. Luego reducimos a forma escalonada reducida. Si obtenemos la identidad a la izquierda, la matriz de la derecha es la inversa. Si no podemos llegar a la identidad a la izquierda, la matriz no es invertible.

Por ejemplo, para encontrar la inversa de la matriz con uno, dos en la primera fila y tres, siete en la segunda, formamos la matriz aumentada. Aplicamos operaciones de fila hasta obtener la identidad a la izquierda. El resultado es la inversa: siete, menos dos en la primera fila y menos tres, uno en la segunda.

Para matrices dos por dos hay una fórmula directa. Si la matriz tiene a, b en la primera fila y ce, de en la segunda, su inversa es uno sobre a por de menos b por ce, multiplicado por la matriz con de, menos b en la primera fila y menos ce, a en la segunda. Esto es válido siempre que a por de menos b por ce sea distinto de cero.

También existe una fórmula general usando la matriz adjunta. La inversa de A es uno sobre el determinante de A, multiplicado por la adjunta de A, que es la transpuesta de la matriz de cofactores.

Propiedades de la Inversa.

La inversa de la inversa es la matriz original.

La inversa de un producto es el producto de las inversas en orden invertido: la inversa de A por B es B inversa por A inversa.

La inversa de la transpuesta es la transpuesta de la inversa.

La inversa de ce por A es uno sobre ce por la inversa de A.

La inversa de A elevado a ene es la inversa de A, elevada a ene.

Y el determinante de la inversa es uno sobre el determinante de A.

Aplicaciones.

Para resolver sistemas, si A es invertible, el sistema A equis igual a be tiene solución única: equis igual a A inversa por be. Sin embargo, en la práctica es más eficiente usar eliminación gaussiana que calcular la inversa explícitamente.

Para ecuaciones matriciales, si queremos resolver A equis igual a B donde A y B son conocidas, la solución es equis igual a A inversa por B. Si queremos resolver equis por A igual a B, la solución es equis igual a B por A inversa.

El cambio de base usa la propiedad de que la matriz de cambio en una dirección es la inversa de la matriz de cambio en la otra dirección.

Matrices Elementales.

Una matriz elemental es el resultado de aplicar una operación elemental a la identidad.

Hay tres tipos de matrices elementales. La que intercambia dos filas. La que multiplica una fila por un escalar. Y la que suma un múltiplo de una fila a otra.

Multiplicar una matriz A por una matriz elemental a la izquierda aplica la operación correspondiente a A.

Un teorema importante dice que una matriz es invertible si y solo si es producto de matrices elementales.

Inversas de Matrices Especiales.

Para una matriz diagonal con elementos de uno, de dos, hasta de ene en la diagonal, todos distintos de cero, la inversa es la diagonal con elementos uno sobre de uno, uno sobre de dos, hasta uno sobre de ene.

Una matriz triangular es invertible si y solo si todos los elementos de la diagonal son distintos de cero. Además, la inversa de una triangular superior es triangular superior, y la inversa de una triangular inferior es triangular inferior.

En la siguiente sección estudiaremos el rango de una matriz.
