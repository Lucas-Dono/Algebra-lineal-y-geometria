Coordenadas y Cambio de Base.

Las coordenadas permiten representar cualquier vector como una lista de números, una vez elegida una base.

Coordenadas Respecto a una Base.

Sea be una base ordenada de ve, formada por los vectores be uno, be dos, hasta be ene.

Para cualquier vector ve del espacio, existen escalares únicos ce uno, ce dos, hasta ce ene, tales que ve es igual a ce uno por be uno más ce dos por be dos y así hasta ce ene por be ene.

Las coordenadas de ve respecto a la base be son estos escalares ce uno, ce dos, hasta ce ene, escritos como un vector columna. Lo denotamos como ve entre corchetes con subíndice be.

Ejemplo en Erre Dos.

Consideremos la base be formada por los vectores uno, uno y uno, menos uno.

Para encontrar las coordenadas del vector tres, uno respecto a esta base, escribimos ce uno por uno, uno más ce dos por uno, menos uno igual a tres, uno.

Esto da el sistema: ce uno más ce dos igual a tres, y ce uno menos ce dos igual a uno.

Resolviendo, obtenemos ce uno igual a dos y ce dos igual a uno.

Por lo tanto, las coordenadas de tres, uno respecto a be son dos, uno.

Verificación: dos por uno, uno más uno por uno, menos uno es dos, dos más uno, menos uno, que es tres, uno.

Cálculo de Coordenadas.

El método general para encontrar las coordenadas de ve respecto a la base be es el siguiente. Primero formamos la matriz B cuyas columnas son los vectores de la base. Luego resolvemos el sistema B por equis igual a ve. La solución equis son las coordenadas de ve respecto a be.

En el caso de la base canónica de erre ene, las coordenadas de un vector son simplemente sus componentes. No hay que resolver ningún sistema.

Propiedades de las Coordenadas.

La función que asigna a cada vector sus coordenadas es biyectiva. Cada vector tiene coordenadas únicas, y cada lista de coordenadas corresponde a un único vector.

Además, esta función es lineal. Las coordenadas de una suma son la suma de las coordenadas. Las coordenadas de un escalar por un vector son el escalar por las coordenadas.

Esta función es un isomorfismo entre el espacio ve y erre ene.

Matriz de Cambio de Base.

Sean be y ce dos bases del mismo espacio ve.

La matriz de cambio de base de be a ce, denotada pe de ce a be, es la matriz que transforma las coordenadas respecto a be en coordenadas respecto a ce.

Si multiplicamos esta matriz por las coordenadas de un vector respecto a be, obtenemos sus coordenadas respecto a ce.

Para construir esta matriz, las columnas son las coordenadas de los vectores de be expresadas en la base ce.

Si las bases están en erre ene, hay un método de cálculo práctico. La matriz de cambio de base es ce inversa por B, donde B y ce son las matrices cuyas columnas son los vectores de las bases be y ce respectivamente.

También se puede calcular usando el método de Gauss-Jordan. Formamos la matriz aumentada con ce a la izquierda y B a la derecha. Reducimos a forma escalonada reducida. El resultado tiene la identidad a la izquierda y la matriz de cambio de base a la derecha.

Propiedades del Cambio de Base.

La matriz de cambio de be a be es la identidad, porque las coordenadas no cambian si usamos la misma base.

La matriz de cambio de ce a be es la inversa de la matriz de cambio de be a ce.

Si tenemos tres bases be, ce y de, la matriz de cambio de be a de es la matriz de cambio de ce a de multiplicada por la matriz de cambio de be a ce. Esto es la propiedad de transitividad.

Ejemplo Completo.

En erre dos, sean be la base formada por uno, dos y tres, uno, y ce la base formada por uno, cero y uno, uno.

Primero calculamos las matrices B y Ce con estos vectores como columnas.

Luego calculamos la inversa de Ce, que resulta ser la matriz con uno, menos uno en la primera fila y cero, uno en la segunda.

La matriz de cambio de base es Ce inversa por B, que da la matriz menos uno, dos en la primera fila y dos, uno en la segunda.

Para verificar, tomemos un vector con coordenadas uno, uno respecto a be. Este vector es uno, dos más tres, uno, que es cuatro, tres.

Multiplicando la matriz de cambio por uno, uno obtenemos uno, tres.

Verificación directa: uno por uno, cero más tres por uno, uno es uno, cero más tres, tres, que es cuatro, tres.

Aplicaciones.

El cambio de base es fundamental para la diagonalización. Si una matriz A es diagonalizable, entonces D igual a pe inversa por A por pe es diagonal, donde pe es la matriz de cambio de base a la base de autovectores.

En general, elegir la base adecuada puede simplificar mucho los cálculos. Las bases ortogonales son ideales para productos internos. Las bases de autovectores simplifican las potencias de matrices.

Con esto concluye el capítulo de Espacios Vectoriales. En el siguiente capítulo estudiaremos las operaciones con Matrices.
