---
id: 5d37c21fd1
created: 2024-07-02 13:16:18
author: Kapil Chaudhary
title: Cauchy-Goursat Theorem
updated: 2024-07-02 13:16:18
date: 2024-07-02 13:17:45
---

> [!theorem] Green's theorem
> 
> Let $P(x,y)$ and $Q(x,y)$ be two real valued function with continuous first order partial derivative throughout a closed region $R$ consisting of all points interior to and on a simple closed curve $C$ then
>  $$ \int_{C} P\, dx  +Q \, dy = \iint_{R} (Q_{x} - P_{y}) \, dx  \, dy$$

^6ecc9c


> [!proposition] Cauchy's Theorem
> Let $C$ be a simple closed contour ${} \left\{z=z(t)\mid a\leq t\leq b\right\} {}$ in the positive sense (counterclockwise) and let $f$ be analytic at each point interior to and on $C$. <span style='color:var(--mk-color-red)'>Further, $f^\prime$ is continuous at each point interior to and on $C$</span> then $\displaystyle\int_{C} f(z) \, dz = 0.$

`\begin{proof}` We know that 

$$ \int_{C} f(z)  \, dz = \int_{a}^b f\big[z(t)\big] \, z^\prime(t) \, dt \tag{1}$$
Assume $f(z) =u(x,y)+iv(x,y) \text{ and } z(t)=x(t)+iy(t)$ then equation $\eqref{eq-1}$ can be written as follows:

$$\begin{align}
\int_{C} f(z)  \, dz &= \int_{a}^b \big[u(x,y)+iv(x,y)\big]\, \big(x^\prime(t) + i y^\prime(t)\big)  \, dt  \\[1.5em] 
&= \int_{a}^b (ux' -vy')  \, dt  + i \int_{a}^b (vx'+uy') \, dt  \\[1.5em]
&= \int_{C} (u \, dx - v\, dy)  \, + i \int_{C} (v\, dx + u \, dy) \tag{2}
\end{align}$$
**Note:** This is valid for every contour $C$, not necessarily any simple closed contour.

Using [[#^6ecc9c|Green's theorem]] on equation $\eqref{e-2}$, we get
$$\begin{align}
\int_{C} f(z)  \, dz 
&= \int_{C} (u \, dx - v\, dy)  \, + i \int_{C} (v\, dx + u \, dy) \\ &= \iint_{R} (-v_{x}-u_{y})\,dx\,dy + i \iint_{R} (u_{x}-v_{y})\,dx\,dy
\end{align}$$

**Note:** Since $f'$ is continuous at each point interior to and on $C$ then first order partial derivative of $u$ and $v$ are continuous, so Green's theorem is applicable. However, this thing is always true for analytic functions ([[Holomorphic and Meromorphic functions|Holmorphic]]), at later stage, we will see that analytic functions are infinitely differentiable and can be represented by a Taylor series. 

Using Cauchy-Riemann equations, we get $\displaystyle\int_{C} f(z) \, dz = 0.$
`\end{proof}`

