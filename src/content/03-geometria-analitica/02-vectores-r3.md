---
title: "Vectores en R3"
chapter: 3
section: 2
---

# Vectores en el Espacio

Los vectores en $\mathbb{R}^3$ extienden naturalmente los conceptos de $\mathbb{R}^2$, pero incluyen una operacion nueva y exclusiva: el **producto cruz**.

## Definicion

Un vector en $\mathbb{R}^3$ es una terna ordenada:

$$\mathbf{v} = (v_1, v_2, v_3) = \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix}$$

## Operaciones Basicas

### Suma y Resta

$$(u_1, u_2, u_3) + (v_1, v_2, v_3) = (u_1 + v_1, u_2 + v_2, u_3 + v_3)$$

### Producto por Escalar

$$c(v_1, v_2, v_3) = (cv_1, cv_2, cv_3)$$

### Vectores Canonicos

$$\mathbf{e}_1 = (1, 0, 0), \quad \mathbf{e}_2 = (0, 1, 0), \quad \mathbf{e}_3 = (0, 0, 1)$$

Tambien escritos como $\mathbf{i}, \mathbf{j}, \mathbf{k}$.

Todo vector: $\mathbf{v} = v_1\mathbf{i} + v_2\mathbf{j} + v_3\mathbf{k}$

## Norma

$$\|\mathbf{v}\| = \sqrt{v_1^2 + v_2^2 + v_3^2}$$

**Ejemplo:**
$\|(2, 3, 6)\| = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$

## Producto Punto

$$\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + u_3v_3$$

Sigue valiendo:
$$\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos\theta$$

**Ejemplo:**
$(1, 2, 3) \cdot (4, -1, 2) = 4 - 2 + 6 = 8$

## Producto Cruz (Producto Vectorial)

El **producto cruz** es exclusivo de $\mathbb{R}^3$. Dados:

$$\mathbf{u} = (u_1, u_2, u_3), \quad \mathbf{v} = (v_1, v_2, v_3)$$

El producto cruz es:

$$\mathbf{u} \times \mathbf{v} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{vmatrix}$$

Expandiendo:

$$\mathbf{u} \times \mathbf{v} = (u_2v_3 - u_3v_2, u_3v_1 - u_1v_3, u_1v_2 - u_2v_1)$$

### Ejemplo de Calculo

Calcular $(1, 2, 3) \times (4, 5, 6)$

$$\mathbf{u} \times \mathbf{v} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 2 & 3 \\ 4 & 5 & 6 \end{vmatrix}$$

$$= \mathbf{i}(2 \cdot 6 - 3 \cdot 5) - \mathbf{j}(1 \cdot 6 - 3 \cdot 4) + \mathbf{k}(1 \cdot 5 - 2 \cdot 4)$$

$$= \mathbf{i}(12 - 15) - \mathbf{j}(6 - 12) + \mathbf{k}(5 - 8)$$

$$= -3\mathbf{i} + 6\mathbf{j} - 3\mathbf{k} = (-3, 6, -3)$$

### Propiedades del Producto Cruz

1. **Anticonmutativo:** $\mathbf{u} \times \mathbf{v} = -(\mathbf{v} \times \mathbf{u})$
2. **NO asociativo:** $(\mathbf{u} \times \mathbf{v}) \times \mathbf{w} \neq \mathbf{u} \times (\mathbf{v} \times \mathbf{w})$ en general
3. **Distributivo:** $\mathbf{u} \times (\mathbf{v} + \mathbf{w}) = \mathbf{u} \times \mathbf{v} + \mathbf{u} \times \mathbf{w}$
4. $(c\mathbf{u}) \times \mathbf{v} = c(\mathbf{u} \times \mathbf{v}) = \mathbf{u} \times (c\mathbf{v})$
5. $\mathbf{u} \times \mathbf{u} = \mathbf{0}$
6. $\mathbf{u} \times \mathbf{0} = \mathbf{0}$

### Productos Cruz de Vectores Canonicos

$$\mathbf{i} \times \mathbf{j} = \mathbf{k}, \quad \mathbf{j} \times \mathbf{k} = \mathbf{i}, \quad \mathbf{k} \times \mathbf{i} = \mathbf{j}$$

