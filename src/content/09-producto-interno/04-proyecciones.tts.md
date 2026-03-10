Proyecciones Ortogonales.

La proyección ortogonal encuentra el punto más cercano en un subespacio.

Proyección sobre un Vector.

La proyección de ve sobre u, cuando u es distinto del vector cero, es el producto de ve con u dividido por el producto de u consigo mismo, todo multiplicado por u. Esto es equivalente al producto de ve con u dividido por la norma de u al cuadrado, multiplicado por u.

Si u es unitario, la fórmula se simplifica a simplemente el producto de ve con u, multiplicado por u.

Componentes.

Cualquier vector ve se descompone como la proyección sobre u más un vector perpendicular a u. La componente perpendicular es ve menos la proyección, y es ortogonal a u.

Por ejemplo, si ve es tres, cuatro y u es uno, uno, la proyección de ve sobre u es siete medios por el vector uno, uno, que es tres punto cinco, tres punto cinco. El componente perpendicular es menos cero punto cinco, cero punto cinco.

Proyección sobre un Subespacio.

Sea doble ve un subespacio con base ortonormal u uno hasta u ka.

La proyección de ve sobre doble ve es la suma del producto de ve con u i, multiplicado por u i, para i desde uno hasta ka.

El teorema de mejor aproximación dice que la proyección es el punto de doble ve más cercano a ve. La distancia de ve a la proyección es menor o igual a la distancia de ve a cualquier otro punto del subespacio, con igualdad solo cuando ese punto es la proyección.

El error de aproximación, que es ve menos su proyección, está en el complemento ortogonal de doble ve. El error es perpendicular al subespacio.

Matriz de Proyección.

Si las columnas de cu forman una base ortonormal de doble ve, entonces la matriz de proyección sobre doble ve es cu por cu transpuesta.

La proyección de ve es simplemente cu cu transpuesta por ve.

La matriz de proyección es idempotente: su cuadrado es ella misma. Es simétrica. Sus autovalores son cero y uno. Y su rango es igual a la dimensión del subespacio.

Proyección con Base No Ortonormal.

Si doble ve es el espacio columna de A, donde A tiene columnas linealmente independientes pero no necesariamente ortonormales, la matriz de proyección es A por la inversa de A transpuesta A, todo multiplicado por A transpuesta.

Mínimos Cuadrados.

El sistema A equis igual a be puede no tener solución exacta.

Queremos encontrar equis sombrero que minimice la norma de A equis menos be.

La solución de mínimos cuadrados es equis sombrero igual a la inversa de A transpuesta A, multiplicada por A transpuesta be.

Esto asume que A tiene columnas linealmente independientes.

Las ecuaciones normales son A transpuesta A por equis sombrero igual a A transpuesta be.

La interpretación es que A por equis sombrero es la proyección de be sobre el espacio columna de A. La solución equis sombrero da exactamente esa proyección.

Ejemplo: Regresión Lineal.

Supongamos que queremos ajustar una recta ye igual a a más b equis a los puntos uno, dos, dos, tres, y tres, seis.

El sistema de ecuaciones es probablemente inconsistente. En forma matricial, A tiene tres filas con uno, uno y uno, dos y uno, tres, y be es el vector dos, tres, seis.

Calculamos A transpuesta A, que resulta ser la matriz tres, seis y seis, catorce. Y A transpuesta be es el vector once, veinticinco.

Resolviendo las ecuaciones normales, obtenemos equis sombrero igual a dos tercios, tres medios.

La recta de mejor ajuste es ye igual a dos tercios más tres medios equis.

Aproximación de Fourier.

Para funciones en el intervalo de cero a dos pi, las funciones uno, coseno equis, seno equis, coseno dos equis, seno dos equis, y así sucesivamente, son ortogonales.

La mejor aproximación de una función efe usando las primeras ene funciones es la serie de Fourier truncada.

Los coeficientes son proyecciones: a sub ka es uno sobre pi por la integral de efe de equis por coseno ka equis, y b sub ka es uno sobre pi por la integral de efe de equis por seno ka equis.

Con esto concluye el capítulo de Espacios con Producto Interno. En el siguiente capítulo estudiaremos las Formas Cuadráticas.
