Núcleo e Imagen de una Transformación Lineal.

El núcleo y la imagen son dos subespacios fundamentales asociados a toda transformación lineal.

Núcleo.

El núcleo de una transformación te de ve a doble ve, también llamado kernel, es el conjunto de todos los vectores de ve que te envía al vector cero.

Es el conjunto de vectores que la transformación colapsa al origen.

El núcleo tiene tres propiedades importantes.

Primero, es un subespacio de ve.

Segundo, el vector cero siempre está en el núcleo.

Tercero, el núcleo contiene solo el vector cero si y solo si te es inyectiva. Es decir, una transformación es inyectiva precisamente cuando ningún vector excepto el cero es enviado al cero.

Para demostrar que es subespacio, verificamos que el vector cero está en el núcleo, que la suma de dos vectores del núcleo está en el núcleo, y que un escalar por un vector del núcleo está en el núcleo.

La nulidad de te es la dimensión del núcleo.

Imagen.

La imagen de te, también llamada rango, es el conjunto de todos los valores que toma te. Es el conjunto de todos los vectores de doble ve que son transformación de algún vector de ve.

La imagen también tiene tres propiedades importantes.

Primero, es un subespacio de doble ve.

Segundo, el vector cero siempre está en la imagen.

Tercero, la imagen es igual a todo doble ve si y solo si te es sobreyectiva.

El rango de te es la dimensión de la imagen.

Teorema del Rango y Nulidad.

Este es uno de los teoremas más importantes del capítulo.

Si te va de ve a doble ve y ve tiene dimensión finita, entonces la dimensión de ve es igual a la nulidad de te más el rango de te.

Dicho de otra forma, la dimensión del dominio es igual a la dimensión del núcleo más la dimensión de la imagen.

La interpretación es que lo que te pierde, que es el núcleo, más lo que te produce, que es la imagen, es igual a lo que te recibe, que es el dominio.

Si te es inyectiva, la nulidad es cero, y entonces el rango es igual a la dimensión de ve.

Ejemplo.

Sea te de erre tres a erre dos dada por te de equis, ye, zeta igual a equis más ye, ye menos zeta.

Para encontrar el núcleo, resolvemos te de equis, ye, zeta igual a cero, cero. Esto da el sistema equis más ye igual a cero, ye menos zeta igual a cero.

De la primera ecuación, equis es igual a menos ye. De la segunda, zeta es igual a ye.

El núcleo es el conjunto de vectores de la forma menos ye, ye, ye, que es el espacio generado por el vector menos uno, uno, uno. La nulidad es uno.

Para la imagen, observamos que los vectores equis más ye, ye menos zeta pueden generar cualquier vector de erre dos. Por ejemplo, uno, cero es te de uno, cero, cero, y cero, uno es te de cero, uno, uno.

La imagen es todo erre dos, y el rango es dos.

Verificación: la dimensión de erre tres es tres, que es igual a uno más dos.

Conexión con Matrices.

Si te de erre ene a erre eme tiene matriz A, entonces el núcleo de te es el espacio nulo de A, y la imagen de te es el espacio columna de A. El rango de te es igual al rango de A.

Inyectividad y Sobreyectividad.

Te es inyectiva si y solo si el núcleo contiene solo el vector cero, si y solo si la nulidad es cero, si y solo si el rango es igual a la dimensión de ve.

Te es sobreyectiva si y solo si la imagen es igual a doble ve, si y solo si el rango es igual a la dimensión de doble ve.

Te es biyectiva, es decir un isomorfismo, si y solo si es inyectiva y sobreyectiva, si y solo si el núcleo contiene solo el cero y la imagen es todo doble ve.

Ejemplos Adicionales.

Para la proyección pe de erre tres a erre tres dada por pe de equis, ye, zeta igual a equis, ye, cero, el núcleo es el eje zeta, el conjunto de vectores cero, cero, zeta. La imagen es el plano equis ye, el conjunto de vectores equis, ye, cero. La nulidad es uno y el rango es dos.

Para la derivada de de polinomios de grado tres a polinomios de grado dos, el núcleo son las constantes, polinomios cuya derivada es cero. La imagen es todos los polinomios de grado dos, porque todo polinomio es derivada de otro. La dimensión del dominio es cuatro, que es uno más tres.

Para una rotación, el núcleo contiene solo el origen, porque ningún vector excepto el cero queda fijo. La imagen es todo erre dos. Es un isomorfismo.

Preimagen.

La preimagen de un vector doble ve es el conjunto de todos los vectores ve tales que te de ve es igual a doble ve.

Un teorema importante dice que si ve cero es un vector particular con te de ve cero igual a doble ve, entonces la preimagen de doble ve es ve cero más el núcleo de te. Es decir, la preimagen es una traslación del núcleo.

En la siguiente sección aprenderemos a construir la matriz asociada a una transformación.
