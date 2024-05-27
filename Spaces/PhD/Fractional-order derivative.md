---
id: 925065a958
title: Fractional-order derivative
created: 2024-02-26 08:51:35
updated: 2024-02-26 10:47:43
author: Kapil Chaudhary
---
```ad-def
title: Caputo Fabrizio derivative

The fractional derivative of $\phi$ order of the function $f \in H^1[0,\infty)$ in the Caputo-Fabrizio (CF) sense is defined as follows:
	$$\begin{align*}
{}^{CF}D_t^\phi f(t) &= \frac{M(\phi)}{1-\phi}\int_0^t f^\prime(\tau)\, \text{exp}\left(- \frac{\phi}{1-\phi}(t-\tau)\right) d\tau, \hspace{2cm}t>0 \\[4pt] &=
\frac{M(\phi)}{1-\phi} f^\prime(t) * \text{exp}\left(- \frac{\phi \, t}{1-\phi}\right) , \hspace{2cm}t>0
	\end{align*}$$
	where $M(\phi)$ is a normalizing function satisfying $M(0)=M(1)=1$ and can be chosen as constant function $M(\phi)=1$ or non-constant function like $\displaystyle M(\phi) = \frac{2-\phi^2}{2-\phi}$. The operator ($*$) denotes the **convolution** of two functions here.

```


```ad-def
title: Laplace Transform of CF-derivative
Let $f$ be a locally integrable function on $[0, \infty)$ with $|f(t)|<Ke^{wt}$ for $t>0, w\in \R$ then the Laplace transform of the CF-derivative of $f$ is defined as follows:
$$\mathcal{L}\left\{{}^{CF} D^\phi_{t} f(t)\right\}(s) = \frac{1}{\phi+s(1-\phi)}[\mathcal{L}\{f(t) \}(s) -f(0)], \hspace{3cm} \Re (s)>w.$$
```
`\begin{proof}`
The Laplace transform of the fractional-order $\phi$ derivative of $f$  is defined as



$$ \mathcal{L}\left\{ {}^{CF}D_{t}^\phi f(t)\right\}(s) = $$
`\end{proof}`