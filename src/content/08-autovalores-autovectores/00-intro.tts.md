Introducción a Autovalores y Autovectores.

Los autovalores y autovectores revelan la estructura intrínseca de las transformaciones lineales.

Motivación.

Consideremos una transformación te de erre dos a erre dos dada por te de equis, ye igual a dos equis más ye, equis más dos ye.

Para la mayoría de vectores, te de ve apunta en una dirección diferente a ve. La transformación rota y estira el vector.

Pero para el vector uno, uno, algo interesante ocurre. Te de uno, uno es igual a tres, tres, que es tres veces el vector uno, uno. El vector uno, uno solo se escala por tres, no cambia de dirección.

Y para el vector uno, menos uno, te de uno, menos uno es igual a uno, menos uno. Este vector queda exactamente igual, se escala por uno.

Estos son los autovectores de la transformación, y tres y uno son los autovalores correspondientes.

Definición.

Sea A una matriz ene por ene, o más generalmente, te un operador lineal de un espacio vectorial a sí mismo.

Un autovector de A es un vector no nulo ve tal que A por ve es igual a lambda por ve, para algún escalar lambda.

El escalar lambda se llama autovalor asociado al autovector ve.

También se usan los términos valor propio y vector propio. En inglés se dice eigenvalue y eigenvector, del alemán eigen que significa propio.

Interpretación Geométrica.

Un autovector es una dirección natural o privilegiada de la transformación. En esa dirección, la transformación actúa simplemente como un escalamiento, no como una rotación.

El autovalor es el factor de escala. Si lambda es mayor que uno, hay un estiramiento en esa dirección. Si lambda está entre cero y uno, hay una contracción. Si lambda es negativo, hay una inversión de sentido además del escalamiento. Si lambda es cero, los vectores en esa dirección colapsan al origen.

Ejemplos Intuitivos.

Consideremos la reflexión respecto al eje equis, representada por una matriz con uno, cero en la primera fila y cero, menos uno en la segunda.

Los vectores sobre el eje equis quedan iguales, así que son autovectores con autovalor uno. Los vectores sobre el eje ye se invierten, así que son autovectores con autovalor menos uno.

Ahora consideremos la rotación por noventa grados. Ningún vector real queda en su dirección original después de rotar noventa grados. Por lo tanto, esta transformación no tiene autovalores reales.

Para la proyección sobre el eje equis, los vectores sobre el eje equis quedan iguales, con autovalor uno. Los vectores sobre el eje ye van al origen, con autovalor cero.

Para una transformación de cizallamiento, el único autovalor es uno, y los autovectores son los vectores sobre el eje equis.

Propiedades Básicas.

Si ve es un autovector con autovalor lambda, entonces cualquier múltiplo no nulo de ve también es autovector con el mismo autovalor.

El vector cero nunca es autovector, por definición. Si permitiéramos el cero, cualquier lambda serviría.

El autovalor sí puede ser cero. Eso simplemente significa que hay vectores no nulos que son enviados al origen.

Una matriz ene por ene tiene a lo sumo ene autovalores distintos.

Los autovalores de A transpuesta son los mismos que los de A.

Por Qué Son Importantes.

Los autovalores y autovectores tienen muchas aplicaciones.

Para diagonalización: si encontramos ene autovectores linealmente independientes, podemos escribir A como pe por de por pe inversa, donde de es una matriz diagonal con los autovalores. Esto simplifica muchísimo los cálculos.

Para potencias de matrices: A a la ka es igual a pe por de a la ka por pe inversa. Y de a la ka es trivial de calcular, simplemente elevamos cada entrada diagonal a la ka.

Para ecuaciones diferenciales: las soluciones de equis prima de te igual a A por equis de te involucran exponenciales e a la lambda te, donde lambda son los autovalores.

Para estabilidad de sistemas: un sistema dinámico es estable si todos los autovalores tienen parte real negativa.

Lo Que Estudiaremos.

Veremos cómo calcular autovalores y autovectores, usando el polinomio característico.

Estudiaremos la diagonalización: cuándo es posible diagonalizar una matriz y cómo hacerlo.

Aprenderemos a calcular potencias de matrices de forma eficiente usando diagonalización.

Y veremos aplicaciones como cadenas de Markov, sistemas dinámicos y vibraciones.

Conexión con Temas Anteriores.

Los autovalores se encuentran resolviendo la ecuación determinante de A menos lambda por I igual a cero.

Los autovectores se encuentran resolviendo el sistema homogéneo A menos lambda por I, por ve, igual al vector cero.

La existencia de autovalores está relacionada con que A menos lambda por I tenga rango menor que ene.

En la siguiente sección aprenderemos a calcular autovalores y autovectores.
