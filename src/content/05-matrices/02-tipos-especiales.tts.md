Tipos Especiales de Matrices.

Ciertas matrices con estructuras particulares tienen propiedades que simplifican los cálculos.

Matriz Identidad.

La matriz identidad, denotada I ene o simplemente I, tiene unos en la diagonal y ceros en las demás posiciones.

Por ejemplo, la identidad de tres por tres tiene uno, cero, cero en la primera fila, cero, uno, cero en la segunda, y cero, cero, uno en la tercera.

La identidad cumple varias propiedades importantes. A por I es igual a I por A es igual a A, para toda matriz A compatible. I elevado a cualquier potencia sigue siendo I. El determinante de I es uno. Y la inversa de I es I misma.

Matriz Diagonal.

Una matriz es diagonal si todos los elementos fuera de la diagonal principal son cero. Solo pueden ser distintos de cero los elementos a i i.

Por ejemplo, una matriz diagonal de tres por tres tiene de uno en la posición uno uno, de dos en la posición dos dos, y de tres en la posición tres tres, con ceros en todas las demás posiciones.

El producto de dos matrices diagonales es diagonal, y se obtiene multiplicando las entradas diagonales correspondientes. La potencia de una diagonal es fácil: simplemente elevamos cada entrada diagonal a esa potencia. La inversa de una diagonal existe si ningún elemento diagonal es cero, y se obtiene invirtiendo cada entrada. El determinante de una diagonal es el producto de los elementos diagonales.

Matrices Triangulares.

Una matriz es triangular superior si todos los elementos debajo de la diagonal principal son cero.

Una matriz es triangular inferior si todos los elementos arriba de la diagonal principal son cero.

El producto de triangulares superiores es triangular superior. El producto de triangulares inferiores es triangular inferior. El determinante de una matriz triangular es simplemente el producto de los elementos de la diagonal. Y la inversa de una triangular, si existe, es del mismo tipo.

Matriz Simétrica.

Una matriz es simétrica si es igual a su transpuesta. Esto significa que el elemento a i jota es igual al elemento a jota i para todos los índices.

Por ejemplo, una matriz simétrica de tres por tres podría tener uno, dos, tres en la primera fila, dos, cuatro, cinco en la segunda, y tres, cinco, seis en la tercera. Observa que los elementos se reflejan respecto a la diagonal.

La suma de matrices simétricas es simétrica. Un escalar por una matriz simétrica es simétrica. Las potencias de una matriz simétrica son simétricas.

Una propiedad muy importante es que los autovalores de una matriz simétrica real son siempre números reales. Además, toda matriz simétrica real es diagonalizable usando una base ortonormal de autovectores.

Las matrices simétricas aparecen frecuentemente en aplicaciones: matrices de covarianza en estadística, matrices de distancia, y matrices Hessianas en optimización.

Matriz Antisimétrica.

Una matriz es antisimétrica si es igual al negativo de su transpuesta. Esto significa que a i jota es igual a menos a jota i.

Una consecuencia inmediata es que los elementos diagonales deben ser cero, porque a i i es igual a menos a i i, lo cual solo ocurre si a i i es cero.

Por ejemplo, una matriz antisimétrica de tres por tres podría tener cero, dos, menos tres en la primera fila, menos dos, cero, uno en la segunda, y tres, menos uno, cero en la tercera.

Los autovalores de matrices antisimétricas reales son imaginarios puros o cero.

Matriz Ortogonal.

Una matriz cuadrada es ortogonal si su transpuesta es igual a su inversa. Es decir, cu transpuesta por cu es igual a cu por cu transpuesta es igual a la identidad.

Las columnas de una matriz ortogonal forman una base ortonormal de erre ene. Lo mismo ocurre con las filas.

El determinante de una matriz ortogonal es uno o menos uno.

Una propiedad geométrica fundamental es que las matrices ortogonales preservan longitudes: la norma de cu por equis es igual a la norma de equis. También preservan ángulos y productos punto.

Ejemplos importantes incluyen las matrices de rotación. La rotación por un ángulo zeta en erre dos tiene coseno de zeta y menos seno de zeta en la primera fila, y seno de zeta y coseno de zeta en la segunda.

Otro ejemplo es la reflexión respecto al eje equis, que tiene uno, cero en la primera fila y cero, menos uno en la segunda.

Matriz de Permutación.

Una matriz de permutación tiene exactamente un uno en cada fila y en cada columna, y ceros en las demás posiciones.

Multiplicar una matriz de permutación pe por una matriz A permuta las filas de A.

Las matrices de permutación son ortogonales, así que su inversa es simplemente su transpuesta. Su determinante es uno o menos uno. Y el producto de dos matrices de permutación es otra matriz de permutación.

Matriz Idempotente.

Una matriz es idempotente si al elevarla al cuadrado obtenemos la misma matriz: A al cuadrado igual a A.

El ejemplo más importante son las matrices de proyección sobre subespacios. Por ejemplo, la matriz con uno, cero en la primera fila y cero, cero en la segunda proyecta sobre el eje equis.

Matriz Nilpotente.

Una matriz es nilpotente si alguna potencia da la matriz cero: A elevado a ka es la matriz cero para algún ka.

Por ejemplo, la matriz con cero, uno en la primera fila y cero, cero en la segunda es nilpotente, porque al elevarla al cuadrado obtenemos la matriz cero.

Todas los autovalores de una matriz nilpotente son cero.

Resumen.

Las matrices diagonales son fáciles de invertir y de elevar a potencias. Las triangulares tienen determinante igual al producto de la diagonal. Las simétricas tienen autovalores reales. Las ortogonales preservan normas. Las idempotentes son proyecciones. Y las nilpotentes tienen todos sus autovalores iguales a cero.

En la siguiente sección estudiaremos la matriz inversa.
