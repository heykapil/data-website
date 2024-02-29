---
id: 03ac88777f
title: Cauchy-Residue Theorem
created: 2024-02-24 14:18:14
updated: 2024-02-25 21:49:48
author: Kapil Chaudhary
---
This theorem establishes a relation between the integral of a function over a contour and its residue at the singularity inside the contour. The residue is a complex number that characterises the behaviour of the function near the singularity. The theorem states that the integral of the function around the contour is equal to 2πi times the sum of the residues of the function at the singularities inside the contour. This theorem is a fundamental tool in complex analysis and has applications in many areas of mathematics and physics.


```ad-theorem
title: **Cauchy's Residue Theorem**


Let $f(z)$ be a function that is analytic inside and on a simple closed contour $C$. Then, the integral of $f(z)$ around $C$ is equal to $2\pi i$ times the sum of the residues of $f(z)$ at its singularities inside $C$.
```

*Proof:*
Let $z_1, z_2, \ldots, z_n$ be the singularities of $f(z)$ inside $C$. We can construct a set of $n$ small circles $C_1, C_2, \ldots, C_n$ around each singularity, such that the circles are disjoint and lie entirely inside $C$.

![[Attachments/Screenshot 2024-02-28 at 1.39.26 PM.png|450]]

Using the Cauchy Integral Formula, we have:

$$\int_C f(z) dz = \int_{C-C_1-\cdots-C_n} f(z) dz + \sum_{k=1}^n \int_{C_k} f(z) dz$$

The integral over $C-C_1-\cdots-C_n$ is analytic, so it is equal to zero by Cauchy's Integral Theorem.

For each circle $C_k$, we can choose a point $z_k$ inside the circle such that $f(z)$ has a singularity at $z_k$. Then, the integral over $C_k$ is equal to $2\pi i$ times the residue of $f(z)$ at $z_k$.

Therefore, we have:

$$\int_C f(z) dz = \sum_{k=1}^n 2\pi i \operatorname{Res}(f(z), z_k)$$

which proves the Cauchy Residue Theorem.

$$\tag*{Q.E.D.}$$

---

