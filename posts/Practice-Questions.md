---
title: Practice Questions
summary: Questions are provided for practice of students for the topics Symmetric form , Bilinear form and Hermitian forms.
image: /static/images/banner.png
category: blog
author: Kapil Chaudhary
tags:
  - blog
description:
created: 2023-09-27T14:52
updated: 2023-12-14T18:14
id: 3a85888adc
private: true
datetimeCreate: 2023-09-29 18:30:00
datetimeUpdate: 2023-11-07 14:19:04
---

## Bilinear forms

1. Write down the following bilinear forms in vector matrix notation $uAv^{T}$.
   - $\phi(u,v) = 3x_1y_1 -2x_1y_3 +5x_2y_1+7x_2y_2-8x_2y_3+4x_3y_2-6x_3y_3$.
   - $\phi(u,v) = -5x_1y_1 +6x_1y_2 -2x_1y_3+3x_2y_2-6x_2y_3$.
   - $\phi(u,v) = 2x_1y_3 -3x_3y_1+4x_3y_4$.
   - $\phi(u,v) = 4x_1y_1+2x_1y_2-2x_2y_1+3x_2y_2$.
   - $\phi(u,v) = 2x_1y_1-3x_1y_3+2x_2y_2$.
2. Find the matrix $A$ of bilinear form $\phi$ in basis $S$ and matrix $B$ of $\phi$ in basis $\widetilde S$. Also, find the change of basis matrix $P$ from $\widetilde S$ to $S$ and verify that $B=P^T AP$.

   - $\phi(u,v) = 5x_1y_1 -3x_1y_2 -3x_2y_1+ 8x_2y_2.  S = \{(1,1),(1,-1)\} \text{ and } \widetilde S=\{(1,2),(2,1)\}$
   - $\phi(u,v) = 4x_1y_1 -3x_1y_2 + 2x_2y_1 .$ $S = \{(1,0),(1,2)\} \text{ and } \widetilde S=\{(0,1),(1,1)\}$ .

3. Prove that for any $n$-dimensional vector space $V$ over field $F$,
   $$ \phi*{i,j} (u,v) = f_i (u) f_j (v) \text{ for all } u, v \in V $$
   Then set $\{ \phi*{i,j} \mid i,j=1,2,3,\cdots ,n \}$ forms a basis of space $B(V)$ of bilinear forms on $V$ ,
   where $\{f_i \mid i=1,2,3,\cdots,n \}$ is a basis of dual space $V^{*}$.
