---
created: 2024-03-04 14:29:28
id: 6278198d80
author: Kapil Chaudhary
title: Taylor Theorem
updated: 2024-03-04 14:29:28
---
```ad-theorem
title: Taylor theorem
Suppose $f$ be a [[Holomorphic and Meromorphic functions | holomorphic]] function thoroughout a open disc $|z-z_{0}|<R$ centered at $z_0$ and radius $R$ then $f$ has a unique power series representation (often called as **Taylor series of $f$ about $z_0$**),

$$f(z)=\sum^{\infty}_{n=1}a_{n}(z-z_{0})^n; \hspace{2em} \text{ valid for } |z-z_{0}|<R$$

where the coefficient $a_n$ are given by

$$a_n = \frac{f^{(n)}(z_{0})}{n!} \hspace{2em} \text{ for each } n\in \N \cup \{0\}$$
In other words, Taylor series of $f$ converges to $f(z)$ in the mentioned open disk.

**Special Case:** *For $z_0 =0$, The Taylor series is usually called **Maclaurrin series.** *

```


*Proof:* We divide the proof in two cases, $z_0 =0$ and $z_0 \neq 0$.

**Case I:** Assume $z_0 =0$.

> [!col]
> Using [[Cauchy Integral formula]],
> $$f(z) = \frac{1}{2\pi i} \int _{|w|=R} \frac{f(w)}{w-z} \, dw $$
> for each $z$ in the open disk $|z|<R$. We will use the sum of infinite geometric series $$\frac{1}{1-z} = \sum_{n=0}^{\infty} z^n \hspace {2cm} \text{ valid for } |z|<1.$$ Since $\lvert\frac{z}{w}|<1$, $$ \frac{1}{w-z} = \frac{1}{w}\cdot\frac{1}{1-\left( \frac{z}{w} \right)} =\frac{1}{w}\cdot \sum_{n=0}^{\infty} \left( \frac{z}{w} \right)^n$$ 
> 
> ```tikz
\begin{document}
\begin{tikzpicture}[domain=-4:4]
\draw[->] (-2.2,0) -- (2.2,0) node[right] {Re$(z)$};
\draw[->] (0,-2.2) -- (0,2.2) node[above] {Im$(z)$};
\draw[dashed, thin] (0,0) circle (1.5cm);
\coordinate [label={[yshift=0.2cm]left:$z_0$}] (A) at (0,0) ;
\coordinate[label={right:$w$}] (B) at (45:1.5cm) ;
\filldraw[black] (A) circle (1pt);
\filldraw[black] (B) circle (1pt);
\filldraw[black] (0.75,-0.75) circle (1pt) node[anchor=west]{$z$};
\draw (A) -- node[right] {$R$} ++(45:1.5) -- (B);
\end{tikzpicture}
\end{document}

Thus, generalised Cauchy-Integral formula gives, $$\begin{align}
f(z) &= \frac{1}{2\pi i} \int _{|w|=R} \frac{f(w)}{w-z} \, dw \\
 &= \frac{1}{2\pi i} \int _{|w|=R}f(w)\cdot \frac{1}{w}\cdot \sum_{n=0}^{\infty} \left( \frac{z}{w} \right)^n  \, dw \\  
&= \sum_{n=0}^{\infty} \left(\frac{1}{2\pi i} \int _{|w|=R} \frac{f(w)}{w^{n+1}}   \,dw\right) \,z ^n  \, \\
&= \sum^{\infty}_{n=0} \left(\frac{f^{(n)}(0)}{n!}\right)z^n = \sum^{\infty}_{n=0}a_{n}(z-0)^n
\end{align} $$

**Case II:** Assume $z_0 \neq 0$.
>[!col]
> Since $f$ is [[Holomorphic and Meromorphic functions|holomorphic]] on disk $|z-z_{0}|<R$ then composite function $g(z) =f(z+z_0)$ is [[Holomorphic and Meromorphic functions|holomorphic]] on $|z|<R.$ 
> Using previous case on $g$, we get $$g(z) = f(z+z_{0})=\sum^{\infty}_{n=0}a_{n}(z-0)^n \hspace{2em} \text{for each } |z|<R;$$
> where $\displaystyle a_n=\frac{g^{(n)}(0)}{n!} =\frac{f^{(n)}(z_{0})}{n!}$. 
> Replacing $z$ by $z-z_0$ gives the desired Taylor expansion of $f$.
>```tikz
\begin{document} 
\begin{tikzpicture}[domain=-4:4]
\draw[->] (-1.2,0) -- (4.2,0) node[right] {Re$(z)$};
\draw[->] (0,-1.2) -- (0,4.2) node[above] {Im$(z)$};
\draw[dashed, thin] (2,2) circle (1.5cm);
\coordinate [label=left:$z_0$] (A) at (2,2) ;
\coordinate (B) at (3.5,2) ;
\filldraw[black] (A) circle (1pt);
\filldraw[black] (2.75,2.75) circle (1pt) node[anchor=west]{$z$};
\draw (A) -- node[below] {$R$} ++(1.25,0) -- (B);
\end{tikzpicture}
\end{document}

---
**Alternative Short Proof:** Since $|z-z_{0}|<R=|w-z_{0}| \implies |\frac{(z-z_{0})}{(w-z_{0})}\rvert<1$,
$$ \frac{1}{w-z} = \frac{1}{w-z_{0}-(z-z_{0})} =\frac{1}{w-z_{0}} \cdot \frac{1}{1- \frac{z-z_{0}}{w-z_{0}} } = \frac{1}{w-z_{0}}\cdot \sum^{\infty}_{n=0} \left(\frac{z-z_{0}}{w-z_{0}}\right)^n.$$
Using Cauchy-Integral formula,
 $$\begin{align}
f(z) &= \frac{1}{2 \pi i} \int _{|w-z_{0}|=R} \frac{f(w)}{w-z} \, dw  \\
&= \frac{{1}}{2 \pi i} \int _{|w-z_{0}|=R} \frac{f(w)}{w-z_{0}} \cdot \sum^{\infty}_{n=0} \left(\frac{z-z_{0}}{w-z_{0}}\right)^n \, dw  \\
&= \sum^{\infty}_{n=0} \left(\frac{1}{2 \pi i}\int_{|w-z_{0}|=R} \frac{f(w)}{(w-z_{0})^{n+1}} \, dw  \right)(z-z_{0})^n \\
&= \sum^{\infty}_{n=0} \frac{f^{(n)}(z_{0})}{n!}(z-z_{0})^n &&
\end{align}$$
$$\tag*{Q.E.D.}$$