$$\mathbf{j} \times \mathbf{i} = -\mathbf{k}, \quad \mathbf{k} \times \mathbf{j} = -\mathbf{i}, \quad \mathbf{i} \times \mathbf{k} = -\mathbf{j}$$

Regla nemotecnica: orden ciclico $\mathbf{i} \to \mathbf{j} \to \mathbf{k} \to \mathbf{i}$ da signo positivo.

## Propiedades Geometricas del Producto Cruz

### Perpendicularidad

$\mathbf{u} \times \mathbf{v}$ es perpendicular tanto a $\mathbf{u}$ como a $\mathbf{v}$:

$$\mathbf{u} \cdot (\mathbf{u} \times \mathbf{v}) = 0$$
$$\mathbf{v} \cdot (\mathbf{u} \times \mathbf{v}) = 0$$

### Magnitud

$$\|\mathbf{u} \times \mathbf{v}\| = \|\mathbf{u}\| \|\mathbf{v}\| \sin\theta$$

donde $\theta$ es el angulo entre los vectores.

Esta magnitud es igual al **area del paralelogramo** formado por $\mathbf{u}$ y $\mathbf{v}$.

### Regla de la Mano Derecha

La direccion de $\mathbf{u} \times \mathbf{v}$: si los dedos de la mano derecha van de $\mathbf{u}$ hacia $\mathbf{v}$, el pulgar apunta en la direccion del producto cruz.

## Area del Triangulo

El area del triangulo con vertices $A$, $B$, $C$ es:

$$\text{Area} = \frac{1}{2}\|\overrightarrow{AB} \times \overrightarrow{AC}\|$$

**Ejemplo:** Triangulo con vertices $A = (1, 0, 0)$, $B = (0, 1, 0)$, $C = (0, 0, 1)$

$\overrightarrow{AB} = (-1, 1, 0)$
$\overrightarrow{AC} = (-1, 0, 1)$

$$\overrightarrow{AB} \times \overrightarrow{AC} = (1 \cdot 1 - 0 \cdot 0, 0 \cdot (-1) - (-1) \cdot 1, (-1) \cdot 0 - 1 \cdot (-1))$$
$$= (1, 1, 1)$$

$$\text{Area} = \frac{1}{2}\|(1, 1, 1)\| = \frac{1}{2}\sqrt{3} = \frac{\sqrt{3}}{2}$$

## Producto Triple Escalar

El **producto triple escalar** es:

$$\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) = \begin{vmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \end{vmatrix}$$

### Interpretacion Geometrica

El valor absoluto del producto triple escalar es igual al **volumen del paralelepipedo** formado por los tres vectores.

Si el producto triple es cero, los tres vectores son **coplanares** (estan en el mismo plano).

**Ejemplo:** Calcular el volumen del paralelepipedo con aristas $\mathbf{u} = (1, 0, 0)$, $\mathbf{v} = (0, 2, 0)$, $\mathbf{w} = (0, 0, 3)$

$$\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) = \begin{vmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{vmatrix} = 6$$

Volumen = $|6| = 6$

## Vectores Paralelos

Dos vectores son **paralelos** si uno es multiplo escalar del otro:

$$\mathbf{u} \parallel \mathbf{v} \iff \mathbf{u} = c\mathbf{v} \text{ para algun } c$$

Equivalentemente:
$$\mathbf{u} \parallel \mathbf{v} \iff \mathbf{u} \times \mathbf{v} = \mathbf{0}$$

## Resumen de Productos

| Operacion | Resultado | Formula geometrica |
|-----------|-----------|-------------------|
| Producto punto | Escalar | $\|\mathbf{u}\|\|\mathbf{v}\|\cos\theta$ |
| Producto cruz | Vector | $\|\mathbf{u}\|\|\mathbf{v}\|\sin\theta \cdot \mathbf{n}$ |
| Triple escalar | Escalar | Volumen (con signo) |

donde $\mathbf{n}$ es el vector unitario perpendicular segun la regla de la mano derecha.

---

En la siguiente seccion estudiaremos las ecuaciones de rectas y planos en el espacio.
