---
title: "Método de Gauss-Jordan"
chapter: 2
section: 2
---

# Método de Gauss-Jordan

El método de Gauss-Jordan extiende la eliminación gaussiana para obtener una forma aún más simple, donde la solución se puede leer directamente sin necesidad de sustitución hacia atrás.

## Forma Escalonada Reducida por Filas

Una matriz está en **forma escalonada reducida por filas** (RREF, por sus siglas en inglés) si:

1. Está en forma escalonada
2. Cada pivote es igual a 1
3. Cada pivote es el único elemento no nulo en su columna

**Ejemplo:**
$$\begin{pmatrix} \boxed{1} & 0 & 0 & 2 & | & 5 \\ 0 & \boxed{1} & 0 & -1 & | & 3 \\ 0 & 0 & \boxed{1} & 3 & | & 1 \\ 0 & 0 & 0 & 0 & | & 0 \end{pmatrix}$$

De aquí se lee directamente:
- $x_1 + 2x_4 = 5$
- $x_2 - x_4 = 3$
- $x_3 + 3x_4 = 1$

Con $x_4 = t$ libre: $(x_1, x_2, x_3, x_4) = (5 - 2t, 3 + t, 1 - 3t, t)$

## Unicidad de la RREF

**Teorema:** Cada matriz tiene una única forma escalonada reducida por filas.

Esto significa que sin importar el orden de las operaciones, siempre llegamos a la misma RREF.

## El Algoritmo de Gauss-Jordan

### Fase 1: Eliminación hacia adelante (igual que Gauss)
Reducir a forma escalonada creando ceros debajo de los pivotes.

### Fase 2: Normalización de pivotes
Dividir cada fila por su pivote para que todos los pivotes sean 1.

### Fase 3: Eliminación hacia atrás
Crear ceros arriba de cada pivote, trabajando de abajo hacia arriba.

## Ejemplo Completo

Reducir a RREF:
$$\begin{pmatrix} 0 & 2 & 3 & | & 1 \\ 2 & 4 & 5 & | & 3 \\ 4 & 6 & 7 & | & 5 \end{pmatrix}$$

**Paso 1:** Intercambiar para obtener pivote no nulo.

$F_1 \leftrightarrow F_2$:
$$\begin{pmatrix} 2 & 4 & 5 & | & 3 \\ 0 & 2 & 3 & | & 1 \\ 4 & 6 & 7 & | & 5 \end{pmatrix}$$

**Paso 2:** Eliminar debajo del primer pivote.

$F_3 \to F_3 - 2F_1$:
$$\begin{pmatrix} 2 & 4 & 5 & | & 3 \\ 0 & 2 & 3 & | & 1 \\ 0 & -2 & -3 & | & -1 \end{pmatrix}$$

**Paso 3:** Eliminar debajo del segundo pivote.

$F_3 \to F_3 + F_2$:
$$\begin{pmatrix} 2 & 4 & 5 & | & 3 \\ 0 & 2 & 3 & | & 1 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$$

**Paso 4:** Normalizar pivotes.

$F_1 \to \frac{1}{2}F_1$:
$$\begin{pmatrix} 1 & 2 & \frac{5}{2} & | & \frac{3}{2} \\ 0 & 2 & 3 & | & 1 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$$

$F_2 \to \frac{1}{2}F_2$:
$$\begin{pmatrix} 1 & 2 & \frac{5}{2} & | & \frac{3}{2} \\ 0 & 1 & \frac{3}{2} & | & \frac{1}{2} \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$$

**Paso 5:** Eliminar arriba del segundo pivote.

$F_1 \to F_1 - 2F_2$:
$$\begin{pmatrix} 1 & 0 & -\frac{1}{2} & | & \frac{1}{2} \\ 0 & 1 & \frac{3}{2} & | & \frac{1}{2} \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$$

**RREF alcanzada.**

**Interpretación:**
- Variables pivote: $x_1$, $x_2$
- Variable libre: $x_3 = t$

