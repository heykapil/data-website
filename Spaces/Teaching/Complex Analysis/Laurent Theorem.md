---
title: Laurent Theorem
id: 10c81d1df3
author: Kapil Chaudhary
updated: 2024-03-01 15:53:33
created: 2024-03-01 15:53:33
---
[[WIP]]

This is an important theorem establishing the relation between a [[Holomorphic and Meromorphic functions | holomorphic]] function and Laurent series. 

> [!theorem] Laurent Theorem
> 
> Suppose $f$ is a [[Holomorphic and Meromorphic functions | holomorphic]]  function in annular region $\mathcal{R}$ about $z_0$ defined as $R_{1} < |z-z_{0}|< R_{2}$ and $C$ be a positive oriented contour in the region $\mathcal{R}$ then
> 
> $$f(z) = \sum^{\infty}_{n=-\infty} a_{n} (z-z_{0})^n; \hspace{2em} \text{for each } z \in \mathcal{R}$$
> 
> where the coefficients $a_n$ are given by:
> 
> $$a_{n} = \frac{1}{2 \pi i} \int_{C} \frac{f(w)}{(w-z_{0})^{n+1}}  \, dw; \hspace{2em} \text{for each } n \in \Z$$.
> 
> **Remark:** *For $n=-1$, the coefficient $\displaystyle a_{-1} = \frac{1}{2 \pi i} \int _{C} f(w) \, dw \,\,$ is called the residue of the function $f$ at $z_0$ is a very useful concept in complex analysis. Further reading: [[Residue]], [[Cauchy-Residue Theorem]]*

*Proof*: 

$$\tag*{Q.E.D.}$$


**Remark:** Like [[Taylor theorem]], the Laurent expansion of an analytic function is unique when function is analytic.