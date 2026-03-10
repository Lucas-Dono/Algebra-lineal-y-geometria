---
title: "Eliminación Gaussiana"
chapter: 2
section: 1
---

# Eliminación Gaussiana

El método de eliminación gaussiana es el algoritmo fundamental para resolver sistemas de ecuaciones lineales. Transforma sistemáticamente cualquier sistema en una forma equivalente más simple.

## Operaciones Elementales por Filas

Las operaciones elementales sobre una matriz son:

| Operación | Notación | Descripción |
|-----------|----------|-------------|
| Intercambio | $F_i \leftrightarrow F_j$ | Intercambiar filas $i$ y $j$ |
| Escalamiento | $F_i \to cF_i$ | Multiplicar fila $i$ por $c \neq 0$ |
| Reemplazo | $F_i \to F_i + cF_j$ | Sumar a fila $i$ un múltiplo de fila $j$ |

Estas operaciones son **reversibles** y no cambian el conjunto de soluciones.

## Forma Escalonada por Filas

Una matriz está en **forma escalonada por filas** si:

1. Todas las filas de ceros están al final
2. El primer elemento no nulo de cada fila (llamado **pivote**) está a la derecha del pivote de la fila anterior
3. Todos los elementos debajo de un pivote son cero

**Ejemplo de forma escalonada:**
$$\begin{pmatrix} \boxed{2} & 3 & 1 & | & 5 \\ 0 & \boxed{1} & -2 & | & 3 \\ 0 & 0 & \boxed{4} & | & 8 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$$

Los pivotes están recuadrados.

## El Algoritmo

### Paso 1: Localizar la columna pivote

Encontrar la columna más a la izquierda que tenga algún elemento no nulo.

### Paso 2: Seleccionar el pivote

Elegir un elemento no nulo en esa columna (puede requerir intercambiar filas).

### Paso 3: Crear ceros debajo del pivote

Usar operaciones de reemplazo para hacer cero todos los elementos debajo del pivote.

### Paso 4: Repetir

Aplicar los pasos 1-3 a la submatriz que queda debajo y a la derecha del pivote actual.

## Ejemplo Completo

Resolver el sistema:
$$\begin{cases} x + 2y + z = 2 \\ 2x + 6y + z = 7 \\ x + y + 4z = 3 \end{cases}$$

**Matriz aumentada inicial:**
$$\begin{pmatrix} 1 & 2 & 1 & | & 2 \\ 2 & 6 & 1 & | & 7 \\ 1 & 1 & 4 & | & 3 \end{pmatrix}$$

**Paso 1:** Usar el 1 en posición (1,1) como pivote.

$F_2 \to F_2 - 2F_1$:
$$\begin{pmatrix} 1 & 2 & 1 & | & 2 \\ 0 & 2 & -1 & | & 3 \\ 1 & 1 & 4 & | & 3 \end{pmatrix}$$

$F_3 \to F_3 - F_1$:
$$\begin{pmatrix} 1 & 2 & 1 & | & 2 \\ 0 & 2 & -1 & | & 3 \\ 0 & -1 & 3 & | & 1 \end{pmatrix}$$

**Paso 2:** Usar el 2 en posición (2,2) como pivote.

$F_3 \to F_3 + \frac{1}{2}F_2$:
$$\begin{pmatrix} 1 & 2 & 1 & | & 2 \\ 0 & 2 & -1 & | & 3 \\ 0 & 0 & \frac{5}{2} & | & \frac{5}{2} \end{pmatrix}$$

**Forma escalonada alcanzada.**

**Sustitución hacia atrás:**

De la fila 3: $\frac{5}{2}z = \frac{5}{2} \Rightarrow z = 1$

De la fila 2: $2y - z = 3 \Rightarrow 2y - 1 = 3 \Rightarrow y = 2$

De la fila 1: $x + 2y + z = 2 \Rightarrow x + 4 + 1 = 2 \Rightarrow x = -3$

**Solución:** $(x, y, z) = (-3, 2, 1)$

## Pivoteo Parcial

En la práctica, se elige como pivote el elemento de mayor valor absoluto en la columna (intercambiando filas si es necesario). Esto mejora la estabilidad numérica.

