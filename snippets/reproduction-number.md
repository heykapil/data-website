---
title: Basic Reproduction Number
description: Maple code for finding equillibrium point and basic reproduction number
logo: maple.png
created: 2023-12-14T18:14
updated: 2023-12-14T18:14
---

```matlab
with(LinearAlgebra);
%system of differential equation
X1 := B - mu*S - alpha1*(E + I0 + H + D)*S/N;
X2 := alpha1*(E + I0 + H + D)*S/N - mu*E - alpha2*E;
X3 := alpha2*E - (mu + alpha3 + alpha4)*I0;
X4 := alpha3*I0 - (mu + alpha5 + alpha6)*H;
X5 := -D*mu + H*alpha5 + I0*alpha4;
X6 := H*alpha6 - R*mu;
%solving to find equillibrium point
W := solve({X1, X2, X3, X4, X5, X6}, {D, E, H, I0, R, S});
W[1];
simplify(W[2]);
simplify(W[2][1]);
simplify(W[2][2]);
simplify(W[2][3]);
simplify(W[2][4]);
simplify(W[2][5]);
simplify(W[2][6]);
F := Matrix(6, 6, [[alpha1*B/(N*mu), alpha1*B/(N*mu), alpha1*B/(N*mu), alpha1*B/(N*mu), 0, 0], [], [], [], [], [-alpha1*B/(N*mu), -alpha1*B/(N*mu), -alpha1*B/(N*mu), -alpha1*B/(N*mu), 0, 0]]);
V := Matrix(6, 6, [[mu + alpha2], [-alpha2, mu + alpha3 + alpha4], [0, -alpha3, mu + alpha5 + alpha6], [0, -alpha4, -alpha5, mu], [0, 0, -alpha6, 0, mu], [0, 0, 0, 0, 0, mu]]);
U := 1/V;
M := F . (1/V);
LinearAlgebra:-Eigenvalues(M);

```
