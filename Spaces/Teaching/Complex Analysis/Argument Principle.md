---
id: ef51a686bd
author: Kapil Chaudhary
title: Argument Principle
created: 2024-03-01 12:39:57
updated: 2024-03-01 12:39:57
---
This principle is the consequence of the [[Cauchy-Residue Theorem]]. It connects the [[Winding number]] of a curve with the number of zeros and poles inside the curve. It has some useful applications in the form of Rouche's theorem to find the location of the zeroes and poles of a function inside the curve.

```ad-lemma
title: Lemma
Let $f$ be a meromorphic function and $z_0$ be a zero of order $m$ of $f$ and $p_0$ be a pole of order $n$ of $f$ then the function $\displaystyle \frac{f'}{f}$ has simple poles at $z_0$ and $p_0$ with residue $m$ and $-n$ respectively.
```

*Proof*: We are given $z_0$ is zero of order $m$ of function $f$ then $f$ has the following representation $f(z)=(z-z_0)^m g(z)$ where $g(z_0) \neq 0$ and $g$ is holomorphic which gives $\displaystyle \frac{f'(z)}{f(z)} = \frac{m}{z-z_{0}}+ \frac{g'(z)}{g(z)}$.

Clearly $\displaystyle \lim_{z \rightarrow z_{0}} \frac{f'(z)}{f(z)} = \infty$ and $\displaystyle \lim_{z\to z_0} (z-z_{0}) \frac{f'(z)}{f(z)} = m$. That means, $z_0$ is a simple pole of $f'/f$ with residue $m$.

In similar way, $p_0$ is the pole of order $n$ of function $f$ then $f$ has the following representation 
$\displaystyle f(z)=\frac{h(z)}{(z-p_{0})^n}$ where $h$ is holomorphic with $h(p_0)\neq 0$ which gives $\displaystyle \frac{f'(z)}{f(z)} = \frac{-n}{z-p_{0}}+ \frac{g'(z)}{g(z)}$.

Clearly $\displaystyle \lim_{z \rightarrow p_{0}} \frac{f'(z)}{f(z)} = \infty$ and $\displaystyle \lim_{z\to p_0} (z-p_{0}) \frac{f'(z)}{f(z)} = -n$. That means, $z_0$ is a simple pole of $f'/f$ with residue $-n$.
$$\tag*{Q.E.D.}$$


```ad-theorem
title: Argument principle
Let $U$ be an simply connected open set in $\C$ containing finite number of points $z_1,z_2,z_3, \cdots z_n, p_1,p_2,p_3, \cdots, p_m$. Let $U_0 = U - \{p_1,p_2,p_3, \cdots  p_m \}$ and $U_1= U_{0}- \{ z_1,z_2,z_3, \cdots z_n \}$. Consider $f$ be a [[Holomorphic and Meromorphic functions | meromorphic]]  function on $U_0$ with zeroes (counted with multiplicity) at each point of $U_1-U_0$ and pole (counted with multiplicity) at each point of $U-U_0$. Let $C$ be closed rectifible curve inside $U_1$ then 

$$ \eta(f\circ C, 0) = \frac{1}{2 \pi i} \int_{C} \frac{f'(z)}{f(z)} dz  = \sum_{i=1}^n \eta(C, z_{i}) - \sum^{m}_{j=1} \eta(C, p_{j})$$
where $\eta(C,a)$ denotes the winding number of curve $C$ about point $a$.

**Remark:** *If $C$ is simple closed curve with each $z_i$ and $p_j$ being inside $C$ then the above integral reduces to*

$$ \frac{1}{2 \pi i} \oint_{C} \frac{f'(z)}{f(z)} dz = Z_{f, C} - P_{f,C}$$ 
*where $Z_{f,C}$ and $P_{f,C}$ denotes the number of zeroes and number of poles of $f$ counted with multiplicity inside $C$ respectively.*
```

*Proof*: Using the definition of the [[Winding number]], $$\eta(f\circ C, 0) = \frac{1}{2 \pi i} \int _{f\circ C} \frac{dw}{w-0}$$ where $w\in f\circ C \implies w=f(z)$ where $z \in C$. The transformation $w=f(z)$ gives $\displaystyle \frac{dw}{w} = \frac{f'(z)}{f(z)}dz$.
$$\eta(f\circ C, 0) = \frac{1}{2 \pi i} \int _{f\circ C} \frac{dw}{w} =\frac{1}{2 \pi i} \int _{ C} \frac{f'(z)}{f(z)}dz  $$
We will use the above lemma and [[Cauchy-Residue Theorem]] for proving this principle.
Given that $z_i's$ and $p_j$'s are the zeroes and poles of $f$ counted with multiplicities then each $z_i$ and $p_j$ is a simple pole of $f'/f$, with residue order of zero and negative of order of pole respectively.

Using [[Cauchy-Residue Theorem]] 
$$\frac{1}{2 \pi i} \int _{ C} \frac{f'(z)}{f(z)}dz  = \sum_{i=1}^n \text{Res}\left( \frac{f'(z)}{f(z)} , z_{i}\right) +  \sum_{j=1}^m \text{Res}\left( \frac{f'(z)}{f(z)} , p_{j}\right) $$
As


$$\tag*{Q.E.D.}$$
```ad-theorem
title: Generalised Argument principle
Suppose $g$ is [[Holomorphic and Meromorphic functions | holomorphic]] inside $U$. Let $f$ and $C$ be same as stated above in the [[Argument Principle]] then

$$\frac{1}{2 \pi i}\oint_{C} \frac{f'(z)}{f(z)} g(z) dz =  \sum_{i=1}^n \eta(C, z_{i}) g(z_{i}) - \sum^{m}_{j=1} \eta(C, p_{j}) g(p_{j})$$
```