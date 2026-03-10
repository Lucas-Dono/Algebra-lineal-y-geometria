---
title: "Rango de una Matriz"
chapter: 5
section: 4
---

# Rango de una Matriz

El rango mide la "cantidad de informacion independiente" en una matriz.

## Definicion

El **rango** de una matriz $A$, denotado $\mathrm{rango}(A)$ o $\mathrm{rank}(A)$, es:

- El numero de filas no nulas en cualquier forma escalonada de $A$
- Equivalentemente: la dimension del espacio columna de $A$
- Equivalentemente: la dimension del espacio fila de $A$

## Calculo

### Metodo: Reduccion a Forma Escalonada

1. Reducir $A$ a forma escalonada (por filas)
2. Contar el numero de pivotes (filas no nulas)

**Ejemplo:**
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 1 & 1 \end{pmatrix}$$

Reduciendo:
$$\begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & -1 & -2 \end{pmatrix} \to \begin{pmatrix} 1 & 2 & 3 \\ 0 & -1 & -2 \\ 0 & 0 & 0 \end{pmatrix}$$

Hay 2 pivotes, entonces $\mathrm{rango}(A) = 2$.

## Propiedades Fundamentales

### Cotas

Para una matriz $m \times n$:
$$0 \leq \mathrm{rango}(A) \leq \min(m, n)$$

### Rango y Transpuesta

$$\mathrm{rango}(A) = \mathrm{rango}(A^T)$$

El rango fila y el rango columna son iguales.

### Rango y Operaciones

- $\mathrm{rango}(A + B) \leq \mathrm{rango}(A) + \mathrm{rango}(B)$
- $\mathrm{rango}(AB) \leq \min(\mathrm{rango}(A), \mathrm{rango}(B))$
- $\mathrm{rango}(cA) = \mathrm{rango}(A)$ para $c \neq 0$
- $\mathrm{rango}(PA) = \mathrm{rango}(AQ) = \mathrm{rango}(A)$ si $P$, $Q$ invertibles

### Teorema del Rango-Nulidad

Para una matriz $m \times n$:

$$\mathrm{rango}(A) + \mathrm{nulidad}(A) = n$$

donde $\mathrm{nulidad}(A) = \dim(\text{Nul}(A))$.

## Rango y Sistemas Lineales

Para el sistema $Ax = b$ donde $A$ es $m \times n$:

| Condicion | Interpretacion |
|-----------|----------------|
| $\mathrm{rango}(A) = \mathrm{rango}([A|b])$ | Sistema compatible |
| $\mathrm{rango}(A) < \mathrm{rango}([A|b])$ | Sistema incompatible |
| $\mathrm{rango}(A) = n$ | Si compatible, es determinado |
| $\mathrm{rango}(A) < n$ | Si compatible, es indeterminado |

## Rango Completo

Una matriz tiene **rango fila completo** si $\mathrm{rango}(A) = m$ (numero de filas).

Una matriz tiene **rango columna completo** si $\mathrm{rango}(A) = n$ (numero de columnas).

Para matriz cuadrada $n \times n$:
$$\mathrm{rango}(A) = n \iff A \text{ es invertible} \iff \det(A) \neq 0$$

## Espacio Columna y Espacio Fila

### Espacio Columna

$$\text{Col}(A) = \{A\mathbf{x} : \mathbf{x} \in \mathbb{R}^n\}$$

Es el subespacio de $\mathbb{R}^m$ generado por las columnas de $A$.

**Base:** Las columnas de $A$ correspondientes a las columnas pivote de la forma escalonada.

### Espacio Fila

$$\text{Fila}(A) = \text{Col}(A^T)$$

Es el subespacio de $\mathbb{R}^n$ generado por las filas de $A$.

**Base:** Las filas no nulas de la forma escalonada de $A$.

### Espacio Nulo

$$\text{Nul}(A) = \{\mathbf{x} : A\mathbf{x} = \mathbf{0}\}$$

**Dimension:** $n - \mathrm{rango}(A)$

## Los Cuatro Subespacios Fundamentales

Para una matriz $A$ de $m \times n$:

| Subespacio | Dimension | Espacio ambiente |
|------------|-----------|------------------|
| $\text{Col}(A)$ | $r$ | $\mathbb{R}^m$ |
| $\text{Nul}(A)$ | $n - r$ | $\mathbb{R}^n$ |
| $\text{Fila}(A)$ | $r$ | $\mathbb{R}^n$ |
| $\text{Nul}(A^T)$ | $m - r$ | $\mathbb{R}^m$ |

donde $r = \mathrm{rango}(A)$.

### Relaciones de Ortogonalidad

- $\text{Fila}(A) \perp \text{Nul}(A)$ en $\mathbb{R}^n$
- $\text{Col}(A) \perp \text{Nul}(A^T)$ en $\mathbb{R}^m$

## Aplicaciones

### Dimension de Imagen de Transformacion

Si $T: \mathbb{R}^n \to \mathbb{R}^m$ con $T(\mathbf{x}) = A\mathbf{x}$:
$$\dim(\text{Im}(T)) = \mathrm{rango}(A)$$

### Solucionabilidad de Sistemas

$Ax = b$ tiene solucion si y solo si $b \in \text{Col}(A)$.

### Numero de Soluciones Libres

El numero de parametros libres en la solucion general de $Ax = b$ es $n - \mathrm{rango}(A)$.

## Ejemplo Completo

$$A = \begin{pmatrix} 1 & 2 & 1 & 3 \\ 2 & 4 & 3 & 8 \\ 3 & 6 & 4 & 11 \end{pmatrix}$$

Reduciendo a forma escalonada:
$$\begin{pmatrix} 1 & 2 & 1 & 3 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

- $\mathrm{rango}(A) = 2$ (dos pivotes)
- $\mathrm{nulidad}(A) = 4 - 2 = 2$
- $\dim(\text{Col}(A)) = 2$
- $\dim(\text{Fila}(A)) = 2$
- Columnas pivote: 1 y 3

Base del espacio columna: $\left\{\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \begin{pmatrix} 1 \\ 3 \\ 4 \end{pmatrix}\right\}$

Base del espacio fila: $\{(1, 2, 1, 3), (0, 0, 1, 2)\}$

---

Con esto concluye el capitulo de Matrices. En el siguiente capitulo estudiaremos los Determinantes.
