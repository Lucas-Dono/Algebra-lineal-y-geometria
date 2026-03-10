Álgebra Lineal en Teoría de Grafos.

Los grafos se pueden representar y analizar usando matrices.

Representación Matricial.

Matriz de Adyacencia.

Para un grafo ge con ene vértices, la matriz de adyacencia A es ene por ene. La entrada A i jota es uno si hay arista de i a jota, y cero si no hay.

Para grafos no dirigidos, A es simétrica.

Por ejemplo, un grafo con cuatro vértices y aristas uno-dos, dos-tres, tres-cuatro, cuatro-uno, y dos-cuatro tiene matriz de adyacencia con ceros en la diagonal y unos en las posiciones correspondientes a las aristas.

Matriz de Grados.

La matriz D es diagonal con los grados de cada vértice. El grado d i es el número de aristas incidentes al vértice i.

Matriz Laplaciana.

La matriz Laplaciana L es D menos A.

Sus propiedades son: es simétrica para grafos no dirigidos, sus filas suman cero, es semidefinida positiva, y siempre tiene autovalor lambda uno igual a cero con autovector uno.

Caminos y Potencias.

La entrada i jota de A elevada a la ka es el número de caminos de longitud exacta ka desde i hasta jota.

Por ejemplo, A al cuadrado en la posición i jota cuenta cuántos caminos de longitud dos hay de i a jota.

Para determinar alcanzabilidad, la matriz identidad más A elevada a la ene menos uno tiene entrada no nula en la posición i jota si hay algún camino de i a jota.

Conectividad.

El número de autovalores cero de L es igual al número de componentes conexas del grafo.

La conectividad algebraica es el segundo autovalor más pequeño de L, llamado lambda dos de L. Si lambda dos es cero, el grafo está desconectado. Si lambda dos es grande, el grafo está bien conectado.

Centralidad.

La centralidad de grado de un vértice i es simplemente su grado d i, igual a la suma de A i jota para todo jota.

La centralidad de autovector usa el autovector correspondiente al mayor autovalor de A. La centralidad de un nodo depende de la centralidad de sus vecinos.

PageRank es una variante de centralidad de autovector usada por Google. El vector de rankings erre satisface erre igual a uno menos alfa por uno sobre ene más alfa por pe por erre, donde pe es la matriz de transición y alfa es aproximadamente cero punto ochenta y cinco. El vector erre es esencialmente el autovector dominante de una matriz modificada.

Clustering Espectral.

El algoritmo tiene cuatro pasos. Primero, calcular los primeros ka autovectores de L. Segundo, formar la matriz U con estos autovectores como columnas. Tercero, interpretar las filas de U como coordenadas de los vértices. Cuarto, aplicar ka-means a estas coordenadas.

La intuición es que el autovector v dos, correspondiente a lambda dos, separa el grafo en dos partes. Los vértices con v dos i positivo van a un grupo y los vértices con v dos i negativo van a otro. Esta partición minimiza aproximadamente el número de aristas cortadas.

Grafos Aleatorios.

En el modelo Erdos-Renyi, cada arista existe con probabilidad pe. La matriz de adyacencia esperada es pe por uno uno transpuesta menos la identidad.

Para grafos grandes, la distribución de autovalores sigue la ley del semicírculo de Wigner.

Redes en la Práctica.

En redes sociales, los vértices son usuarios y las aristas son conexiones o amistades. La centralidad mide la influencia.

En redes de citas, los vértices son artículos y las aristas dirigidas son citas. PageRank mide la importancia académica.

En redes biológicas, los vértices son proteínas o genes y las aristas son interacciones. El clustering identifica módulos funcionales.

Ejemplo: Centralidad de Autovector.

Para una matriz de adyacencia cuatro por cuatro específica, el autovalor máximo es aproximadamente dos punto diecisiete. El autovector correspondiente es aproximadamente cero punto cuarenta y cuatro, cero punto cincuenta y ocho, cero punto cincuenta, cero punto veintisiete. El vértice dos tiene la mayor centralidad con cero punto cincuenta y ocho.

Resumen de Matrices de Grafos.

La matriz de adyacencia A tiene A i jota igual a uno si hay arista. Se usa para caminos y conectividad.

La matriz de grados D es diagonal con los grados. Se usa para normalización.

La Laplaciana L igual a D menos A usa diferencias y sirve para clustering y conectividad.

La matriz de transición pe igual a D inversa por A tiene probabilidades y se usa para caminatas aleatorias.

En la siguiente sección veremos aplicaciones en criptografía.
