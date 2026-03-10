Matriz Asociada a una Transformación Lineal.

Toda transformación lineal entre espacios de dimensión finita puede representarse mediante una matriz.

Construcción de la Matriz.

Sea te una transformación lineal de ve a doble ve. Elegimos una base be de ve, formada por los vectores ve uno hasta ve ene, y una base ce de doble ve, formada por los vectores doble ve uno hasta doble ve eme.

La matriz de te respecto a las bases be y ce se construye columna por columna.

Para la columna jota, expresamos te de ve jota como combinación lineal de los vectores de la base ce. Los coeficientes de esa combinación lineal son las entradas de la columna jota.

Fórmula Fundamental.

La matriz tiene la propiedad de que las coordenadas de te de ve en la base ce son iguales a la matriz multiplicada por las coordenadas de ve en la base be.

La matriz transforma coordenadas en la base del dominio a coordenadas en la base del codominio.

Caso Estándar.

Cuando trabajamos en erre ene y erre eme con las bases estándar, la matriz es muy fácil de construir.

Las columnas son simplemente las imágenes de los vectores de la base estándar e uno, e dos, hasta e ene.

Ejemplos.

Para la rotación de noventa grados en erre dos, te de e uno es te de uno, cero, que es cero, uno. Y te de e dos es te de cero, uno, que es menos uno, cero.

La matriz tiene cero, menos uno en la primera fila y uno, cero en la segunda fila.

Para la proyección de erre tres a erre dos dada por pe de equis, ye, zeta igual a equis, ye, las imágenes de los vectores de la base estándar son uno, cero y cero, uno y cero, cero.

La matriz es de dos por tres, con uno, cero, cero en la primera fila y cero, uno, cero en la segunda fila.

Para transformaciones con bases no estándar, el proceso es similar pero hay que expresar las imágenes en la base del codominio.

Composición de Transformaciones.

Si te va de u a ve y ese va de ve a doble ve, la matriz de la composición es el producto de las matrices, en el orden ese por te.

Por ejemplo, dos rotaciones de cuarenta y cinco grados compuestas dan una rotación de noventa grados. La matriz de la composición es el cuadrado de la matriz de rotación por cuarenta y cinco grados.

Transformación Inversa.

Si te es invertible, la matriz de la inversa es la inversa de la matriz. La matriz de te inversa es la matriz de te, invertida.

Matriz de la Derivada.

Consideremos la derivada de de polinomios de grado dos a polinomios de grado uno, con base uno, equis, equis al cuadrado para el dominio y uno, equis para el codominio.

La derivada de uno es cero, que se escribe como cero por uno más cero por equis.

La derivada de equis es uno, que se escribe como uno por uno más cero por equis.

La derivada de equis al cuadrado es dos equis, que se escribe como cero por uno más dos por equis.

La matriz tiene cero, uno, cero en la primera fila y cero, cero, dos en la segunda fila.

Para verificar, tomemos el polinomio tres más dos equis más cinco equis al cuadrado, con coordenadas tres, dos, cinco. Multiplicando la matriz por este vector obtenemos dos, diez, que representa el polinomio dos más diez equis. Efectivamente, la derivada de tres más dos equis más cinco equis al cuadrado es dos más diez equis.

Propiedades de la Correspondencia.

La correspondencia entre transformaciones y matrices es lineal. La matriz de la suma de dos transformaciones es la suma de las matrices. La matriz de un escalar por una transformación es el escalar por la matriz.

Preserva la composición. La matriz de una composición es el producto de las matrices.

Preserva la identidad. La matriz de la transformación identidad es la matriz identidad.

Y preserva inversas. La matriz de la inversa es la inversa de la matriz.

Rango y Núcleo vía la Matriz.

El rango de la transformación es igual al rango de su matriz. La nulidad de la transformación es igual a la nulidad de su matriz.

El núcleo de la transformación corresponde al espacio nulo de la matriz. La imagen de la transformación corresponde al espacio columna de la matriz.

Inyectividad y Sobreyectividad.

Para te de ve a doble ve, donde ve tiene dimensión ene y doble ve tiene dimensión eme, la transformación es inyectiva si y solo si el rango de la matriz es ene. Es sobreyectiva si y solo si el rango es eme. Y es isomorfismo si y solo si la matriz es invertible.

En la siguiente sección estudiaremos cómo cambia la matriz con cambio de base.
