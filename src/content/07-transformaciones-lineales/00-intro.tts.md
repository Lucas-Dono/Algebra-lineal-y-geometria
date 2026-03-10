Introducción a las Transformaciones Lineales.

Las transformaciones lineales son funciones entre espacios vectoriales que preservan la estructura algebraica fundamental.

Motivación.

Muchas operaciones en matemáticas y ciencias son transformaciones lineales.

Las rotaciones y reflexiones en geometría son transformaciones lineales. También los escalamientos y las proyecciones. La derivación y la integración de polinomios son transformaciones lineales entre espacios de polinomios. Y muchas operaciones en procesamiento de señales también lo son.

Definición.

Una transformación lineal, también llamada aplicación lineal, es una función te de un espacio vectorial ve a otro espacio vectorial doble ve, que satisface dos propiedades.

Primera, aditividad: la transformación de una suma es igual a la suma de las transformaciones. Es decir, te de u más ve es igual a te de u más te de ve.

Segunda, homogeneidad: la transformación de un escalar por un vector es igual al escalar por la transformación del vector. Es decir, te de ce por u es igual a ce por te de u.

Estas dos propiedades se pueden combinar en una sola: te de ce uno por u uno más ce dos por u dos es igual a ce uno por te de u uno más ce dos por te de u dos.

Más generalmente, la transformación de una combinación lineal es igual a la misma combinación lineal de las transformaciones.

Terminología.

El dominio es el espacio ve de donde salen los vectores. El codominio es el espacio doble ve donde llegan los resultados.

La imagen de te es el conjunto de todos los vectores que son transformación de algún vector. Es un subespacio del codominio.

El núcleo de te, también llamado kernel, es el conjunto de todos los vectores que son transformados en el vector cero. Es un subespacio del dominio.

Cuando el dominio y el codominio son el mismo espacio, la transformación se llama operador lineal o endomorfismo.

Ejemplos Fundamentales.

La transformación cero manda todos los vectores al vector cero. Es lineal, aunque no muy interesante.

La transformación identidad deja todos los vectores iguales. También es lineal.

La multiplicación por una matriz A es una transformación lineal de erre a la ene a erre a la eme, donde A es una matriz de eme por ene. Esta es la forma más común de transformación lineal entre espacios euclídeos.

La derivación de polinomios es lineal. Si tenemos un polinomio de grado ene, su derivada es un polinomio de grado ene menos uno. La derivada de una suma es la suma de las derivadas, y la derivada de una constante por un polinomio es la constante por la derivada.

La integración también es lineal, por las mismas razones.

Propiedades Inmediatas.

Para toda transformación lineal te, siempre se cumple que te del vector cero es el vector cero. También que te de menos ve es igual a menos te de ve. Y que te de u menos ve es igual a te de u menos te de ve.

La primera propiedad se demuestra así: te del vector cero es igual a te de cero por cualquier vector ve, que por homogeneidad es igual a cero por te de ve, que es el vector cero.

Verificar Linealidad.

Para verificar que una función te es lineal, hay que demostrar las dos propiedades: aditividad y homogeneidad.

Por ejemplo, consideremos te de erre dos a erre dos definida por te de equis, ye igual a dos equis más ye, equis menos tres ye.

Para la aditividad, calculamos te de la suma de dos vectores y verificamos que es igual a la suma de las transformaciones.

Para la homogeneidad, calculamos te de un escalar por un vector y verificamos que es igual al escalar por la transformación.

Si ambas propiedades se cumplen, la función es lineal.

Contraejemplos.

No toda función es lineal. La traslación te de equis igual a equis más uno no es lineal, porque te de cero es uno, no cero.

La función te de equis, ye igual a equis por ye no es lineal porque no es aditiva.

La función te de equis igual a equis al cuadrado no es lineal porque no es homogénea: te de dos equis es cuatro equis al cuadrado, que no es igual a dos por equis al cuadrado.

Lo Que Estudiaremos.

En este capítulo veremos la definición formal, cómo verificar linealidad, y muchos ejemplos.

También estudiaremos el núcleo y la imagen, que son los subespacios fundamentales asociados a una transformación.

Veremos cómo representar una transformación lineal mediante una matriz, lo cual es muy importante para cálculos concretos.

Y estudiaremos cómo cambia la matriz al cambiar de base.

Conexión con Matrices.

Toda transformación lineal de erre a la ene a erre a la eme puede representarse como multiplicación por una matriz de eme por ene.

Recíprocamente, toda matriz de eme por ene define una transformación lineal.

Esta correspondencia entre transformaciones y matrices es el tema central del capítulo.

En la siguiente sección formalizaremos la definición y veremos más ejemplos.
