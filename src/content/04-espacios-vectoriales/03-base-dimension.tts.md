Base y Dimensión.

La dimensión es la noción más importante para clasificar espacios vectoriales. Captura la idea de grados de libertad del espacio.

Combinación Lineal.

Una combinación lineal de los vectores ve uno, ve dos, hasta ve ka es una expresión de la forma ce uno por ve uno más ce dos por ve dos, y así hasta ce ka por ve ka. Los números ce uno hasta ce ka son escalares llamados coeficientes.

Por ejemplo, el vector siete, cuatro, tres se puede escribir como dos veces uno, dos, uno, más tres veces uno, cero, cero, más una vez dos, cero, uno.

Espacio Generado.

El espacio generado por un conjunto de vectores, también llamado span, es el conjunto de todas sus combinaciones lineales. Para los vectores ve uno hasta ve ka, el span es el conjunto de todos los vectores de la forma ce uno ve uno más ce dos ve dos y así sucesivamente, donde los coeficientes son números reales cualesquiera.

Un teorema importante dice que el span de cualquier conjunto de vectores es un subespacio.

Por ejemplo, el span del vector uno, cero es el eje equis en erre dos. El span de los vectores uno, cero y cero, uno es todo erre dos. Pero el span de los vectores uno, dos y dos, cuatro es solo la recta ye igual a dos equis, porque el segundo vector es el doble del primero, son paralelos.

Dependencia Lineal.

Los vectores ve uno hasta ve ka son linealmente dependientes si existen escalares ce uno hasta ce ka, no todos cero, tales que ce uno ve uno más ce dos ve dos y así hasta ce ka ve ka es igual al vector cero.

Dicho de otra forma, los vectores son dependientes si al menos uno de ellos se puede escribir como combinación lineal de los otros.

Independencia Lineal.

Los vectores son linealmente independientes si la única forma de obtener el vector cero como combinación lineal es usando todos los coeficientes iguales a cero. Es decir, si ce uno ve uno más ce dos ve dos y así hasta ce ka ve ka es igual al vector cero, entonces necesariamente ce uno, ce dos, hasta ce ka son todos cero.

Para verificar si vectores en erre ene son independientes, formamos la matriz con los vectores como columnas y la reducimos a forma escalonada. Si hay columnas sin pivote, los vectores son linealmente dependientes. Si cada columna tiene pivote, son linealmente independientes.

Por ejemplo, para verificar si los vectores uno, dos, tres y cuatro, cinco, seis y siete, ocho, nueve son independientes, formamos la matriz y la reducimos. Resulta que hay una columna sin pivote, así que son dependientes. De hecho, el tercer vector es dos veces el segundo menos el primero.

Base.

Una base de un espacio vectorial ve es un conjunto de vectores que cumple dos condiciones. Primero, el conjunto es linealmente independiente. Segundo, el conjunto genera todo ve.

La base canónica de erre ene es el conjunto de vectores e uno, e dos, hasta e ene, donde e i tiene uno en la posición i y cero en las demás.

Otra base de erre dos es el conjunto formado por uno, uno y uno, menos uno.

Una base del espacio de polinomios de grado a lo sumo dos es el conjunto uno, equis, equis al cuadrado. Otra base es uno, uno más equis, uno más equis más equis al cuadrado.

Dimensión.

Un teorema fundamental dice que todas las bases de un espacio vectorial de dimensión finita tienen el mismo número de elementos.

La dimensión de ve es este número, la cantidad de vectores en cualquier base.

Por ejemplo, erre ene tiene dimensión ene. El espacio de matrices eme por ene tiene dimensión eme por ene. El espacio de polinomios de grado a lo sumo ene tiene dimensión ene más uno. Y el espacio que solo contiene el vector cero tiene dimensión cero.

Hay propiedades importantes relacionadas con la dimensión. Si la dimensión de ve es ene, entonces cualquier conjunto con más de ene vectores es linealmente dependiente. Cualquier conjunto independiente de ene vectores es una base. Y cualquier conjunto generador de ene vectores también es base.

Si doble ve es subespacio de ve, entonces la dimensión de doble ve es menor o igual a la dimensión de ve. Y si son iguales, entonces doble ve es igual a ve.

Teorema del Rango y Nulidad.

Para una matriz A de eme por ene se cumple que el rango de A más la nulidad de A es igual a ene.

El rango de A es la dimensión del espacio columna, que es igual a la dimensión del espacio fila. La nulidad de A es la dimensión del espacio nulo.

Encontrar una Base.

Para encontrar una base del espacio nulo de una matriz, primero reducimos la matriz a su forma escalonada reducida. Luego expresamos las variables pivote en términos de las variables libres. Escribimos la solución general como combinación lineal de vectores. Los vectores que multiplican a los parámetros forman la base.

Para encontrar una base del espacio columna, reducimos la matriz a forma escalonada e identificamos las columnas pivote. Las columnas originales, no las reducidas, correspondientes a esas posiciones forman la base.

Para encontrar una base del espacio fila, reducimos a forma escalonada. Las filas no nulas del resultado forman la base.

Extensión y Reducción.

Cualquier conjunto linealmente independiente se puede extender a una base, agregando vectores de la base canónica uno a uno y verificando la independencia en cada paso.

De cualquier conjunto generador se puede extraer una base, eliminando los vectores que sean combinación lineal de los anteriores.

En la siguiente sección estudiaremos las coordenadas respecto a una base.