Del sistema:
- $x_1 - \frac{1}{2}x_3 = \frac{1}{2} \Rightarrow x_1 = \frac{1}{2} + \frac{1}{2}t$
- $x_2 + \frac{3}{2}x_3 = \frac{1}{2} \Rightarrow x_2 = \frac{1}{2} - \frac{3}{2}t$

**Solución general:** $\left(\frac{1}{2} + \frac{1}{2}t, \frac{1}{2} - \frac{3}{2}t, t\right)$

O en forma vectorial:
$$\begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 1/2 \\ 1/2 \\ 0 \end{pmatrix} + t\begin{pmatrix} 1/2 \\ -3/2 \\ 1 \end{pmatrix}$$

## Comparación: Gauss vs Gauss-Jordan

| Aspecto | Gauss | Gauss-Jordan |
|---------|-------|--------------|
| Resultado | Forma escalonada | Forma escalonada reducida |
| Lectura de solución | Requiere sustitución | Directa |
| Operaciones | $\sim \frac{n^3}{3}$ | $\sim \frac{n^3}{2}$ |
| Mejor para | Resolver un sistema | Calcular inversa, bases |

## Aplicación: Cálculo de la Matriz Inversa

Para encontrar $A^{-1}$ de una matriz $n \times n$ invertible:

1. Formar la matriz aumentada $[A | I_n]$
2. Reducir a RREF
3. Si se obtiene $[I_n | B]$, entonces $B = A^{-1}$

**Ejemplo:** Encontrar la inversa de $A = \begin{pmatrix} 1 & 2 \\ 3 & 7 \end{pmatrix}$

$$[A|I] = \begin{pmatrix} 1 & 2 & | & 1 & 0 \\ 3 & 7 & | & 0 & 1 \end{pmatrix}$$

$F_2 \to F_2 - 3F_1$:
$$\begin{pmatrix} 1 & 2 & | & 1 & 0 \\ 0 & 1 & | & -3 & 1 \end{pmatrix}$$

$F_1 \to F_1 - 2F_2$:
$$\begin{pmatrix} 1 & 0 & | & 7 & -2 \\ 0 & 1 & | & -3 & 1 \end{pmatrix}$$

Por lo tanto: $A^{-1} = \begin{pmatrix} 7 & -2 \\ -3 & 1 \end{pmatrix}$

**Verificación:** $AA^{-1} = \begin{pmatrix} 1 & 2 \\ 3 & 7 \end{pmatrix}\begin{pmatrix} 7 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$

## Rango y Nulidad

De la RREF se pueden determinar:

- **Rango** de $A$ = número de pivotes = número de filas no nulas
- **Nulidad** de $A$ = número de variables libres = $n - \text{rango}$

**Teorema del Rango-Nulidad:**
$$\text{rango}(A) + \text{nulidad}(A) = n$$

donde $n$ es el número de columnas de $A$.

## Solución de Sistemas Homogéneos

Para $Ax = 0$:

1. Reducir $A$ a RREF
2. Identificar variables libres
3. Expresar variables pivote en términos de las libres
4. Escribir la solución general como combinación lineal

**Ejemplo:**
$$A = \begin{pmatrix} 1 & 2 & 1 & 3 \\ 2 & 4 & 3 & 8 \end{pmatrix}$$

RREF:
$$\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 2 \end{pmatrix}$$

Variables libres: $x_2 = s$, $x_4 = t$

Del sistema:
- $x_1 + 2x_2 + x_4 = 0 \Rightarrow x_1 = -2s - t$
- $x_3 + 2x_4 = 0 \Rightarrow x_3 = -2t$

Solución general:
$$\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = s\begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} + t\begin{pmatrix} -1 \\ 0 \\ -2 \\ 1 \end{pmatrix}$$

El espacio nulo de $A$ tiene dimensión 2 (dos variables libres).

---

## Videos Recomendados

import VideoEmbed from '../../components/content/VideoEmbed.astro';

<VideoEmbed
  youtubeId="dFmGzr1j6eY"
  title="Solución de sistemas 3x3 por Gauss-Jordan - Matemáticas profe Alex"
/>

---

En la siguiente sección estudiaremos la clasificación completa de los sistemas lineales según su solubilidad.
