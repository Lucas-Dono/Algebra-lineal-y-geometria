Clasificación de Formas Cuadráticas.

Las formas cuadráticas se clasifican según el signo de sus valores.

Definiciones.

Una forma cuadrática cu de equis es definida positiva si cu de equis es mayor que cero para todo equis distinto del vector cero.

Es definida negativa si cu de equis es menor que cero para todo equis distinto del vector cero.

Es semidefinida positiva si cu de equis es mayor o igual a cero para todo equis.

Es semidefinida negativa si cu de equis es menor o igual a cero para todo equis.

Es indefinida si cu toma valores tanto positivos como negativos.

Caracterización por Autovalores.

Una forma cuadrática es definida positiva si y solo si todos sus autovalores son positivos.

Es definida negativa si todos sus autovalores son negativos.

Es semidefinida positiva si todos sus autovalores son mayores o iguales a cero.

Es semidefinida negativa si todos son menores o iguales a cero.

Es indefinida si algunos autovalores son positivos y otros son negativos.

Criterio de Sylvester.

Este criterio permite determinar si una matriz es definida positiva sin calcular autovalores.

Los menores principales de A son: delta uno igual a a uno uno, delta dos es el determinante de la submatriz dos por dos superior izquierda, y así sucesivamente hasta delta ene que es el determinante de toda la matriz A.

El teorema de Sylvester dice que A es definida positiva si y solo si todos los menores principales son positivos.

A es definida negativa si y solo si los menores principales alternan de signo, empezando por delta uno negativo, delta dos positivo, delta tres negativo, y así.

Por ejemplo, para la matriz dos, menos uno, menos uno, tres, el menor delta uno es dos, que es positivo. El menor delta dos es dos por tres menos uno por uno, que es cinco, también positivo. Como ambos son positivos, A es definida positiva.

Ejemplos de Clasificación.

Para cu de equis, ye igual a equis al cuadrado más cuatro ye al cuadrado, la matriz es uno, cero, cero, cuatro. Los autovalores son uno y cuatro, ambos positivos. La clasificación es definida positiva.

Para cu de equis, ye igual a equis al cuadrado menos ye al cuadrado, la matriz es uno, cero, cero, menos uno. Los autovalores son uno y menos uno. La clasificación es indefinida.

Para cu de equis, ye, zeta igual a equis al cuadrado más dos ye al cuadrado más tres zeta al cuadrado más dos equis ye, calculamos los menores principales. Delta uno es uno, positivo. Delta dos es dos menos uno, igual a uno, positivo. Delta tres es tres por uno, igual a tres, positivo. La clasificación es definida positiva.

Para cu de equis, ye igual a equis al cuadrado más dos equis ye más ye al cuadrado, que es equis más ye al cuadrado, la matriz es uno, uno, uno, uno. El determinante es cero, por lo que hay un autovalor cero. Los autovalores son cero y dos. La clasificación es semidefinida positiva, pero no definida positiva.

Matriz Definida Positiva.

Una matriz A se llama definida positiva si la forma cuadrática asociada es definida positiva.

Hay varias caracterizaciones equivalentes para una matriz simétrica A. Es definida positiva si y solo si todos los autovalores son positivos. Equivalentemente, si todos los menores principales son positivos. O si existe una matriz be invertible tal que A es igual a be transpuesta por be. O si existe una matriz triangular inferior ele con diagonal positiva tal que A es igual a ele por ele transpuesta, que es la factorización de Cholesky.

Propiedades de Matrices Definidas Positivas.

El determinante es positivo. La traza es positiva. Los elementos diagonales son positivos. La inversa también es definida positiva. La suma de dos matrices definidas positivas es definida positiva. Y ce por A es definida positiva para ce positivo.

Descomposición de Cholesky.

Toda matriz definida positiva A se puede factorizar como ele por ele transpuesta, donde ele es triangular inferior con diagonal positiva.

El algoritmo calcula los elementos de ele mediante fórmulas específicas. El elemento diagonal ele i i es la raíz cuadrada de a i i menos la suma de ele i ka al cuadrado para ka desde uno hasta i menos uno. El elemento ele i jota para i mayor que jota es a i jota menos la suma de ele i ka por ele jota ka, todo dividido por ele jota jota.

Por ejemplo, para A igual a cuatro, dos, dos, cinco, calculamos ele uno uno igual a raíz de cuatro, que es dos. Luego ele dos uno es dos dividido dos, igual a uno. Y ele dos dos es raíz de cinco menos uno, que es dos. La matriz ele es dos, cero, uno, dos. Verificamos que ele por ele transpuesta da la matriz original.

Aplicación: Optimización.

Para una función efe de erre ene a los reales dos veces diferenciable, en un punto crítico donde el gradiente es cero, el comportamiento depende del Hessiano.

Si el Hessiano es definido positivo, el punto es un mínimo local. Si es definido negativo, es un máximo local. Si es indefinido, es un punto silla.

En la siguiente sección aplicaremos estos conceptos a las cónicas.
