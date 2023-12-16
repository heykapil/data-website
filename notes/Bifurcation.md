---
tags:
  - type/note
aliases: 
visual: "![[image.jpg]]"
created: 2023-10-01, 20:58
modified: 2023-10-01, 20:58
template-type: Note
template-version: "1.10"
updated: 2023-12-02T12:53
title: Bifurcation
---

> [!dyk] Do you know
> The name _bifurcation_ was first introduced by [Henri Poincaré](https://en.wikipedia.org/wiki/Henri_Poincar%C3%A9 "Henri Poincaré") in 1885 in the first paper in mathematics showing such a behaviour.

## Bifurcation

> [!def]
> A bifurcation occurs in a nonlinear differential equation when a small change in a parameter results in a qualitative change in the long-time solution. Examples of bifurcations are when fixed points are created or destroyed, or change their stability.

A vector field (or phase plane) is structurally stable if for small changes (or perturbations) of the system parameters, qualitatively similar behaviour is observed. If changes in a parameter of the system result in a structurally different phase plane (e.g., a change from stable to unstable solutions), then the system may undergo the phenomenon of bifurcation, and the parameter is called a bifurcation parameter.

Bifurcations occur in both continuous systems (described by [ordinary](https://en.wikipedia.org/wiki/Ordinary_differential_equation "Ordinary differential equation"), [delay](https://en.wikipedia.org/wiki/Delay_differential_equation "Delay differential equation") or [partial](https://en.wikipedia.org/wiki/Partial_differential_equation "Partial differential equation") differential equations) and discrete systems (described by maps).

In this chapter, we also discuss several types of bifurcations, saddle node, transcritical, pitchfork and Hopf bifurcation. Among these types, we especially focus on Hopf bifurcation. The first three types of bifurcation occur in scalar and in systems of differential equations. The fourth type called Hopf bifurcation does not occur in scalar differential equations because this type of bifurcation involves a change to a periodic solution. Scalar autonomous differential equations can not have periodic solutions. Hopf bifurcation occurs in systems of differential equations consisting of two or more equations. This type is also referred to as a ”Poincare-Andronov-Hopf bifurcation”.


The system is said to undergo a Hopf bifurcation when an equilibrium point switches the stability along-with creation or destruction of certain periodic orbits. For the integer order system, this is known to occur when equilibrium has pair of eigenvalues that cross the imaginary axis at non-zero speed. Due to the changed stability criteria for fractional systems, it is quite natural to frame the existence criteria for the fractional Hopf bifurcation as follows.

> [!tip] Existence Criterion for Hopf bifurcation
> Consider the system $D^{\alpha} x(t) = f_{\mu}(x),\,\,\, x(0) = x_{0} \in \R^n$, together with bifurcation parameter $\mu$ and $\alpha$ as fractional order between 0 and 1. Let $e_{\mu}$ be the equilibrium point of system and there exists at least one pair of complex conjugate eigenvalues (say $\lambda_{1}, \lambda_{2}$) of corresponding linearised system matrix. We say fractional order system goes under fractional hopf bifurcation if :
>
> $\exists$ a critical value ($\mu_h$)of bifurcation parameter($\mu$) such that following conditions holds:
> >[!info] Singularity Conditions
> >1.  $\lambda_{1}(\mu_{h})$ and $\lambda_{2}(\mu_{h})$ satisfy $\lvert \arg(\lambda_{j}(\mu_{h}))\rvert =\frac{\pi \alpha}{2}$ for $j=1,2$.
> >2. $\lvert \arg(\lambda_{j}(\mu_{h}))\rvert \neq \frac{\pi \alpha}{2}$ for $j\neq 1,2$.
> 
> >[!info] Transversality condition
> >
> > $\frac{d}{d\mu} \lvert \arg(\lambda_{j}(\mu)) \rvert \neq 0$ at $\mu=\mu_{h}$ and $j=1,2$.


## References

- https://math.libretexts.org/Bookshelves/Differential_Equations/Applied_Linear_Algebra_and_Differential_Equations_(Chasnov)/03%3A_III._Differential_Equations/11%3A_Nonlinear_Differential_Equations/11.02%3A_Bifurcation_Theory
- https://sci-hubtw.hkvisa.net/10.1002/9781119483946
- https://en.wikipedia.org/wiki/Bifurcation_theory
- https://www.intechopen.com/chapters/39234
- https://sci-hubtw.hkvisa.net/10.1016/j.chaos.2017.03.034
