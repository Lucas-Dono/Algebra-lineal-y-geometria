Álgebra Lineal en Criptografía.

Las matrices y el álgebra lineal juegan roles importantes en varios esquemas criptográficos.

Cifrado de Hill.

La idea es usar multiplicación matricial para cifrar bloques de texto.

La configuración tiene tres pasos. Primero, elegir un tamaño de bloque ene. Segundo, crear una matriz clave K de ene por ene que sea invertible módulo veintiséis. Tercero, convertir letras a números: A es cero, B es uno, y así hasta Z que es veinticinco.

Para cifrar un bloque eme, que es un vector de ene números, calculamos c igual a K por eme módulo veintiséis.

Para descifrar, calculamos eme igual a K inversa por c módulo veintiséis.

Por ejemplo, con ene igual a dos y matriz clave K igual a tres, dos, cinco, siete, verificamos la invertibilidad. El determinante de K es veintiuno menos diez, que es once. Como el máximo común divisor de once y veintiséis es uno, K es invertible módulo veintiséis.

Para cifrar el mensaje "OK", convertimos O a catorce y K a diez. Multiplicamos K por el vector catorce, diez y obtenemos sesenta y dos, ciento cuarenta. Módulo veintiséis esto es diez, diez. El cifrado es "KK".

Para calcular la inversa módulo veintiséis, necesitamos el inverso del determinante. Once por diecinueve es doscientos nueve, que es uno módulo veintiséis. Entonces once inverso es diecinueve módulo veintiséis.

K inversa es diecinueve por la matriz siete, menos dos, menos cinco, tres, que módulo veintiséis da la matriz tres, catorce, nueve, cinco.

En cuanto a seguridad, el cifrado de Hill es vulnerable a ataques de texto plano conocido. Si conocemos ene pares de mensaje y cifrado, podemos recuperar K resolviendo un sistema lineal.

Generadores de Números Pseudoaleatorios.

El generador lineal congruencial calcula equis ene más uno igual a a por equis ene más c módulo eme. Es una transformación lineal o afín iterada.

El generador matricial calcula el vector equis ene más uno igual a A por equis ene módulo eme. Produce secuencias de vectores.

Criptografía de Clave Pública Basada en Reticulados.

Un reticulado en erre ene es el conjunto de combinaciones enteras de vectores base. Son todos los vectores de la forma a uno por b uno más a dos por b dos hasta a ene por b ene, donde los a i son enteros.

El problema del vector corto, SVP, consiste en encontrar el vector no nulo más corto dado un reticulado. Este problema es computacionalmente difícil para reticulados de alta dimensión.

Learning With Errors, o LWE, es la base de muchos esquemas post-cuánticos. Dada A pública, s secreta, y b igual a A por s más e módulo cu, donde e es ruido pequeño, recuperar s es computacionalmente difícil.

Los esquemas basados en LWE incluyen NTRU, Kyber que fue estandarizado por NIST, y Dilithium para firmas digitales.

Compartición de Secretos de Shamir.

El problema es dividir un secreto S entre ene personas tal que cualquier ka de ellas puedan reconstruirlo, pero menos de ka no puedan.

La solución usa polinomios. Primero, crear un polinomio pe de equis de grado ka menos uno con pe de cero igual a S. Luego, dar a cada persona el punto i, pe de i.

Para la reconstrucción, con ka puntos usamos interpolación de Lagrange para reconstruir pe de equis. La interpolación de Lagrange se puede expresar como resolver un sistema lineal con una matriz de Vandermonde.

Códigos de Corrección de Errores.

Un código lineal es un subespacio de efe cu a la ene.

La matriz generadora ge produce las palabras código como c igual a ge por eme. La matriz de paridad hache satisface hache por c igual a cero para toda palabra código.

Para decodificar, al recibir erre igual a c más e, donde e es el error, calculamos el síndrome s igual a hache por erre. El síndrome revela información sobre el error.

Los códigos McEliece son un sistema de clave pública basado en la dificultad de decodificar códigos lineales generales.

Resumen.

El cifrado de Hill usa multiplicación matricial módulo ene. Los generadores pseudoaleatorios usan transformaciones lineales. LWE usa sistemas lineales con ruido. El esquema de Shamir usa interpolación con matrices de Vandermonde. Los códigos de corrección usan espacios nulos y síndromes.

En la siguiente sección veremos aplicaciones en procesamiento de imágenes.
