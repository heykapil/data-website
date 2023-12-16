---
created: 2023-12-06T16:36
updated: 2023-12-08T12:40
---
>[!def] Metric space
> Let X be a non-empty set. A <u>metric on X</u> is a map $d: X \times X \rightarrow \R$ such that for all $x,y,z \in X$
> 1. $d(x,y)\geq 0$
> 2. $d(x,y)=0 \iff x=y$
> 3. $d(x,y) =d(y,x)$
> 4. $d(x,y)\leq d(x,z)+d(z,y)$
> Then we say $(X,d)$ is a metric space.

>[!example] Examples
>1. $X=R, d(x,y)=\lvert x-y\rvert$ is a metric.
>2. $X=\R^n$, $d(x,y)=\sqrt{\sum_{k=1}^{n}\lvert x_{k} -y_{k}\rvert^2  }$ is a metric called as <u>Euclidian metric</u>.
>3. <u>Discrete metric</u>: $X$ is non-empty set then $$d(x,y) = \begin{cases}
 1,& x\neq y \\ 0,& x=y \end{cases}$$
