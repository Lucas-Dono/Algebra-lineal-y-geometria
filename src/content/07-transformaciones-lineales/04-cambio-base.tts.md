Cambio de Base para Transformaciones Lineales.

La matriz de una transformación lineal depende de las bases elegidas. Entender cómo cambia esta matriz es fundamental.

Matriz de Cambio de Base.

Sean be y be prima dos bases de ve.

La matriz de cambio de base de be a be prima transforma las coordenadas de un vector respecto a be en sus coordenadas respecto a be prima.

La columna jota de esta matriz contiene las coordenadas del jota-ésimo vector de be expresadas en la base be prima.

Las propiedades principales son las siguientes.

La matriz de cambio de be prima a be es la inversa de la matriz de cambio de be a be prima.

El cambio de base es transitivo: para ir de be a be doble prima, podemos ir de be a be prima y luego de be prima a be doble prima, multiplicando las matrices.

La matriz de cambio de be a be es la identidad.

Fórmula de Cambio de Base para Operadores.

Sea te un operador lineal, es decir, una transformación de ve a ve, el mismo espacio.

Si tenemos la matriz de te en la base be y queremos la matriz en la base be prima, la fórmula es: la matriz en be prima es igual a pe inversa por la matriz en be por pe, donde pe es la matriz de cambio de base.

Matrices Semejantes.

Dos matrices A y B son semejantes si existe una matriz invertible pe tal que B es igual a pe inversa por A por pe.

Las matrices semejantes representan el mismo operador en diferentes bases.

Los invariantes de semejanza son propiedades que no cambian al cambiar de base. Si A y B son semejantes, tienen el mismo determinante, la misma traza, el mismo rango, el mismo polinomio característico, y los mismos autovalores.

Ejemplo Detallado.

Sea te de erre dos a erre dos dada por te de equis, ye igual a dos equis más ye, equis más dos ye.

En la base estándar, la matriz es dos, uno en la primera fila y uno, dos en la segunda fila.

Consideremos la base be formada por uno, uno y uno, menos uno.

Calculamos te de uno, uno, que es tres, tres. En la base be, esto es tres veces uno, uno más cero veces uno, menos uno.

Calculamos te de uno, menos uno, que es uno, menos uno. En la base be, esto es cero veces uno, uno más uno veces uno, menos uno.

La matriz en la base be es tres, cero en la primera fila y cero, uno en la segunda fila. Es una matriz diagonal.

Esto significa que los vectores uno, uno y uno, menos uno son direcciones especiales de la transformación. En la dirección uno, uno, la transformación simplemente multiplica por tres. En la dirección uno, menos uno, deja el vector igual.

Caso General.

Si te va de ve a doble ve, con bases be y be prima en ve, y bases ce y ce prima en doble ve, la fórmula de cambio involucra dos matrices de cambio de base.

La matriz de te en las nuevas bases es igual a cu inversa por la matriz de te en las bases originales por pe, donde pe es el cambio de base en el dominio y cu es el cambio de base en el codominio.

Diagonalización como Cambio de Base.

Una matriz A es diagonalizable si es semejante a una matriz diagonal.

Esto significa que existe una base en la cual el operador asociado es diagonal, es decir, actúa como un escalamiento puro en cada dirección de la base.

Las columnas de la matriz de cambio son los autovectores de A. La diagonal de la matriz diagonal contiene los autovalores.

Aplicación: Potencias de Matrices.

Si A es igual a pe por de por pe inversa, donde de es diagonal, entonces A elevado a ene es igual a pe por de elevado a ene por pe inversa.

Y de elevado a ene es trivial de calcular: simplemente elevamos cada entrada diagonal a la potencia ene.

Por ejemplo, para la matriz dos, uno en la primera fila y uno, dos en la segunda, que es diagonalizable con matriz diagonal tres, cero y cero, uno, calcular A elevado a diez es fácil.

A elevado a diez es pe por la matriz diagonal tres a la diez, cero y cero, uno a la diez, por pe inversa.

El resultado es una matriz que puede calcularse explícitamente sin hacer diez multiplicaciones.

Resumen de Fórmulas.

Para cambio de coordenadas de un vector, las coordenadas en be prima son pe inversa por las coordenadas en be.

Para un operador en el mismo espacio, la matriz en be prima es pe inversa por la matriz en be por pe.

Para una transformación general entre dos espacios, la matriz en las nuevas bases es cu inversa por la matriz original por pe.

Con esto concluye el capítulo de Transformaciones Lineales. En el siguiente capítulo estudiaremos Autovalores y Autovectores.
