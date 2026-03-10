Álgebra Lineal en Machine Learning.

El álgebra lineal es el lenguaje fundamental del machine learning moderno.

Representación de Datos.

Los datos se representan como matrices. Cada fila es una muestra, también llamada ejemplo u observación. Cada columna es una característica o feature. La matriz X tiene dimensión eme por ene, donde eme es el número de muestras y ene es el número de características.

Regresión Lineal.

El modelo de regresión lineal predice ye sombrero igual a X por doble ve más b, donde doble ve es el vector de pesos y b es el sesgo.

La solución de mínimos cuadrados minimiza la norma de X doble ve menos ye al cuadrado. La solución es doble ve sombrero igual a la inversa de X transpuesta X, multiplicada por X transpuesta ye. Esta es la ecuación normal.

La interpretación geométrica es que X por doble ve sombrero es la proyección de ye sobre el espacio columna de X.

Análisis de Componentes Principales.

PCA tiene como objetivo reducir la dimensionalidad preservando la máxima varianza.

El algoritmo tiene cinco pasos. Primero, centrar los datos restando la media. Segundo, calcular la matriz de covarianza C como uno sobre eme menos uno por X tilde transpuesta por X tilde. Tercero, calcular autovalores y autovectores de C. Cuarto, ordenar por autovalor decreciente. Quinto, proyectar a los primeros ka componentes.

Los componentes principales son los autovectores de C. Si pe tiene los primeros ka autovectores como columnas, los datos reducidos son X por pe.

Por ejemplo, si tenemos datos en cien dimensiones pero la mayor parte de la varianza está en tres direcciones, PCA identifica esas tres direcciones y reduce de cien a tres dimensiones.

Descomposición en Valores Singulares.

Toda matriz A de eme por ene se puede descomponer como A igual a U Sigma V transpuesta.

U es eme por eme ortogonal y contiene los vectores singulares izquierdos. Sigma es eme por ene diagonal y contiene los valores singulares. V es ene por ene ortogonal y contiene los vectores singulares derechos.

Los componentes principales son las columnas de V, los vectores singulares derechos de X tilde. Los valores singulares de X tilde son la raíz cuadrada de eme menos uno por lambda i, donde lambda i son los autovalores de C.

La aproximación de bajo rango A sub ka es la suma de sigma i por u i por v i transpuesta para i desde uno hasta ka. Esta es la mejor aproximación de rango ka a A en norma de Frobenius.

Redes Neuronales.

Una capa densa es una transformación lineal seguida de una no linealidad. El vector de salida hache es la función de activación sigma aplicada a doble ve por equis más b. Doble ve es la matriz de pesos, b es el vector de sesgo, y sigma es la función de activación como ReLU o sigmoid.

En el forward pass de una red con L capas, hache cero es la entrada equis. Para cada capa ele, hache ele es sigma ele de doble ve ele por hache ele menos uno más b ele. La salida ye sombrero es hache L.

Todo el cálculo son multiplicaciones matriciales más no linealidades.

Para procesamiento en lotes con eme muestras, hache es sigma de X por doble ve transpuesta más uno por b transpuesta. Las GPUs están optimizadas para estas operaciones matriciales.

Embeddings.

La idea es representar objetos discretos como palabras, usuarios o productos como vectores.

En Word2Vec, cada palabra tiene un vector de embedding. La similaridad entre palabras es el producto punto de sus embeddings.

Las operaciones semánticas son posibles. Por ejemplo, el vector de rey menos el vector de hombre más el vector de mujer es aproximadamente igual al vector de reina. Las analogías se capturan como operaciones vectoriales.

Sistemas de Recomendación.

La factorización de matrices aproxima la matriz de calificaciones erre, que tiene usuarios en las filas y productos en las columnas, como erre aproximadamente igual a U por V transpuesta.

U es la matriz de embeddings de usuarios y V es la matriz de embeddings de productos.

La predicción de la calificación del usuario i al producto jota es erre sombrero i jota igual al producto punto de u i con v jota.

Resumen.

En regresión usamos mínimos cuadrados y la ecuación normal. En PCA usamos autovalores y proyección. En SVD usamos descomposición y aproximación. En redes neuronales usamos multiplicación matricial. En embeddings usamos producto punto y factorización.

En la siguiente sección veremos aplicaciones en teoría de grafos.
