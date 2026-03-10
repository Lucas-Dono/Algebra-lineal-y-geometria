---
title: "Aplicaciones Geometricas"
chapter: 6
section: 4
---

# Aplicaciones Geometricas de los Determinantes

Los determinantes tienen interpretaciones geometricas profundas relacionadas con areas, volumenes y orientacion.

## Area de un Paralelogramo

Dados dos vectores $\mathbf{u} = (u_1, u_2)$ y $\mathbf{v} = (v_1, v_2)$ en $\mathbb{R}^2$, el area del paralelogramo que forman es:

$$\text{Area} = \left| \det \begin{pmatrix} u_1 & v_1 \\ u_2 & v_2 \end{pmatrix} \right| = |u_1 v_2 - u_2 v_1|$$

### Ejemplo

Vectores $\mathbf{u} = (3, 1)$ y $\mathbf{v} = (1, 4)$:

$$\text{Area} = |3(4) - 1(1)| = |12 - 1| = 11$$

## Area de un Triangulo

El area de un triangulo con vertices $P_1 = (x_1, y_1)$, $P_2 = (x_2, y_2)$, $P_3 = (x_3, y_3)$ es:

$$\text{Area} = \frac{1}{2} \left| \det \begin{pmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{pmatrix} \right|$$

O equivalentemente, usando vectores desde $P_1$:

$$\text{Area} = \frac{1}{2} \left| \det \begin{pmatrix} x_2 - x_1 & x_3 - x_1 \\ y_2 - y_1 & y_3 - y_1 \end{pmatrix} \right|$$

### Ejemplo

Triangulo con vertices $(0, 0)$, $(4, 0)$, $(2, 3)$:

$$\text{Area} = \frac{1}{2} \left| \det \begin{pmatrix} 0 & 0 & 1 \\ 4 & 0 & 1 \\ 2 & 3 & 1 \end{pmatrix} \right|$$

Expandiendo por la segunda columna:

$$= \frac{1}{2} |0 - 0 + 3(0 - 4)| = \frac{1}{2} |-12| = 6$$

## Volumen de un Paralelepipedo

Dados tres vectores $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ en $\mathbb{R}^3$, el volumen del paralelepipedo es:

$$\text{Volumen} = |\det([\mathbf{u} \; \mathbf{v} \; \mathbf{w}])|$$

donde las columnas de la matriz son los vectores.

Esto es igual al valor absoluto del **producto triple escalar**:

$$\text{Volumen} = |\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w})|$$

### Ejemplo

Vectores $\mathbf{u} = (1, 0, 0)$, $\mathbf{v} = (0, 2, 0)$, $\mathbf{w} = (0, 0, 3)$:

$$\text{Volumen} = \left| \det \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix} \right| = |1 \cdot 2 \cdot 3| = 6$$

## Volumen de un Tetraedro

El volumen de un tetraedro con vertices $P_1$, $P_2$, $P_3$, $P_4$ es:

$$\text{Volumen} = \frac{1}{6} \left| \det \begin{pmatrix} x_2-x_1 & x_3-x_1 & x_4-x_1 \\ y_2-y_1 & y_3-y_1 & y_4-y_1 \\ z_2-z_1 & z_3-z_1 & z_4-z_1 \end{pmatrix} \right|$$

## Colinealidad y Coplanaridad

### Tres Puntos Colineales

Tres puntos $P_1$, $P_2$, $P_3$ son colineales si y solo si:

$$\det \begin{pmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{pmatrix} = 0$$

**Interpretacion:** El area del triangulo que forman es cero.

### Cuatro Puntos Coplanares

Cuatro puntos son coplanares si y solo si el volumen del tetraedro es cero:

$$\det \begin{pmatrix} x_1 & y_1 & z_1 & 1 \\ x_2 & y_2 & z_2 & 1 \\ x_3 & y_3 & z_3 & 1 \\ x_4 & y_4 & z_4 & 1 \end{pmatrix} = 0$$

## Ecuacion de una Recta

La recta que pasa por $(x_1, y_1)$ y $(x_2, y_2)$ tiene ecuacion:

$$\det \begin{pmatrix} x & y & 1 \\ x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \end{pmatrix} = 0$$

Expandiendo, esto da la ecuacion de la recta en forma implicita.

## Ecuacion de un Plano

El plano que pasa por $P_1$, $P_2$, $P_3$ tiene ecuacion:

$$\det \begin{pmatrix} x - x_1 & y - y_1 & z - z_1 \\ x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ x_3 - x_1 & y_3 - y_1 & z_3 - z_1 \end{pmatrix} = 0$$

## Orientacion

El signo del determinante indica la **orientacion**:

### En 2D

$$\det \begin{pmatrix} u_1 & v_1 \\ u_2 & v_2 \end{pmatrix} \begin{cases} > 0 & \text{sentido antihorario de } \mathbf{u} \text{ a } \mathbf{v} \\ < 0 & \text{sentido horario de } \mathbf{u} \text{ a } \mathbf{v} \\ = 0 & \text{vectores paralelos} \end{cases}$$

### En 3D

El signo del producto triple indica si el sistema es dextrogiro (regla de la mano derecha) o levogiro.

## Factor de Escala de Transformaciones

Si $T: \mathbb{R}^n \to \mathbb{R}^n$ es una transformacion lineal con matriz $A$:

$$\text{Volumen}(T(S)) = |\det(A)| \cdot \text{Volumen}(S)$$

para cualquier region $S$.

### Ejemplo

La transformacion con matriz $A = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ tiene $\det(A) = 6$.

Un cuadrado de lado 1 (area 1) se transforma en un rectangulo de area 6.

## Producto Cruz como Determinante

El producto cruz en $\mathbb{R}^3$ se puede expresar como:

$$\mathbf{u} \times \mathbf{v} = \det \begin{pmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{pmatrix}$$

donde $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ son los vectores unitarios.

Expandiendo:
$$\mathbf{u} \times \mathbf{v} = (u_2v_3 - u_3v_2)\mathbf{i} - (u_1v_3 - u_3v_1)\mathbf{j} + (u_1v_2 - u_2v_1)\mathbf{k}$$

## Resumen de Formulas Geometricas

| Objeto | Formula |
|--------|---------|
| Area paralelogramo (2D) | $|\det[\mathbf{u}, \mathbf{v}]|$ |
| Area triangulo (2D) | $\frac{1}{2}|\det[\mathbf{u}, \mathbf{v}]|$ |
| Volumen paralelepipedo (3D) | $|\det[\mathbf{u}, \mathbf{v}, \mathbf{w}]|$ |
| Volumen tetraedro (3D) | $\frac{1}{6}|\det[\mathbf{u}, \mathbf{v}, \mathbf{w}]|$ |
| Colinealidad | $\det = 0$ |
| Coplanaridad | $\det = 0$ |

---

Con esto concluye el capitulo de Determinantes. En el siguiente capitulo estudiaremos las Transformaciones Lineales.
