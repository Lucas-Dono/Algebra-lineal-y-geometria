Álgebra Lineal en Procesamiento de Imágenes.

Las imágenes digitales son matrices, y su procesamiento involucra operaciones del álgebra lineal.

Imágenes como Matrices.

Una imagen en escala de grises de eme por ene píxeles es una matriz donde cada entrada pe i jota está entre cero y doscientos cincuenta y cinco. Cero es negro y doscientos cincuenta y cinco es blanco.

Una imagen a color tiene tres matrices, una para cada canal: rojo, verde y azul.

Compresión con SVD.

La idea es aproximar la imagen con una matriz de bajo rango.

La imagen I se descompone como U Sigma V transpuesta. La aproximación de rango ka es U sub ka por Sigma sub ka por V sub ka transpuesta, que es la suma de sigma i por u i por v i transpuesta para i desde uno hasta ka.

La imagen original tiene eme por ene valores. La aproximación de rango ka tiene ka por eme más ene más uno valores.

El ratio de compresión es eme ene dividido por ka por eme más ene más uno.

Por ejemplo, para una imagen de mil por mil píxeles, el original tiene un millón de valores. Con rango cincuenta tenemos cincuenta por dos mil uno, que es cien mil cincuenta valores. La compresión es de diez a uno.

A menor rango ka, menor calidad pero mayor compresión. A mayor rango ka, mayor calidad pero menor compresión.

La energía capturada es la suma de sigma i al cuadrado para i desde uno hasta ka, dividida por la suma total de sigma i al cuadrado.

Transformaciones Geométricas.

La rotación multiplica el vector equis, ye por la matriz coseno zeta, menos seno zeta, seno zeta, coseno zeta. El resultado es el punto rotado equis prima, ye prima.

El escalamiento multiplica por la matriz s equis, cero, cero, s ye, donde s equis y s ye son los factores de escala.

El cizallamiento multiplica por la matriz uno, ka, cero, uno, donde ka es el factor de cizallamiento.

Para incluir traslaciones usamos coordenadas homogéneas. El vector equis, ye, uno se multiplica por una matriz tres por tres que combina rotación, escalamiento, cizallamiento y traslación. Esto permite combinar todas las transformaciones afines en una sola multiplicación matricial.

Filtros como Convolución.

Un filtro se define por un kernel, que es una matriz pequeña, típicamente tres por tres.

La operación de convolución calcula para cada píxel i, jota un promedio ponderado de los píxeles vecinos, usando los pesos del kernel.

Para suavizado o blur, el kernel tiene todos unos divididos por nueve. Promedia los píxeles vecinos, lo que difumina la imagen.

Para detección de bordes con Sobel horizontal, el kernel tiene menos uno, cero, uno en la primera fila, menos dos, cero, dos en la segunda, y menos uno, cero, uno en la tercera. Detecta cambios horizontales de intensidad.

Para nitidez o sharpen, el kernel tiene cero, menos uno, cero en la primera fila, menos uno, cinco, menos uno en la segunda, y cero, menos uno, cero en la tercera. Resalta los detalles.

La convolución se puede expresar como multiplicación por una matriz de Toeplitz o circulante. Esto permite usar la FFT, la transformada rápida de Fourier, para convolución rápida.

Eigenfaces.

El reconocimiento facial con PCA tiene cuatro pasos. Primero, recopilar muchas imágenes de rostros. Segundo, convertir cada imagen en un vector concatenando los píxeles. Tercero, aplicar PCA al conjunto de imágenes. Cuarto, los componentes principales son los eigenfaces.

Cada rostro se puede aproximar como combinación de eigenfaces. Un rostro es aproximadamente el rostro promedio mu más la suma de c i por e i para i desde uno hasta ka, donde c i son coeficientes y e i son los eigenfaces.

Para reconocer un rostro nuevo, primero lo proyectamos al espacio de eigenfaces. Luego comparamos con rostros conocidos usando distancia euclidiana.

Procesamiento de Video.

Un video es una secuencia de imágenes o matrices.

Apilando los frames como columnas de una matriz grande eme, podemos descomponer eme como ele más S, donde ele es de bajo rango, representando el fondo estático, y S es dispersa, representando los objetos en movimiento.

Esto se resuelve con descomposición de matriz de bajo rango y dispersa, conocida como RPCA o Robust PCA.

Resumen de Técnicas.

Para compresión usamos SVD y aproximación de bajo rango. Para transformaciones usamos matrices de transformación. Para filtros usamos convolución y multiplicación matricial. Para reconocimiento usamos PCA y eigenfaces. Para separación de fondo y frente usamos RPCA.

Con esto concluye el capítulo de Aplicaciones y el libro de Álgebra Lineal. Las herramientas aprendidas tienen aplicaciones en prácticamente todos los campos de la ciencia y la tecnología.
