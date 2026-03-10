Aplicaciones de Autovalores y Autovectores.

Los autovalores y autovectores tienen aplicaciones en casi todas las áreas de la ciencia y la ingeniería.

Sistemas de Ecuaciones Diferenciales.

Consideremos el sistema equis prima de te igual a A por equis de te, donde equis de te es un vector con ene componentes.

Si A es diagonalizable con autovalores lambda i y autovectores ve i, la solución general es una combinación lineal de términos de la forma e a la lambda i te multiplicado por ve i.

Por ejemplo, para el sistema equis uno prima igual a equis uno más equis dos, equis dos prima igual a cuatro equis uno menos dos equis dos, los autovalores son dos y menos tres, con autovectores uno, uno y uno, menos cuatro.

La solución general es ce uno por e a la dos te por el vector uno, uno, más ce dos por e a la menos tres te por el vector uno, menos cuatro.

Estabilidad.

Un punto de equilibrio es estable si todas las soluciones cercanas permanecen cercanas.

El criterio es el siguiente. Para el sistema equis prima igual a A equis, el equilibrio es asintóticamente estable si todas las partes reales de los autovalores son negativas. Es inestable si algún autovalor tiene parte real positiva.

Vibraciones y Oscilaciones.

En sistemas masa-resorte con múltiples masas, la ecuación de movimiento es eme por equis doble prima más ka por equis igual a cero.

Los modos normales son los autovectores de eme inversa por ka. Cada modo representa una forma en que todo el sistema puede oscilar armónicamente.

Las frecuencias naturales son las raíces cuadradas de los autovalores. Cada modo tiene su propia frecuencia característica.

Análisis de Componentes Principales.

En estadística y machine learning, PCA reduce la dimensionalidad de datos.

El procedimiento es el siguiente. Primero centramos los datos restando la media. Luego calculamos la matriz de covarianza ce. Encontramos los autovalores y autovectores de ce. Los autovectores son las direcciones principales. Los autovalores indican la varianza en cada dirección.

El primer componente principal, el autovector con mayor autovalor, captura la mayor variación de los datos. Proyectar a los primeros ka componentes reduce dimensionalidad preservando la mayor parte de la información.

PageRank de Google.

El algoritmo PageRank modela la web como una cadena de Markov.

La importancia de cada página se representa por un vector erre que satisface una ecuación de autovalor. El vector de rankings es esencialmente el autovector dominante de una matriz de transición modificada.

Grafos y Redes.

Para un grafo, la matriz de adyacencia A tiene A i jota igual a uno si hay arista de i a jota.

El autovalor máximo está relacionado con la conectividad del grafo. La potencia A a la ka tiene en la entrada i jota el número de caminos de longitud ka de i a jota.

La matriz Laplaciana ele es la matriz de grados menos la matriz de adyacencia. El segundo autovalor más pequeño mide la conectividad algebraica. Los autovectores se usan para clustering espectral.

Mecánica Cuántica.

En mecánica cuántica, los observables físicos son operadores hermíticos.

Los estados propios son los autovectores.

Los valores que se pueden medir son los autovalores.

La ecuación de Schrödinger es hache por psi igual a e por psi, donde hache es el operador Hamiltoniano, psi es el estado, y e es la energía. Los niveles de energía de un sistema son los autovalores del Hamiltoniano.

Compresión de Imágenes.

Una imagen es una matriz de píxeles. La descomposición en valores singulares permite aproximar la imagen conservando solo los ka valores singulares más grandes.

Los valores singulares están relacionados con los autovalores de A transpuesta por A y de A por A transpuesta.

Dinámica de Poblaciones.

El modelo de Leslie describe poblaciones con estructura de edad.

El vector de población ene de te más uno es ele por ene de te, donde ele es la matriz de Leslie.

El autovalor dominante lambda uno determina si la población crece, decrece o se mantiene estable. Si lambda uno es mayor que uno, crece. Si es menor que uno, decrece. Si es igual a uno, se mantiene estable.

El autovector dominante da la distribución estable de edades.

Sistemas Económicos.

El modelo de Leontief de input-output describe una economía donde cada industria consume productos de otras industrias.

La ecuación es equis igual a A por equis más de, donde equis es la producción y de es la demanda final.

La solución es equis igual a la identidad menos A, todo invertido, multiplicado por de. Esto existe si la identidad menos A es invertible, lo cual está relacionado con los autovalores de A.

Con esto concluye el capítulo de Autovalores y Autovectores. En el siguiente capítulo estudiaremos Espacios con Producto Interno.
