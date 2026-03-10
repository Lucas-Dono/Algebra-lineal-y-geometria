Cálculo de Autovalores y Autovectores.

El cálculo de autovalores se reduce a encontrar raíces de un polinomio, y los autovectores se obtienen resolviendo sistemas lineales.

Ecuación Característica.

La ecuación A por ve igual a lambda por ve se puede reescribir como A menos lambda por la identidad, todo multiplicado por ve, igual al vector cero.

Para que exista un vector ve distinto del cero que satisfaga esta ecuación, el sistema debe tener soluciones no triviales. Esto ocurre cuando el determinante de A menos lambda por la identidad es cero.

Esta es la ecuación característica de A.

Polinomio Característico.

El polinomio característico de A es el determinante de A menos lambda por la identidad.

Es un polinomio de grado ene en la variable lambda.

Los autovalores son las raíces de este polinomio.

Procedimiento.

El primer paso es formar la matriz A menos lambda I. Esto significa restar lambda de cada entrada en la diagonal de A.

El segundo paso es calcular el determinante de esta matriz. El resultado es el polinomio característico.

El tercer paso es resolver la ecuación polinomio igual a cero. Las raíces son los autovalores.

El cuarto paso es, para cada autovalor, resolver el sistema A menos lambda I por ve igual al vector cero. Las soluciones no nulas son los autovectores.

Ejemplo Dos por Dos.

Encontremos los autovalores y autovectores de la matriz A con cuatro, dos en la primera fila y uno, tres en la segunda.

Primero, A menos lambda I tiene cuatro menos lambda y dos en la primera fila, y uno y tres menos lambda en la segunda.

El polinomio característico es cuatro menos lambda por tres menos lambda, menos dos por uno, que es lambda al cuadrado menos siete lambda más diez.

Factorizando, obtenemos lambda menos cinco por lambda menos dos igual a cero. Los autovalores son cinco y dos.

Para lambda igual a cinco, A menos cinco I tiene menos uno, dos en la primera fila y uno, menos dos en la segunda. El sistema da menos equis más dos ye igual a cero, o sea equis igual a dos ye. El autovector es el vector dos, uno, o cualquier múltiplo no nulo.

Para lambda igual a dos, A menos dos I tiene dos, dos en la primera fila y uno, uno en la segunda. El sistema da equis más ye igual a cero, o sea equis igual a menos ye. El autovector es el vector uno, menos uno.

Verificamos: A por el vector dos, uno es cuatro, dos por dos, uno y uno, tres por dos, uno, que da diez, cinco, igual a cinco veces el vector dos, uno.

Autoespacio.

El autoespacio asociado a un autovalor lambda es el núcleo de A menos lambda I. Es el conjunto de todos los vectores ve tales que A ve es igual a lambda ve.

Es un subespacio del espacio.

La multiplicidad geométrica de lambda es la dimensión del autoespacio.

La multiplicidad algebraica de lambda es su multiplicidad como raíz del polinomio característico.

Siempre se cumple que la multiplicidad geométrica es menor o igual que la multiplicidad algebraica.

Casos Especiales.

Para matrices triangulares, los autovalores son simplemente los elementos de la diagonal.

Para matrices diagonales, los autovalores son los elementos diagonales, y los autovectores son los vectores de la base estándar.

Para matrices simétricas, todos los autovalores son reales, y autovectores de autovalores distintos son ortogonales entre sí.

Propiedades del Polinomio Característico.

Para una matriz A de ene por ene, el polinomio característico tiene propiedades importantes.

La suma de todos los autovalores es igual a la traza de A.

El producto de todos los autovalores es igual al determinante de A.

Teorema de Cayley-Hamilton.

Toda matriz satisface su propio polinomio característico. Si el polinomio es lambda al cuadrado menos cinco lambda más seis, entonces A al cuadrado menos cinco A más seis I es igual a la matriz cero.

Autovalores y Operaciones.

Hay relaciones entre los autovalores de A y los de matrices relacionadas.

Si lambda es autovalor de A, entonces lambda a la ka es autovalor de A a la ka.

Si A es invertible, uno sobre lambda es autovalor de A inversa.

Lambda más ce es autovalor de A más ce I.

Ce lambda es autovalor de ce A.

A y su transpuesta tienen los mismos autovalores.

Los autovectores de A, A a la ka, y A inversa son los mismos.

En la siguiente sección estudiaremos la diagonalización de matrices.
