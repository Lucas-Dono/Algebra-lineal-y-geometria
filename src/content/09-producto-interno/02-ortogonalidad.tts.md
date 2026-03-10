Ortogonalidad.

La ortogonalidad generaliza la noción de perpendicularidad a cualquier espacio con producto interno.

Definición.

Dos vectores u y ve son ortogonales si su producto interno es cero. Se denota u perpendicular a ve.

Propiedades Básicas.

El vector cero es ortogonal a cualquier vector.

Si u es ortogonal a ve, entonces ve es ortogonal a u.

Si u es ortogonal a ve, entonces cualquier múltiplo de u también es ortogonal a ve.

Teorema de Pitágoras.

Si u y ve son ortogonales, entonces la norma de u más ve al cuadrado es igual a la norma de u al cuadrado más la norma de ve al cuadrado.

La demostración es directa. La norma de u más ve al cuadrado es el producto de u más ve consigo mismo, que se expande como la norma de u al cuadrado más dos veces el producto de u con ve más la norma de ve al cuadrado. Como u y ve son ortogonales, el término del medio es cero.

Conjunto Ortogonal.

Un conjunto de vectores es ortogonal si cada par de vectores distintos tiene producto interno cero.

Un teorema importante dice que un conjunto ortogonal de vectores no nulos es linealmente independiente.

La demostración es elegante. Supongamos que una combinación lineal de los vectores da el vector cero. Si tomamos el producto interno de ambos lados con cualquier vector del conjunto, todos los términos se anulan excepto uno. El coeficiente correspondiente multiplicado por la norma al cuadrado del vector es cero. Como el vector no es nulo, el coeficiente debe ser cero.

Conjunto Ortonormal.

Un conjunto es ortonormal si es ortogonal y todos los vectores son unitarios. El producto interno de dos vectores del conjunto es uno si son el mismo vector, y cero si son distintos.

Una base ortonormal de un espacio ve es una base que es un conjunto ortonormal.

Coordenadas en Base Ortonormal.

Si tenemos una base ortonormal, las coordenadas de cualquier vector se obtienen simplemente tomando productos internos con los vectores de la base.

Si la base es u uno, u dos, hasta u ene, entonces ve es igual a la suma del producto de ve con u i, multiplicado por u i.

La ventaja es enorme: no hay que resolver sistemas de ecuaciones para encontrar coordenadas.

Complemento Ortogonal.

El complemento ortogonal de un subespacio doble ve es el conjunto de todos los vectores que son ortogonales a todo vector de doble ve.

El complemento ortogonal es un subespacio. La intersección de doble ve con su complemento es solo el vector cero. El espacio total es la suma directa de doble ve con su complemento. El complemento del complemento es el subespacio original. Y la dimensión del subespacio más la dimensión del complemento es igual a la dimensión del espacio total.

Por ejemplo, en erre tres, si doble ve es un plano por el origen, su complemento ortogonal es la recta normal al plano que pasa por el origen. El plano tiene dimensión dos, la recta tiene dimensión uno, y juntos suman tres.

Conexión con Subespacios Fundamentales.

Para una matriz A, el complemento ortogonal del espacio fila es el espacio nulo. Y el complemento ortogonal del espacio columna es el espacio nulo de la transpuesta.

Matrices Ortogonales.

Una matriz cuadrada cu es ortogonal si cu transpuesta por cu es igual a cu por cu transpuesta es igual a la identidad. Equivalentemente, la inversa de cu es su transpuesta.

Cu es ortogonal si y solo si sus columnas forman una base ortonormal.

Las matrices ortogonales preservan normas: la norma de cu por equis es igual a la norma de equis. Preservan productos internos: el producto de cu equis con cu ye es igual al producto de equis con ye. Y su determinante es uno o menos uno.

Ejemplos incluyen las matrices de rotación y las matrices de reflexión.

Descomposición Ortogonal.

Todo vector ve se descompone de forma única como doble ve más doble ve perpendicular, donde doble ve está en el subespacio y doble ve perpendicular está en el complemento ortogonal.

En la siguiente sección aprenderemos el proceso de Gram-Schmidt para construir bases ortonormales.
