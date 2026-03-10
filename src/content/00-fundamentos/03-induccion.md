---
title: "Inducción Matemática"
chapter: 0
section: 3
---

# Inducción Matemática

La inducción matemática es una técnica de demostración para probar que una propiedad es verdadera para todos los números naturales (o enteros a partir de cierto valor).

## El Principio de Inducción

Para demostrar que una propiedad $P(n)$ es verdadera para todo $n \geq n_0$:

**Paso 1 - Caso Base:** Demostrar que $P(n_0)$ es verdadera.

**Paso 2 - Paso Inductivo:** Demostrar que si $P(k)$ es verdadera para algún $k \geq n_0$, entonces $P(k+1)$ también es verdadera.

$$P(k) \Rightarrow P(k+1)$$

**Conclusión:** Por el principio de inducción, $P(n)$ es verdadera para todo $n \geq n_0$.

## Analogía: El Efecto Dominó

Imagina una fila infinita de fichas de dominó:

1. **Caso base:** La primera ficha cae.
2. **Paso inductivo:** Si una ficha cualquiera cae, hace caer a la siguiente.
3. **Conclusión:** Todas las fichas caen.

## Ejemplo 1: Suma de los Primeros n Naturales

**Proposición:** Para todo $n \geq 1$:
$$1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}$$

**Demostración por inducción:**

**Caso base ($n = 1$):**

Lado izquierdo: $1$

Lado derecho: $\frac{1(1+1)}{2} = \frac{2}{2} = 1$

Ambos lados son iguales. El caso base se cumple.

**Paso inductivo:**

Hipótesis inductiva: Supongamos que la fórmula es verdadera para $n = k$:
$$1 + 2 + \cdots + k = \frac{k(k+1)}{2}$$

Debemos probar que es verdadera para $n = k + 1$:
$$1 + 2 + \cdots + k + (k+1) = \frac{(k+1)(k+2)}{2}$$

Partiendo del lado izquierdo y usando la hipótesis inductiva:

$$1 + 2 + \cdots + k + (k+1) = \frac{k(k+1)}{2} + (k+1)$$

$$= \frac{k(k+1)}{2} + \frac{2(k+1)}{2} = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k + 2)}{2}$$

Que es exactamente lo que queríamos demostrar.

**Conclusión:** Por inducción, la fórmula es válida para todo $n \geq 1$.

## Ejemplo 2: Suma de Cuadrados

**Proposición:** Para todo $n \geq 1$:
$$1^2 + 2^2 + 3^2 + \cdots + n^2 = \frac{n(n+1)(2n+1)}{6}$$

**Demostración:**

**Caso base ($n = 1$):**
- Izquierda: $1^2 = 1$
- Derecha: $\frac{1 \cdot 2 \cdot 3}{6} = 1$

**Paso inductivo:**

Supongamos válido para $k$. Para $k + 1$:

$$\sum_{i=1}^{k+1} i^2 = \sum_{i=1}^{k} i^2 + (k+1)^2 = \frac{k(k+1)(2k+1)}{6} + (k+1)^2$$

$$= \frac{(k+1)[k(2k+1) + 6(k+1)]}{6} = \frac{(k+1)(2k^2 + 7k + 6)}{6}$$

$$= \frac{(k+1)(k+2)(2k+3)}{6} = \frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}$$

## Ejemplo 3: Desigualdad

**Proposición:** Para todo $n \geq 1$: $2^n > n$

**Caso base ($n = 1$):** $2^1 = 2 > 1$. Verdadero.

**Paso inductivo:**

Supongamos $2^k > k$ para algún $k \geq 1$.

Debemos probar: $2^{k+1} > k + 1$

$$2^{k+1} = 2 \cdot 2^k > 2 \cdot k = k + k \geq k + 1$$

(La primera desigualdad usa la hipótesis inductiva; la segunda usa que $k \geq 1$.)

Por lo tanto, $2^{k+1} > k + 1$.

## Inducción Fuerte

A veces necesitamos asumir que la propiedad es verdadera para todos los valores anteriores, no solo para $k$.

**Principio de Inducción Fuerte:**

**Paso 1:** Demostrar $P(n_0)$.

**Paso 2:** Demostrar que si $P(n_0), P(n_0+1), \ldots, P(k)$ son todas verdaderas, entonces $P(k+1)$ es verdadera.

**Ejemplo:** Todo entero $n \geq 2$ es producto de primos.

**Caso base:** $2$ es primo, así que es producto de primos (él mismo).

**Paso inductivo:** Sea $k \geq 2$. Supongamos que todo entero entre $2$ y $k$ es producto de primos.

Consideremos $k + 1$:
- Si $k + 1$ es primo, es producto de primos.
- Si $k + 1$ no es primo, entonces $k + 1 = ab$ donde $2 \leq a, b \leq k$.
- Por hipótesis inductiva, $a$ y $b$ son productos de primos.
- Por lo tanto, $k + 1 = ab$ es producto de primos.

## Errores Comunes

### 1. Olvidar el Caso Base

**Falsa "demostración":** Todo número natural es par.

"Paso inductivo": Si $k$ es par, entonces $k + 2$ es par (saltando de 2 en 2).

El problema: No hay caso base válido que inicie la cadena correctamente.

### 2. Hipótesis Inductiva Incorrecta

Asegúrate de usar exactamente la hipótesis inductiva, no una versión modificada.

### 3. Casos Base Insuficientes

Algunas demostraciones requieren verificar varios casos base, especialmente cuando el paso inductivo relaciona $P(k+1)$ con $P(k-1)$ u otros valores anteriores.

## Aplicaciones en Álgebra Lineal

La inducción se usa frecuentemente para demostrar propiedades de:

1. **Determinantes:** Fórmula de expansión por cofactores
2. **Dimensión:** Propiedades de bases y dimensión
3. **Matrices:** Potencias de matrices, propiedades del rango
4. **Polinomio característico:** Grado y coeficientes

**Ejemplo típico:** "Toda matriz $n \times n$ tiene a lo sumo $n$ autovalores distintos."

Se demuestra por inducción sobre $n$, usando que el polinomio característico tiene grado $n$.

## Resumen

| Componente | Descripción |
|------------|-------------|
| Caso base | Verificar $P(n_0)$ directamente |
| Hipótesis inductiva | Asumir $P(k)$ verdadera |
| Paso inductivo | Probar $P(k) \Rightarrow P(k+1)$ |
| Conclusión | $P(n)$ para todo $n \geq n_0$ |

---

Con esto concluye el capítulo de Fundamentos Matemáticos. En el siguiente capítulo estudiaremos los Números Complejos.
