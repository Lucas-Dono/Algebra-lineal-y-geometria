Subespacios Vectoriales.

Un subespacio es un subconjunto de un espacio vectorial que hereda la estructura de espacio vectorial.

Definición.

Sea ve un espacio vectorial. Un subconjunto no vacío doble ve de ve es un subespacio vectorial de ve si doble ve es un espacio vectorial con las mismas operaciones de ve.

Criterio de Subespacio.

Hay un teorema muy útil que simplifica la verificación. Un subconjunto no vacío doble ve de ve es subespacio si y solo si cumple dos condiciones.

Primera, clausura bajo la suma: si u y ve están en doble ve, entonces u más ve también está en doble ve.

Segunda, clausura bajo el producto por escalar: si ve está en doble ve y ce es un escalar, entonces ce por ve también está en doble ve.

Hay un criterio equivalente más compacto. Doble ve es subespacio si y solo si para todos u y ve en doble ve, y para todos escalares a y b, el vector a por u más b por ve está en doble ve. Es decir, doble ve es cerrado bajo combinaciones lineales.

¿Por qué funciona este criterio? Porque los demás axiomas se heredan de ve. La conmutatividad y asociatividad valen en ve, entonces también valen en doble ve. El vector cero está en doble ve porque cero por cualquier vector de doble ve es el vector cero. Y el inverso de cualquier vector ve de doble ve también está en doble ve, porque menos uno por ve es el opuesto.

Ejemplos en Erre Tres.

El primer ejemplo de subespacio es simplemente el origen, el conjunto que solo contiene el vector cero, cero, cero. Es el subespacio más pequeño posible.

El segundo ejemplo es una recta que pasa por el origen. El conjunto de todos los múltiplos de un vector no nulo ve forma un subespacio. Por ejemplo, el conjunto de vectores de la forma te, dos te, tres te, donde te es cualquier real, es la recta en la dirección del vector uno, dos, tres.

El tercer ejemplo es un plano que pasa por el origen. Por ejemplo, el conjunto de puntos equis, ye, zeta tales que equis más ye más zeta es cero. Para verificar que es subespacio, tomamos dos vectores u y ve del conjunto. Entonces u uno más u dos más u tres es cero, y ve uno más ve dos más ve tres es cero. La suma u más ve tiene componentes u uno más ve uno, u dos más ve dos, u tres más ve tres. Y su suma total es u uno más u dos más u tres más ve uno más ve dos más ve tres, que es cero más cero, igual a cero. Así que u más ve también está en el conjunto.

El cuarto ejemplo es todo erre tres. Todo espacio vectorial es subespacio de sí mismo.

Ejemplos de Conjuntos que No Son Subespacios.

Una recta que no pasa por el origen no es subespacio. Por ejemplo, el conjunto donde equis más ye es igual a uno. El vector cero no está en este conjunto, porque cero más cero no es uno.

La unión de los dos ejes coordenados tampoco es subespacio. El vector uno, cero está en el eje equis, y el vector cero, uno está en el eje ye. Pero su suma uno, uno no está en ninguno de los dos ejes.

El primer cuadrante no es subespacio porque no es cerrado bajo el producto por escalar. El vector uno, uno está en el primer cuadrante, pero menos uno por uno, uno da menos uno, menos uno, que está en el tercer cuadrante.

Subespacios Importantes.

El espacio nulo de una matriz A de eme por ene es el conjunto de todos los vectores equis en erre ene tales que A por equis es el vector cero. Se denota nulo de A. Es un subespacio de erre ene.

Para verificarlo, supongamos que A por u es cero y A por ve es cero. Entonces A por a u más b ve es igual a a por A u más b por A ve, que es a por cero más b por cero, que es el vector cero. Así que a u más b ve también está en el espacio nulo.

El espacio columna de A es el conjunto de todos los vectores de la forma A por equis, donde equis varía en erre ene. Es el conjunto de todas las combinaciones lineales de las columnas de A. Es un subespacio de erre eme.

El espacio fila de A es el espacio generado por las filas de A. Es un subespacio de erre ene.

Intersección de Subespacios.

Si doble ve uno y doble ve dos son subespacios de ve, entonces su intersección también es subespacio de ve.

La demostración es sencilla. El vector cero está en doble ve uno y en doble ve dos, así que está en la intersección. Si u y ve están en la intersección, entonces a u más b ve está en doble ve uno porque doble ve uno es subespacio, y también está en doble ve dos porque doble ve dos es subespacio. Por lo tanto a u más b ve está en la intersección.

Es importante notar que la unión de dos subespacios generalmente no es subespacio.

Suma de Subespacios.

La suma de dos subespacios doble ve uno y doble ve dos es el conjunto de todos los vectores que se pueden escribir como doble ve uno más doble ve dos, donde doble ve uno está en doble ve uno y doble ve dos está en doble ve dos.

Este conjunto también es un subespacio de ve.

La suma es directa si la intersección de doble ve uno y doble ve dos es solo el vector cero. En este caso se escribe doble ve uno más directa doble ve dos. Y cada vector de la suma se escribe de forma única como doble ve uno más doble ve dos.

Resumen del Test de Subespacio.

Para verificar si un conjunto doble ve es subespacio de ve, hay que hacer tres cosas.

Primero, verificar que doble ve no es vacío. Usualmente esto se hace verificando que el vector cero está en doble ve.

Segundo, verificar la clausura bajo la suma.

Tercero, verificar la clausura bajo el producto por escalar.

Si alguna de estas condiciones falla, hay que mostrar un contraejemplo específico.

En la siguiente sección estudiaremos bases y dimensión de espacios vectoriales.
