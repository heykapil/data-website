---
id: 18ea6fb7-1267-441c-8d6c-53c7d10f3eee
title: Casorati–Weierstrass theorem
created: 2024-02-23T11:54:00
updated: 2024-02-23T11:54:00
---

This theorem tells the behaviour of a holomorphic function $f$ near isolated essential singularities. This theorem states that: 

```ad-theorem 
title: **Casorati-Weirstrass theorem**
Consider $z_0$ be an isolated essential singularity of a function $f$ then for each positive number $\epsilon, \delta$ and any complex number $w_0$

$$\lvert f(z)-w_0\rvert < \epsilon \hspace{2cm} \text{ whenever } 0<\lvert z - z_0 \rvert < \delta.$$

In other words, $f$ approaches arbitirarly close to any complex number $w_0$ in  any deleted neighbourhood of the isolated essential singularity $z_0$. 

In other words, if $V$ is any neighbourhood of $z_0$ then $f(V - \{z_0\})$ is dense in $\mathbb{C}$.
```

*Proof:* Let $V$ be any $\delta$-nbd of $z_0$   

We prove this by the contradiction, suppose that for every $z \in V - \{z_0 \}$,
$$\lvert f(z)-w_0\rvert > \epsilon$$ for some $\epsilon >0$ and $w_0 \in \mathbb{C}$. 
