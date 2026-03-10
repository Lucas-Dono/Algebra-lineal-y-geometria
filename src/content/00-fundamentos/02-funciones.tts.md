Funciones.

Las funciones son el concepto central para describir relaciones entre conjuntos. En álgebra lineal, las transformaciones lineales son un tipo especial de función.

Definición.

Una función efe de un conjunto A en un conjunto B es una regla que asigna a cada elemento de A exactamente un elemento de B.

Escribimos "efe de A en B" para indicar que efe toma elementos de A y los transforma en elementos de B.

A se llama el dominio de efe, que es de donde vienen los elementos que vamos a transformar. B se llama el codominio, que es el conjunto donde caen los resultados. efe de equis es la imagen de equis, es decir, el resultado de aplicar la función a equis. Y el rango o imagen de efe es el conjunto de todos los valores que realmente alcanza la función.

Ejemplos Básicos.

Primer ejemplo: la función efe de equis igual a equis al cuadrado, que va de los reales a los reales. Su dominio son todos los reales. Su codominio también son todos los reales. Pero su rango son solo los números no negativos, desde cero hasta infinito, porque elevar al cuadrado nunca da negativo.

Segundo ejemplo: una función ge que toma un par ordenado equis, ye y devuelve su suma, equis más ye. Esta función toma dos números y devuelve uno solo.

Tercer ejemplo: una función hache de te igual al par coseno de te, seno de te. Esta función toma un número y devuelve un par, que representa un punto en el círculo unitario.

Igualdad de Funciones.

Dos funciones efe y ge son iguales si cumplen tres condiciones. Primero, tienen el mismo dominio. Segundo, tienen el mismo codominio. Y tercero, para todo equis en el dominio, efe de equis es igual a ge de equis.

Tipos de Funciones.

Función Inyectiva, también llamada uno a uno.

Una función es inyectiva si elementos distintos siempre tienen imágenes distintas. En otras palabras, si efe de equis uno es igual a efe de equis dos, entonces equis uno tiene que ser igual a equis dos. No puede haber dos entradas diferentes que den la misma salida.

Por ejemplo, la función efe de equis igual a dos equis más tres es inyectiva. Si dos equis uno más tres es igual a dos equis dos más tres, podemos restar tres de ambos lados y dividir por dos, obteniendo que equis uno es igual a equis dos.

En cambio, la función efe de equis igual a equis al cuadrado no es inyectiva. Porque efe de dos es igual a cuatro, y efe de menos dos también es igual a cuatro. Tenemos dos entradas distintas, dos y menos dos, que dan la misma salida.

Función Sobreyectiva, también llamada sobre o suryectiva.

Una función es sobreyectiva si todo elemento del codominio es alcanzado por algún elemento del dominio. Es decir, el rango es igual al codominio completo, sin dejar elementos afuera.

Por ejemplo, la función efe de equis igual a equis al cubo, de los reales a los reales, es sobreyectiva. Para cualquier número ye que queramos alcanzar, existe un equis, que es la raíz cúbica de ye, tal que efe de equis es igual a ye.

En cambio, efe de equis igual a equis al cuadrado, de los reales a los reales, no es sobreyectiva. El número menos uno no es imagen de ningún real, porque no existe ningún número real cuyo cuadrado sea negativo.

Función Biyectiva.

Una función es biyectiva si es inyectiva y sobreyectiva al mismo tiempo. Las funciones biyectivas establecen una correspondencia perfecta entre los elementos del dominio y el codominio. Cada elemento del dominio va a parar a un único elemento del codominio, y cada elemento del codominio es alcanzado por exactamente un elemento del dominio.

Por ejemplo, efe de equis igual a dos equis más uno es biyectiva. Ya vimos que es inyectiva. Y es sobreyectiva porque para cualquier ye, podemos encontrar equis igual a ye menos uno, dividido dos, tal que efe de equis da ye.

Composición de Funciones.

Dadas dos funciones, efe de A en B y ge de B en C, podemos componerlas para obtener una función que va directo de A a C.

La composición ge compuesta con efe, evaluada en equis, se calcula aplicando primero efe a equis, y luego ge al resultado. Es decir, ge de efe de equis.

Se lee "ge compuesta con efe" y se aplica de derecha a izquierda: primero efe, luego ge.

Por ejemplo, si efe de equis es equis al cuadrado y ge de equis es equis más uno. Entonces ge compuesta con efe de equis es primero equis al cuadrado, y luego le sumamos uno, dando equis al cuadrado más uno.

Pero efe compuesta con ge de equis es diferente: primero equis más uno, y luego elevamos al cuadrado, dando equis más uno, todo al cuadrado.

Esto muestra que la composición no es conmutativa. El orden importa.

Propiedades de la Composición.

La composición es asociativa: no importa cómo agrupemos tres funciones al componerlas.

La función identidad actúa como elemento neutro: componerla con cualquier función no cambia nada.

Si componemos dos funciones inyectivas, el resultado es inyectiva. Lo mismo para sobreyectivas. Y si ambas son biyectivas, la composición también es biyectiva.

Función Identidad.

La función identidad en A es la función que deja todo igual. Aplicada a cualquier equis, devuelve el mismo equis. Es la función que no hace nada, y obviamente es biyectiva.

Función Inversa.

Si efe es biyectiva, existe una única función llamada efe inversa que deshace lo que hace efe.

Si aplicamos efe y luego efe inversa, volvemos al valor original. Y si aplicamos efe inversa y luego efe, también volvemos al valor original.

Por ejemplo, si efe de equis es dos equis más uno, para encontrar efe inversa hacemos lo siguiente. Llamamos ye igual a dos equis más uno. Despejamos equis: restamos uno y dividimos por dos, obteniendo equis igual a ye menos uno, dividido dos. Por lo tanto, efe inversa de ye es ye menos uno, dividido dos.

Podemos verificar: si aplicamos efe a efe inversa de ye, obtenemos dos por ye menos uno dividido dos, más uno, que simplifica a ye menos uno más uno, que es ye. Funciona.

Imagen e Imagen Inversa.

La imagen de un subconjunto S bajo efe es el conjunto de todas las imágenes de elementos de S. Aplicamos efe a cada elemento de S y juntamos todos los resultados.

La imagen inversa o preimagen de un subconjunto T del codominio es el conjunto de todos los elementos del dominio cuya imagen cae en T. Es importante notar que esta notación no requiere que efe sea biyectiva. Es diferente de la función inversa.

Aplicación en Álgebra Lineal.

Las transformaciones lineales son funciones entre espacios vectoriales que preservan la estructura lineal.

Estudiaremos el núcleo de una transformación, que es la preimagen del vector cero, es decir, todos los vectores que la transformación manda al cero.

También estudiaremos la imagen de una transformación, que es el conjunto de todos los vectores que se pueden alcanzar.

Analizaremos cuándo una transformación es inyectiva, sobreyectiva, o biyectiva. Y cómo asociar una matriz a cada transformación.

Una transformación lineal biyectiva se llama isomorfismo, y es especialmente importante porque establece que dos espacios vectoriales son esencialmente iguales.

En la siguiente sección estudiaremos la inducción matemática, una técnica de demostración fundamental.
