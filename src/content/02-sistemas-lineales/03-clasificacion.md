---
title: "Clasificación de Sistemas"
chapter: 2
section: 3
---

# Clasificación de Sistemas de Ecuaciones Lineales

En esta sección formalizamos los criterios para determinar si un sistema tiene solución y, de ser así, cuántas soluciones tiene.

## Teorema de Rouché-Frobenius

Sea $Ax = b$ un sistema de $m$ ecuaciones con $n$ incógnitas. Sea $[A|b]$ la matriz aumentada.

El sistema:

1. **Es incompatible** (no tiene solución) si y solo si:
$$\text{rango}(A) < \text{rango}([A|b])$$

2. **Es compatible** (tiene solución) si y solo si:
$$\text{rango}(A) = \text{rango}([A|b])$$

En el caso compatible:

- **Determinado** (solución única) si $\text{rango}(A) = n$
- **Indeterminado** (infinitas soluciones) si $\text{rango}(A) < n$

### Interpretación

- Si $\text{rango}(A) < \text{rango}([A|b])$, la columna $b$ no es combinación lineal de las columnas de $A$, por lo que $b$ no está en la imagen de $A$.

- El número de variables libres es $n - \text{rango}(A)$.

## Diagrama de Clasificación

```
                    Sistema Ax = b
                          |
            rango(A) = rango([A|b])?
                    /           \
                  NO             SI
                  |              |
            INCOMPATIBLE     COMPATIBLE
            (sin solución)       |
                           rango(A) = n?
                           /         \
                         SI           NO
                         |            |
                   DETERMINADO   INDETERMINADO
                   (1 solución)  (infinitas)
```

## Sistemas Cuadrados

Para un sistema $n \times n$ (tantas ecuaciones como incógnitas):

| Condición | Tipo | Soluciones |
|-----------|------|------------|
| $\det(A) \neq 0$ | Compatible determinado | Única |
| $\det(A) = 0$, $b$ en Im$(A)$ | Compatible indeterminado | Infinitas |
| $\det(A) = 0$, $b$ no en Im$(A)$ | Incompatible | Ninguna |

## Casos Particulares

### Caso 1: Más incógnitas que ecuaciones ($n > m$)

Si el sistema es compatible, siempre es indeterminado.

**Razón:** El rango máximo es $m$, pero hay $n > m$ incógnitas, así que siempre hay variables libres.

**Ejemplo:** Una ecuación con dos incógnitas
$$x + y = 5$$
tiene infinitas soluciones: $(t, 5-t)$ para $t \in \mathbb{R}$.

### Caso 2: Más ecuaciones que incógnitas ($m > n$)

El sistema puede ser compatible o incompatible. Si es compatible, puede ser determinado.

**Ejemplo:**
$$\begin{cases} x + y = 3 \\ x - y = 1 \\ 2x + y = 5 \end{cases}$$

De las primeras dos: $x = 2$, $y = 1$.
Verificando en la tercera: $2(2) + 1 = 5$. Compatible determinado.

### Caso 3: Sistema homogéneo ($b = 0$)

Siempre es compatible (la solución trivial $x = 0$ existe).

- Si $\text{rango}(A) = n$: solo la solución trivial
- Si $\text{rango}(A) < n$: infinitas soluciones (incluyendo no triviales)

**Corolario:** Un sistema homogéneo con más incógnitas que ecuaciones ($n > m$) siempre tiene soluciones no triviales.

## Parametrización de Soluciones

Para un sistema compatible indeterminado con $k = n - \text{rango}(A)$ variables libres, el conjunto de soluciones se parametriza con $k$ parámetros:

$$x = x_p + t_1 v_1 + t_2 v_2 + \cdots + t_k v_k$$

donde:
- $x_p$ es una **solución particular** (cualquier solución específica)
- $v_1, \ldots, v_k$ forman una **base del espacio nulo** de $A$
- $t_1, \ldots, t_k \in \mathbb{R}$ son los parámetros

### Estructura del Conjunto de Soluciones

**Para sistema homogéneo $Ax = 0$:**
El conjunto de soluciones es un subespacio vectorial de $\mathbb{R}^n$ de dimensión $n - \text{rango}(A)$.

**Para sistema no homogéneo $Ax = b$:**
El conjunto de soluciones es una variedad afín (subespacio trasladado):
$$\{x_p + v : v \in \ker(A)\}$$

## Ejemplos de Clasificación

### Ejemplo 1: Sistema compatible determinado

$$\begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ 1 & 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 6 \\ 5 \\ 4 \end{pmatrix}$$

RREF:
$$\begin{pmatrix} 1 & 0 & 0 & | & 1 \\ 0 & 1 & 0 & | & 2 \\ 0 & 0 & 1 & | & 3 \end{pmatrix}$$

$\text{rango}(A) = \text{rango}([A|b]) = 3 = n$

Solución única: $(1, 2, 3)$

### Ejemplo 2: Sistema compatible indeterminado

$$\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 4 \\ 8 \end{pmatrix}$$

RREF:
$$\begin{pmatrix} 1 & 2 & 3 & | & 4 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$$

$\text{rango}(A) = \text{rango}([A|b]) = 1 < 3$

Variables libres: $y = s$, $z = t$

Solución: $(4 - 2s - 3t, s, t)$

### Ejemplo 3: Sistema incompatible

$$\begin{pmatrix} 1 & 2 \\ 2 & 4 \\ 3 & 6 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 3 \\ 7 \\ 9 \end{pmatrix}$$

RREF:
$$\begin{pmatrix} 1 & 2 & | & 3 \\ 0 & 0 & | & 1 \\ 0 & 0 & | & 0 \end{pmatrix}$$

$\text{rango}(A) = 1$, $\text{rango}([A|b]) = 2$

Fila $(0 \; 0 \; | \; 1)$ indica inconsistencia.

No hay solución.

## Teorema de Existencia y Unicidad

**Teorema:** El sistema $Ax = b$ tiene solución única si y solo si $A$ es invertible (equivalentemente, $\det(A) \neq 0$ para matrices cuadradas).

En ese caso, la solución es:
$$x = A^{-1}b$$

**Teorema (Alternativa de Fredholm):** Para una matriz cuadrada $A$:
- O $Ax = b$ tiene solución única para todo $b$
- O $Ax = 0$ tiene soluciones no triviales

No pueden ocurrir ambas cosas, ni ninguna de las dos.

## Resumen

| Condición | Clasificación | Soluciones |
|-----------|--------------|------------|
| $\text{rango}(A) \neq \text{rango}([A|b])$ | Incompatible | 0 |
| $\text{rango}(A) = \text{rango}([A|b]) = n$ | Compatible determinado | 1 |
| $\text{rango}(A) = \text{rango}([A|b]) < n$ | Compatible indeterminado | $\infty$ |

---

Con esto concluye el capítulo de Sistemas de Ecuaciones Lineales. En el siguiente capítulo estudiaremos Geometría Analítica.
