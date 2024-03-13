---
id: 03ac88777f
title: Cauchy-Residue Theorem
created: 2024-02-24 14:18:14
updated: 2024-02-25 21:49:48
author: Kapil Chaudhary
---
This theorem establishes a relation between the integral of a function over a contour and its residue at the singularity inside the contour. The residue is a complex number that characterises the behaviour of the function near the singularity. The theorem states that the integral of the function around the contour is equal to 2πi times the sum of the residues of the function at the singularities inside the contour. This theorem is a fundamental tool in complex analysis and has applications in many areas of mathematics and physics.

> [!theorem] **Cauchy's Residue Theorem**
> 
> 
> Let $f(z)$ be a function that is analytic inside and on a simple closed contour $C$. Then, the integral of $f(z)$ around $C$ is equal to $2\pi i$ times the sum of the residues of $f(z)$ at its singularities inside $C$.

*Proof:*
Let $z_1, z_2, \ldots, z_n$ be the singularities of $f(z)$ inside $C$. We can construct a set of $n$ small circles $C_1, C_2, \ldots, C_n$ around each singularity, such that the circles are disjoint and lie entirely inside $C$.

![450](_attachments/Screenshot%202024-02-28%20at%201.39.26%20PM.png)

Using the Cauchy Integral Formula, we have:

$$\int_C f(z) dz = \int_{C-C_1-\cdots-C_n} f(z) dz + \sum_{k=1}^n \int_{C_k} f(z) dz$$

The integral over $C-C_1-\cdots-C_n$ is analytic, so it is equal to zero by Cauchy's Integral Theorem.

For each circle $C_k$, we can choose a point $z_k$ inside the circle such that $f(z)$ has a singularity at $z_k$. Then, the integral over $C_k$ is equal to $2\pi i$ times the residue of $f(z)$ at $z_k$.

Therefore, we have:

$$\int_C f(z) dz = \sum_{k=1}^n 2\pi i \operatorname{Res}(f(z), z_k)$$

which proves the Cauchy Residue Theorem.

$$\tag*{Q.E.D.}$$


***Advanced Version:***

> [!theorem] Cauchy-Residue theorem
> Let $U$ be a simply connected open subset of $\C$ containing finite number of points $z_1, z_2, z_3, \cdots z_n$, and $U_0 = U-\{z_1, z_2, z_3, \cdots z_n\}$. Assume $f$ be a holomorphic function on $U_0$ and $C$ be a closed rectifible curve in $U_0$ then
> 
> $ \frac{1}{2 \pi i} \oint_{C} f(z)dz = \sum_{k=1}^n \eta(C, z_{k}) \text{ Res}(f,z_{k})     $
> 
> where $\text{ Res}(f,z_{k})$ denotes residue of $f$ at $z_k$ and $\eta(C, z_{k})$ denotes the winding number of $C$ about $z_{k}$.
> 
> **Remark:** *whenever $C$ is a simple closed curve then the winding number $\eta(C, z_{k}) =1$ for each $k=1,2, \cdots n$ and this theorem reduces to previous one.*

*Proof*: Since $z_1, z_2, z_3, \cdots, z_n$ are finitely many points in the simply connected open subset of $\C$ then there exists pairwise disjoint open subsets $\{U_{1},U_{2},U_{3}, \cdots , U_{n} \}$ of $U$ such that $z_i \in U_i$ and $U_i  \cap U_{j} = \phi$ for each $i,j \in 1(1)n.$ 

By [[Laurent Theorem]], there exist Laurent series representation of $f$ centred around each $z_i$ valid in each $U_i$,

$$f(z) = \sum^{\infty}_{j=-\infty}c_{j}(z-z_{i})^j; \hspace{2em} \text{for each }  z\in U_{i} -\{z_{i}\}.$$
Consider the set $X= \cup_{i=1}^{n} U_i$ then by contour integration,

$$\int_{C} f(z) \, dz  = \int_{\delta(U-X)} f(z) \, dz + \sum^{n}_{k=1} \int _{\delta U_{k}} f(z)\, dz.    $$
As all poles of $f$ are contained in $X$. $f$ is holomorphic in $U-X$, so using [[Cauchy-Goursat theorem]]
$$\int_{\delta(U-X)} f(z) =0$$
giving 
$$\begin{align}
\int_{C} f(z) \, dz  &=  \sum^{n}_{k=1} \int _{\delta U_{k}} f(z)\, dz.    \\[1em]
&= \sum^{n}_{k=1} \int _{\delta U_{k}} \left( \sum_{j=-\infty}^{\infty} c_{j}(z-z_{k})^j\right) dz  \\[1em]
%% &. \text{By Countour integral of powers, terms except } j\neq -1 \text{ vanishes} \\[1em] %%
&= \sum^{n}_{k=1} \int _{\delta U_{k}}  \frac{c_{-1}}{z-z_{k}} dz \\[1em] 
&= \sum^{n}_{k=1} \text{Res}(f,z_{k}) \int _{\delta U_{k}} \frac{1}{z-z_{k}}  dz  \\[1em]
&= 2 \pi i\sum^{n}_{k=1} \eta(C,z_{k} ) \, \text{Res}(f,z_{k}) \end{align}$$

$$\tag*{Q.E.D.}$$

---


**Remark:** *The Cauchy-integral formula is considered to be the special case of the [[Cauchy-Residue Theorem]] as well.* 

The Cauchy integral formula says: *Let $C$ be simple closed positive oriented curve, $f$ is analytic on and inside $C$ then$\displaystyle \frac{1}{2\pi i}\int_C \frac{f(z)}{z-z_0}dz = f(z_0)$*. The function $f(z)/(z-z_0)$ has simple pole at $z_0$ with residue $f(z_0)$.

Further, Cauchy's residue theorem says: $\displaystyle \frac{1}{2\pi i}\int_C \frac{f(z)}{z-z_0}dz = \text{Res}\left(\frac{f(z)}{z-z_0}, z_0 \right) = f(z_0)$. 
We get same result from both theorems.
The condition $f$ is analytic on $C$ can be relaxed, it is enough to consider $f$ is analytic interior to $C$.  Hence, Cauchy's integral formula can be viewed as special case of residue theorem.
