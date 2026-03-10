Proceso de Gram-Schmidt.

El proceso de Gram-Schmidt transforma cualquier base en una base ortonormal.

Idea.

Dado un conjunto linealmente independiente de vectores ve uno hasta ve ka, queremos construir un conjunto ortonormal u uno hasta u ka que genere el mismo subespacio.

La idea es simple. Tomamos el primer vector y lo normalizamos. Para cada vector siguiente, le restamos sus proyecciones sobre los vectores anteriores ya ortonormalizados, y luego normalizamos el resultado.

Algoritmo.

La entrada es un conjunto de vectores linealmente independientes ve uno hasta ve ka.

En el paso uno, tomamos doble ve uno igual a ve uno, y u uno igual a doble ve uno dividido por su norma.

En el paso dos, restamos de ve dos su proyección sobre u uno. Esto da doble ve dos igual a ve dos menos el producto de ve dos con u uno, todo multiplicado por u uno. Luego normalizamos: u dos es doble ve dos dividido por su norma.

En el paso tres, restamos de ve tres sus proyecciones sobre u uno y u dos. Doble ve tres es ve tres menos el producto de ve tres con u uno por u uno, menos el producto de ve tres con u dos por u dos. Y u tres es doble ve tres normalizado.

En general, en el paso ka, doble ve ka es ve ka menos la suma de los productos de ve ka con u jota por u jota, para jota desde uno hasta ka menos uno. Y u ka es doble ve ka dividido por su norma.

La salida es el conjunto ortonormal u uno hasta u ka.

Ejemplo en Erre Tres.

Ortonormalicemos los vectores ve uno igual a uno, uno, uno, ve dos igual a uno, uno, cero, y ve tres igual a uno, cero, cero.

En el paso uno, la norma de ve uno es raíz de tres. El vector u uno es uno sobre raíz de tres por el vector uno, uno, uno.

En el paso dos, el producto de ve dos con u uno es dos sobre raíz de tres. Entonces doble ve dos es ve dos menos dos tercios del vector uno, uno, uno, que da un tercio, un tercio, menos dos tercios. La norma de doble ve dos es raíz de seis sobre tres. El vector u dos es uno sobre raíz de seis por el vector uno, uno, menos dos.

En el paso tres, el producto de ve tres con u uno es uno sobre raíz de tres, y el producto de ve tres con u dos es uno sobre raíz de seis. Haciendo los cálculos, doble ve tres resulta ser un medio, menos un medio, cero. Su norma es uno sobre raíz de dos. El vector u tres es uno sobre raíz de dos por el vector uno, menos uno, cero.

El resultado son tres vectores ortonormales que generan el mismo espacio que los originales.

Para verificar, calculamos los productos internos entre los vectores resultantes. El producto de u uno con u dos es cero. El producto de u uno con u tres es cero. El producto de u dos con u tres es cero. Y todos tienen norma uno.

Descomposición QR.

El proceso de Gram-Schmidt produce la descomposición QR de una matriz.

Si A tiene columnas linealmente independientes, entonces A es igual a cu por erre, donde cu es ortogonal y erre es triangular superior con entradas positivas en la diagonal.

Las columnas de cu son los vectores u i del proceso. Las entradas de erre se obtienen de los productos internos calculados durante el proceso.

Las aplicaciones de la descomposición QR incluyen resolver sistemas de forma numéricamente estable, calcular autovalores con el algoritmo QR, y resolver problemas de mínimos cuadrados.

Gram-Schmidt en Espacios de Funciones.

El proceso también funciona en espacios de funciones.

Por ejemplo, para ortonormalizar las funciones uno, equis, y equis al cuadrado en el espacio de polinomios con el producto interno dado por la integral de menos uno a uno, obtenemos múltiplos de los polinomios de Legendre.

El primer polinomio ortonormalizado es uno sobre raíz de dos. El segundo es raíz de tres medios por equis. El tercero involucra equis al cuadrado menos un tercio.

En la siguiente sección estudiaremos las proyecciones ortogonales.
