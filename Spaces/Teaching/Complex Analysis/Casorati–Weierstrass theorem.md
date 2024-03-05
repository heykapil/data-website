---
id: 18ea6fb7-1267-441c-8d6c-53c7d10f3eee
title: Casorati–Weierstrass theorem
author: Kapil Chaudhary
created: 2024-02-23T11:54:00
updated: 2024-02-25 21:56:32
---
This theorem tells the behaviour of a holomorphic function $f$ near isolated essential singularities. In Russian literature, it is called Sokhotski's theorem. 

```ad-theorem 
title: **Casorati-Weirstrass theorem**
Consider $z_0$ be an isolated essential singularity of a function $f$ then for each positive number $\epsilon, \delta$ and any complex number $w_0$

$$\lvert f(z)-w_0\rvert < \epsilon \hspace{2cm} \text{ whenever } 0<\lvert z - z_0 \rvert < \delta.$$

In other words, $f$ approaches arbitirarly close to any complex number $w_0$ in  any deleted neighbourhood of the isolated essential singularity $z_0$. 

In other words, for any complex number $w_0$, there exists a sequence $\{ z_n\}$ in every deleted $\delta$-neighbourhood of $z_0$ such that $z_n \xrightarrow{n \rightarrow \infty} z_0$ then $f(z_n) \xrightarrow{n \rightarrow \infty} w_0$.

In other words, if $V$ is any neighbourhood of $z_0$ then $f(V - \{z_0\})$ is dense in $\mathbb{C}$.
```

*Proof:*  We prove this by the contradiction. Since $z_0$ is an isolated singularity of $f$, there is a deleted neighbourhood $N_{\delta}(z_0)= \{0<\lvert z-z_0\rvert <\delta \}$ throughout which $f$ is analytic.

Suppose to contrary that for some $\epsilon >0$, $w_0 \in \mathbb{C}$ and for every $z \in N_{\delta}(z_0)$,
$$\lvert f(z)-w_0\rvert \geq \epsilon$$
The function $g: N_{\delta}(z_0) \rightarrow \mathbb{C}$ defined as $\displaystyle g(z) =\frac{1}{f(z)-w_0}$ is analytic and bounded in $N_{\delta}(z_0)$. Hence, $z_0$ is a removable singularity of $g$ as $g$ is analytic and bounded in $N_{\delta}(z_0).$ In order to remove the singularity of $g$ and extend it to an analytic function $\tilde{g}$, we can define a finite value of $\tilde{g}$ at $z_0$ as $\tilde{g}(z_0) = \lim_{z\rightarrow z_0} g(z)$. The function
$$\tilde{g}(z) =\begin{cases}
g(z); & z\neq z_0 \\[1em]
\lim\limits_{z\rightarrow z_0} g(z); & z=z_0
\end{cases}$$
is analytic and bounded in $N_{\delta}(z_0) \cup \{z_0\}$. There can be two cases depending on $\tilde{g}(z_0)$.

**Case-I**  When $\tilde{g}(z_0) \neq 0$ then we have
$$ f(z) = \frac{1}{g(z)} + w_0 \hspace{1em}, \forall z \in N_\delta(z_0) $$
and $\displaystyle \lim\limits_{z\rightarrow z_0} f(z) = \frac{1}{\tilde{g}(z_0)}+w_0$ exists finitely. That means, $z_0$ is a removable singularity of $f$ not an essential one. A contradiction arises.

**Case-II**  When $\tilde{g}(z_0) =0$ then $z_0$ is a zero of $\tilde{g}$ of finite order (say $m$) as $\tilde{g}$ is not identically zero in $\lvert z - z_0\rvert <\delta$. So, $\tilde{g}$ can be represented as $\tilde{g}(z) =(z-z_0)^m \phi(z)$ where $\phi$ is analytic and $\phi(z_0) \neq 0$, then we have
$$ f(z) = \frac{1}{g(z)} + w_0 =\frac{1}{\phi(z)(z-z_0)^{m}}+w_0 \hspace{1em}, \forall z \in N_\delta(z_0) $$
That means, $z_0$ is a pole of order $m$ of $f$ not an essential one. A contradiction arises. 
$$\tag*{\textbf{Q.E.D.}}$$

---

Next Reading: [[Picard's theorem]] 


***Questions:*** 
-  Explain the behaviour of $\sin(1/z)$ near $z=0$.  
- [[WIP]]