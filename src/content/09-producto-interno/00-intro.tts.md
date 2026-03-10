Introducción a Espacios con Producto Interno.

Los espacios con producto interno generalizan las nociones geométricas de longitud, ángulo y perpendicularidad a espacios vectoriales abstractos.

Motivación.

En el plano y en el espacio tridimensional tenemos nociones geométricas naturales.

La longitud de un vector se calcula como la raíz cuadrada de la suma de los cuadrados de sus componentes.

El ángulo entre dos vectores se obtiene usando el producto punto. El coseno del ángulo es igual al producto punto de los vectores dividido por el producto de sus longitudes.

Dos vectores son perpendiculares cuando su producto punto es cero.

Queremos extender estas ideas a cualquier espacio vectorial.

El Producto Punto en Erre Ene.

En erre ene, el producto punto, también llamado producto escalar, de dos vectores u y ve es la suma de los productos de sus componentes correspondientes. Multiplicamos la primera componente de u por la primera de ve, más la segunda de u por la segunda de ve, y así sucesivamente.

En notación matricial, el producto punto es u transpuesta por ve.

Propiedades del Producto Punto.

El producto punto tiene cuatro propiedades fundamentales.

Primera, simetría: el producto punto de u y ve es igual al de ve y u. El orden no importa.

Segunda, linealidad: el producto punto de una suma con un tercer vector se distribuye. El producto de u más ve con doble ve es igual al producto de u con doble ve más el producto de ve con doble ve.

Tercera, homogeneidad: si multiplicamos un vector por un escalar ce, el producto punto también queda multiplicado por ce.

Cuarta, positividad: el producto punto de un vector consigo mismo siempre es mayor o igual a cero, y solo es cero si el vector es el vector nulo.

Estas cuatro propiedades definen lo que llamamos un producto interno.

Norma y Distancia.

La norma, o longitud, de un vector se define como la raíz cuadrada del producto interno del vector consigo mismo.

La distancia entre dos vectores u y ve es la norma de su diferencia.

Por Qué Generalizar.

No todos los problemas usan la geometría euclidiana estándar.

En estadística, las variables pueden tener diferentes pesos o importancias.

En análisis funcional, trabajamos con funciones como si fueran vectores.

En física, la métrica del espacio-tiempo de la relatividad no es euclidiana.

Ejemplos de Productos Internos.

Hay muchos productos internos diferentes, no solo el producto punto usual.

El producto con pesos en erre ene usa una matriz simétrica definida positiva doble ve. El producto de u y ve es u transpuesta por doble ve por ve. Esto permite dar diferentes importancias a diferentes componentes.

El producto interno de funciones continuas en un intervalo de a a be se define como la integral del producto de las dos funciones. La longitud de una función es la raíz cuadrada de la integral del cuadrado de la función.

El producto interno de matrices se define usando la traza. Para dos matrices A y B del mismo tamaño, su producto interno es la traza de A transpuesta por B, que es igual a la suma de los productos de todas las entradas correspondientes.

Lo Que Estudiaremos.

En este capítulo veremos varios temas.

Primero, la definición formal con los axiomas del producto interno.

Segundo, ortogonalidad, que es el estudio de vectores perpendiculares.

Tercero, el proceso de Gram-Schmidt para construir bases ortonormales.

Y cuarto, proyecciones ortogonales para encontrar la mejor aproximación de un vector en un subespacio.

Aplicaciones.

Los espacios con producto interno tienen muchas aplicaciones.

Mínimos cuadrados permite ajustar curvas a datos experimentales encontrando la mejor aproximación.

Las series de Fourier descomponen funciones en sus frecuencias componentes.

La compresión de datos usa reducción de dimensionalidad basada en proyecciones.

Y el procesamiento de señales usa estos conceptos para analizar audio e imágenes.

Conceptos Clave.

Dos vectores son ortogonales cuando su producto interno es cero.

Un vector es ortonormal si además tiene norma uno.

Una base ortonormal es una base formada por vectores ortonormales, todos perpendiculares entre sí y todos de longitud uno.

El complemento ortogonal de un subespacio es el conjunto de todos los vectores que son perpendiculares a todo el subespacio.

La proyección ortogonal de un vector sobre un subespacio es el vector del subespacio más cercano al original, la mejor aproximación.

En la siguiente sección formalizaremos la definición de producto interno.
