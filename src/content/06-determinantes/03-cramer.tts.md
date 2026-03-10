Regla de Cramer.

La regla de Cramer proporciona fórmulas explícitas para las soluciones de sistemas lineales usando determinantes.

Enunciado.

Para el sistema A equis igual a be, donde A es una matriz ene por ene invertible, cada componente de la solución se calcula como un cociente de determinantes.

La componente equis i es igual al determinante de A i dividido por el determinante de A, donde A i es la matriz que resulta de reemplazar la columna i de A por el vector be.

Caso Dos por Dos.

Para un sistema de dos ecuaciones con dos incógnitas, donde la primera ecuación es a once por equis uno más a doce por equis dos igual a be uno, y la segunda es a veintiuno por equis uno más a veintidós por equis dos igual a be dos, las soluciones se calculan así.

Equis uno es el determinante de la matriz con be uno y be dos en la primera columna, y los coeficientes originales de la segunda ecuación en la segunda columna, todo dividido por el determinante de A.

Equis dos es el determinante de la matriz con los coeficientes originales de la primera ecuación en la primera columna, y be uno y be dos en la segunda columna, todo dividido por el determinante de A.

Por ejemplo, para resolver el sistema dos equis más tres ye igual a ocho, cuatro equis más cinco ye igual a catorce, primero calculamos el determinante de A, que es dos por cinco menos tres por cuatro, igual a diez menos doce, que es menos dos.

Equis es el determinante de la matriz con ocho, tres y catorce, cinco, dividido por menos dos. Esto es cuarenta menos cuarenta y dos, sobre menos dos, que es menos dos sobre menos dos, igual a uno.

Ye es el determinante de la matriz con dos, ocho y cuatro, catorce, dividido por menos dos. Esto es veintiocho menos treinta y dos, sobre menos dos, que es menos cuatro sobre menos dos, igual a dos.

La solución es equis igual a uno, ye igual a dos.

Caso Tres por Tres.

Para un sistema de tres ecuaciones con tres incógnitas, calculamos cuatro determinantes.

El determinante de A usando la regla de Sarrus o cofactores.

El determinante de A uno, donde reemplazamos la primera columna por el vector be.

El determinante de A dos, donde reemplazamos la segunda columna por el vector be.

Y el determinante de A tres, donde reemplazamos la tercera columna por el vector be.

Luego equis es A uno sobre A, ye es A dos sobre A, y zeta es A tres sobre A.

Cuándo Usar Cramer.

Las ventajas de la regla de Cramer son que da fórmulas explícitas para cada variable, es útil cuando solo necesitamos una variable, funciona bien para sistemas pequeños de dos por dos o tres por tres, y es útil para análisis teórico.

Las desventajas son que es ineficiente para sistemas grandes, requiere calcular ene más uno determinantes de orden ene, y tiene complejidad alta.

En comparación, la eliminación de Gauss tiene complejidad del orden de ene al cubo y es mejor para sistemas generales. La descomposición LU tiene la misma complejidad pero es mejor cuando tenemos múltiples sistemas con la misma matriz A.

Sistemas Homogéneos.

Para sistemas de la forma A equis igual al vector cero, la regla de Cramer no es muy útil.

Si el determinante de A es distinto de cero, la única solución es equis igual al vector cero.

Si el determinante de A es cero, hay infinitas soluciones, pero Cramer no nos dice cuáles son.

Aplicación: Expresiones Paramétricas.

La regla de Cramer es útil para obtener fórmulas generales. Por ejemplo, para el sistema a equis más b ye igual a e, ce equis más de ye igual a efe, la solución es equis igual a e por de menos b por efe, todo sobre a por de menos b por ce. Y ye igual a a por efe menos ce por e, todo sobre a por de menos b por ce.

Estas fórmulas son válidas siempre que a por de menos b por ce sea distinto de cero.

En la siguiente sección veremos las aplicaciones geométricas de los determinantes.
