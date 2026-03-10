Introducción a los Sistemas de Ecuaciones Lineales.

Los sistemas de ecuaciones lineales aparecen en casi todas las aplicaciones del álgebra lineal. Entender cómo resolverlos de manera sistemática es fundamental para el resto del curso.

Ecuación Lineal.

Una ecuación lineal en las variables equis uno, equis dos, hasta equis ene, es una ecuación de la forma: a uno por equis uno, más a dos por equis dos, más etcétera, más a ene por equis ene, igual a be.

Donde a uno, a dos, hasta a ene, y be, son constantes, ya sean números reales o complejos.

Veamos algunos ejemplos de ecuaciones lineales: tres equis más dos ye menos zeta igual a cinco. O bien equis uno menos cuatro equis dos más equis tres más equis cuatro igual a cero. También raíz de dos por equis más pi por ye igual a uno.

Pero no son ecuaciones lineales las siguientes: equis al cuadrado más ye igual a uno, porque tiene un término cuadrático. Tampoco equis por ye igual a tres, porque tiene un producto de variables. Ni seno de equis más ye igual a cero, porque tiene una función no lineal. Ni uno sobre equis más ye igual a dos, porque tiene la variable en el denominador.

Sistema de Ecuaciones Lineales.

Un sistema de ecuaciones lineales es un conjunto de eme ecuaciones lineales en ene variables. Tenemos eme ecuaciones, cada una con ene incógnitas, y queremos encontrar valores para esas incógnitas que satisfagan todas las ecuaciones al mismo tiempo.

Notación Matricial.

El sistema se puede escribir de forma compacta como A por equis igual a be.

Donde A es la matriz de coeficientes, de tamaño eme por ene. Equis es el vector columna de incógnitas, de tamaño ene por uno. Y be es el vector columna de términos independientes, de tamaño eme por uno.

Esta notación matricial es muy poderosa porque nos permite estudiar y resolver sistemas usando herramientas del álgebra matricial.

Solución de un Sistema.

Una solución del sistema es una ene-tupla de valores, ese uno, ese dos, hasta ese ene, que satisface todas las ecuaciones simultáneamente.

Clasificación de Sistemas.

Un sistema de ecuaciones lineales puede clasificarse en tres tipos.

Compatible determinado: tiene exactamente una solución. Por ejemplo, el sistema equis más ye igual a tres, y equis menos ye igual a uno, tiene la solución única equis igual a dos, ye igual a uno.

Compatible indeterminado: tiene infinitas soluciones. Por ejemplo, equis más ye igual a tres, y dos equis más dos ye igual a seis. La segunda ecuación es simplemente el doble de la primera, así que en realidad solo tenemos una ecuación con dos incógnitas. Las soluciones son de la forma te, tres menos te, para cualquier número real te.

Incompatible: no tiene solución. Por ejemplo, equis más ye igual a tres, y equis más ye igual a cinco. No existen valores de equis e ye que satisfagan ambas ecuaciones, porque la misma expresión no puede ser igual a tres y a cinco simultáneamente.

Sistemas Homogéneos.

Un sistema es homogéneo si todos los términos independientes son cero. Es decir, el sistema tiene la forma A por equis igual al vector cero.

La propiedad fundamental de los sistemas homogéneos es que siempre tienen al menos una solución: la solución trivial, donde todas las variables son cero.

Si además tiene otras soluciones distintas de la trivial, el sistema es compatible indeterminado.

Interpretación Geométrica.

Para un sistema de dos por dos, cada ecuación lineal representa una recta en el plano.

Si el sistema es compatible determinado, las rectas se cortan en un único punto. Si es compatible indeterminado, las rectas coinciden, son la misma recta. Si es incompatible, las rectas son paralelas y no se cortan.

Para un sistema de tres por tres, cada ecuación lineal representa un plano en el espacio tridimensional.

Si es compatible determinado, los tres planos se cortan en un único punto. Si es compatible indeterminado, los planos se cortan en una recta, o coinciden todos. Si es incompatible, no hay punto común a los tres planos.

Matriz Aumentada.

La matriz aumentada combina la matriz de coeficientes con el vector de términos independientes en una sola matriz. Se escribe poniendo una línea vertical separando los coeficientes de los términos independientes.

Esta matriz contiene toda la información del sistema y es la base del método de eliminación gaussiana.

Operaciones Elementales.

Las siguientes operaciones sobre las ecuaciones no cambian el conjunto de soluciones:

Primera, intercambio: intercambiar dos ecuaciones de lugar.

Segunda, escalamiento: multiplicar una ecuación por una constante no nula.

Tercera, combinación: sumar a una ecuación un múltiplo de otra.

Estas operaciones corresponden a operaciones sobre las filas de la matriz aumentada.

Sistemas Equivalentes.

Dos sistemas son equivalentes si tienen exactamente el mismo conjunto de soluciones. Las operaciones elementales transforman un sistema en otro equivalente.

Objetivo.

El objetivo de los métodos de resolución es transformar el sistema original en uno equivalente más simple, cuya solución sea evidente.

La forma escalonada es un tipo de sistema muy simple de resolver. Por ejemplo: equis más dos ye más zeta igual a cinco, ye menos zeta igual a dos, zeta igual a uno.

Este sistema se resuelve fácilmente por sustitución hacia atrás. Primero vemos que zeta es uno. Luego reemplazamos en la segunda ecuación: ye menos uno igual a dos, entonces ye es tres. Finalmente reemplazamos en la primera: equis más seis más uno igual a cinco, entonces equis es menos dos.

En la siguiente sección estudiaremos el método de eliminación gaussiana para reducir sistemas a forma escalonada.
