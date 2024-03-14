---
id: 7c906da1-d365-49c5-a384-6bd241c66f12
title: Riemann removable singularity theorem
created: 2024-02-24T13:50:00
updated: 2024-02-26 16:28:30
author: Kapil Chaudhary
date: 2024-03-13
---
*This* theorem tells the local behaviour of a function near the isolated removable singularity.  It states that the function is analytic and bounded in the deleted neighbourhood of the removable singularity. <span style='color:var(--mk-color-green)'>***Converse of this statement is also true.***</span> If we redefine the value of the function at the point of removable singularity, then we can make the redefined function holomorphic, bounded, continuous in the neighbourhood of the removable singularity.


> [!theorem] Riemann Theorem
> 
> Let $D$ is an open subset of $\mathbb{C}$, $z_0 \in D$ and $f$ be an holomorphic function on set $D-\{z_0\}$ then following are equivalent:
> 
> 1. $z_0$ is an isolated removable singularity of $f$.
> 2. $f$ is holomorphicaly and continuously extendible over $z_0$. Further, this extendible function is unique.
> 3. $\exists$ a neighbourhood of $z_0$ where $f$ is bounded.
> 4. $\lim\limits_{z \rightarrow z_0} (z-z_0)f(z) =0$. 
> 

*Proof*: (1) → (2)

Let $z_0$ be an isolated removable singularity of $f$. Consider the function $\tilde{f}: D \rightarrow\mathbb{C}$ defined as follows:
$$\tilde{f}(z) = \begin{cases}
f(z), & z \neq z_0 \\[1em] 
\lim\limits_{z\rightarrow z_0}f(z), & z=z_0
\end{cases} $$
The extension of function $f$ is $\tilde{f}$, is holomorphic and continuous over $z_0$, and is uniquely determined. 

(2) → (3)

Since $\tilde{f}$ is holomorphic and continuous over $z_0$, so there exists a neighbourhood (say $\delta$-neighbourhood) of $z_0$ where function $\tilde{f}$ is continuous and differentiable. The set $S=\{ z \in \mathbb{C} : \lvert z-z_0\rvert \leq \delta/2 \}$ is a compact neighbourhood of $z_0$ and $\tilde{f}(S)$ is bounded. Thus, we have a neighbourhood of $z_0$ throughout which $f$ is bounded (as $\tilde{f}$ is an extension of $f$).

(3) → (4)

Since $f$ is bounded in the neighbourhood $\bar{B}(z_0, \delta/2)$ of $z_0$. Thus, $f(z) \leq M$ for some $M>0$ and for each $z \in \bar{B}(z_0, \delta/2)$. 
$$\lim\limits_{z\rightarrow z_0} \lvert (z-z_0) f(z) \rvert \leq \lim\limits_{z\rightarrow z_0} M\lvert z-z_0\rvert = 0 \implies \lim\limits_{z\rightarrow z_0} (z-z_0) f(z) =0$$

(4) → (1)
Consider a function $g: D \rightarrow \mathbb{C}$ defined as follows: 

$$ g(z) = \begin{cases} (z-z_{0})^2 f(z); & z\neq z_{0} \\[1em] 0 ; & z=z_{0} \end{cases}
$$

The function $g$ is holomorphic on $D$ with $g(z_{0}) = g'(z_{0}) = \lim\limits _{ z \to z_{0} } (z-z_{0})f(z) =0$. Thus, $g$ has a Taylor series expansion about $z_{0}$ as follows:

$$\begin{align}
g(z) &= g(z_{0}) + g'(z_{0})(z-z_{0}) + \frac{g''(z_{0})(z-z_{0})^2}{2!} + \cdots \\[1em]
&= \frac{g''(z_{0})(z-z_{0})^2}{2!} + \frac{g'''(z_{0})(z-z_{0})^3}{3!} +\frac{g''''(z_{0})(z-z_{0})^4}{4!}+ \cdots  \\
&=(z-z_{0})^2 \left\{ \frac{g''(z_{0})}{2!} + \frac{g'''(z_{0})(z-z_{0})}{3!} +\frac{g''''(z_{0})(z-z_{0})^2}{4!}+ \cdots \right\} 
\end{align} $$

This gives, for $\displaystyle z\neq z_0, f(z) = \frac{g(z)}{(z-z_0)^2}$ gives $f$ has Taylor series expansion around $z_0$ in some deleted neighbourhood of  $z_0$.

Hence, $z_0$ is a removable singularity of $f$.
$$\tag*{Q.E.D.}$$
---

**Questions**

1.  Show that $\displaystyle z=\pm \frac{\pi}{2}$ are isolated removable singularity of $\displaystyle  f(z)= \frac{\cos(z)}{z^2- \left( \frac{\pi}{2} \right)^2}$.
2. Find an entire function $g$ such that $g(z) = f(z)$ for $z\neq \pm \pi/2$

[[WIP]] 

---
**References**

1. Brown and Churchil Book (8th edition)
2. Notes on Complex analysis by J. Orloff (MIT opencourse ware)
3. NPTEL Lecture series on complex analysis
4. [Wikipedia ](https://en.wikipedia.org/wiki/Removable_singularity)