Diagonalización de Matrices.

La diagonalización es el proceso de encontrar una base en la que la matriz de un operador es diagonal.

Definición.

Una matriz A de ene por ene es diagonalizable si existe una matriz invertible pe tal que pe inversa por A por pe es igual a una matriz diagonal de.

Equivalentemente, A es igual a pe por de por pe inversa.

Interpretación.

Las columnas de pe son autovectores de A.

Los elementos diagonales de de son los autovalores correspondientes.

En la base de autovectores, A actúa como escalamientos puros en cada dirección.

Teorema de Diagonalización.

Una matriz A de ene por ene es diagonalizable si y solo si tiene ene autovectores linealmente independientes.

Una condición suficiente es que A tenga ene autovalores distintos. En ese caso, automáticamente tiene ene autovectores linealmente independientes, porque autovectores de autovalores distintos siempre son independientes.

La condición necesaria y suficiente es que para cada autovalor, la multiplicidad geométrica sea igual a la multiplicidad algebraica.

Procedimiento de Diagonalización.

Primero calculamos los autovalores de A.

Luego, para cada autovalor, encontramos una base del autoespacio correspondiente.

Verificamos que en total hay ene autovectores linealmente independientes.

Formamos la matriz pe poniendo los autovectores como columnas.

Formamos la matriz de poniendo los autovalores en la diagonal, en el mismo orden que los autovectores correspondientes.

Ejemplo Completo.

Diagonalicemos la matriz A con uno, dos en la primera fila y dos, uno en la segunda.

Los autovalores se obtienen del polinomio característico. Uno menos lambda al cuadrado menos cuatro es igual a lambda al cuadrado menos dos lambda menos tres, que factoriza como lambda menos tres por lambda más uno.

Los autovalores son tres y menos uno.

Para lambda igual a tres, A menos tres I tiene menos dos, dos en la primera fila y dos, menos dos en la segunda. El autovector es el vector uno, uno.

Para lambda igual a menos uno, A más I tiene dos, dos en la primera fila y dos, dos en la segunda. El autovector es el vector uno, menos uno.

Las matrices son pe con columnas uno, uno y uno, menos uno, y de diagonal con tres y menos uno.

Verificamos multiplicando pe inversa por A por pe. El resultado es la matriz diagonal tres, cero y cero, menos uno.

Ejemplo No Diagonalizable.

Consideremos la matriz A con dos, uno en la primera fila y cero, dos en la segunda.

El polinomio característico es dos menos lambda al cuadrado igual a cero.

El único autovalor es dos con multiplicidad algebraica dos.

Para el autoespacio, A menos dos I tiene cero, uno en la primera fila y cero, cero en la segunda. La única condición es ye igual a cero, así que el autovector es el vector uno, cero.

La multiplicidad geométrica es uno, que es menor que la multiplicidad algebraica dos.

Conclusión: A no es diagonalizable.

Matrices Simétricas.

El teorema espectral para matrices reales simétricas dice que toda matriz simétrica real es ortogonalmente diagonalizable.

Esto significa que A es igual a cu por de por cu transpuesta, donde cu es ortogonal y de es diagonal.

Las propiedades son que todos los autovalores son reales, autovectores de autovalores distintos son ortogonales, y se puede elegir una base ortonormal de autovectores.

Cuándo No es Diagonalizable.

Una matriz no es diagonalizable si tiene autovalores complejos cuando trabajamos sobre los reales, o si algún autovalor tiene multiplicidad geométrica menor que la multiplicidad algebraica.

Las matrices no diagonalizables tienen una forma de Jordan casi diagonal, con bloques que tienen el autovalor en la diagonal y unos arriba de la diagonal.

En la siguiente sección veremos aplicaciones de la diagonalización al cálculo de potencias.