**Ejemplo:** Si la columna tiene valores $0.001, 2, -3$, elegimos $-3$ como pivote intercambiando filas.

## Variables Pivote y Libres

Después de reducir a forma escalonada:

- **Variables pivote:** Las que corresponden a columnas con pivote. Se determinan únicamente.
- **Variables libres:** Las que corresponden a columnas sin pivote. Pueden tomar cualquier valor.

**Ejemplo:**
$$\begin{pmatrix} 1 & 2 & 0 & 3 & | & 5 \\ 0 & 0 & 1 & 2 & | & 1 \\ 0 & 0 & 0 & 0 & | & 0 \end{pmatrix}$$

- Pivotes en columnas 1 y 3: $x_1$ y $x_3$ son variables pivote
- Columnas 2 y 4 sin pivote: $x_2$ y $x_4$ son variables libres

## Determinación de la Cantidad de Soluciones

Después de reducir a forma escalonada, el sistema:

1. **No tiene solución** si hay una fila de la forma $(0 \; 0 \; \cdots \; 0 \; | \; c)$ con $c \neq 0$
   - Esto representa la ecuación $0 = c$, que es imposible

2. **Tiene solución única** si:
   - No hay filas inconsistentes
   - Cada variable es variable pivote (tantos pivotes como incógnitas)

3. **Tiene infinitas soluciones** si:
   - No hay filas inconsistentes
   - Hay al menos una variable libre

## Ejemplo: Sistema Sin Solución

$$\begin{pmatrix} 1 & 2 & 1 & | & 3 \\ 2 & 4 & 2 & | & 8 \end{pmatrix}$$

$F_2 \to F_2 - 2F_1$:
$$\begin{pmatrix} 1 & 2 & 1 & | & 3 \\ 0 & 0 & 0 & | & 2 \end{pmatrix}$$

La segunda fila dice $0 = 2$. El sistema es **incompatible**.

## Ejemplo: Sistema con Infinitas Soluciones

$$\begin{pmatrix} 1 & 2 & 1 & | & 3 \\ 2 & 4 & 2 & | & 6 \end{pmatrix}$$

$F_2 \to F_2 - 2F_1$:
$$\begin{pmatrix} 1 & 2 & 1 & | & 3 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$$

Una ecuación: $x_1 + 2x_2 + x_3 = 3$

Variables libres: $x_2 = s$, $x_3 = t$

Solución general: $(x_1, x_2, x_3) = (3 - 2s - t, s, t)$ para $s, t \in \mathbb{R}$

## Complejidad Computacional

Para un sistema de $n$ ecuaciones con $n$ incógnitas:

- Eliminación: $O(n^3)$ operaciones
- Sustitución hacia atrás: $O(n^2)$ operaciones
- Total: $O(n^3)$

Este es mucho más eficiente que la regla de Cramer, que requiere $O(n \cdot n!)$ operaciones.

## Resumen del Algoritmo

```
Entrada: Matriz aumentada [A|b]
Salida: Matriz en forma escalonada

fila_actual = 1
Para cada columna c desde 1 hasta n:
    1. Buscar un pivote no nulo en columna c, fila >= fila_actual
    2. Si no hay pivote, continuar con siguiente columna
    3. Intercambiar filas para poner pivote en fila_actual
    4. Para cada fila i > fila_actual:
       - Calcular multiplicador m = A[i,c] / A[fila_actual,c]
       - Restar m veces fila_actual de fila i
    5. fila_actual = fila_actual + 1
```

---

## Videos Recomendados

import VideoEmbed from '../../components/content/VideoEmbed.astro';

<VideoEmbed
  youtubeId="XRcx8-2lLJI"
  title="Solución de un sistema 3x3 por método de Gauss - Matemáticas profe Alex"
/>

<VideoEmbed
  youtubeId="IW90DfygZC4"
  title="Método de eliminación de Gauss desde cero - Álgebra Para Todos"
/>

---

En la siguiente sección estudiaremos el método de Gauss-Jordan, que continúa la reducción hasta obtener la forma escalonada reducida.
