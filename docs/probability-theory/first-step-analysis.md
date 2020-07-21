#   First step analysis

!!! abstract
    We use first step analysis to understand the exit probability and mean exit time of a binomial random variable.

!!! info "Prerequisites"
    I expect you to know elementary (measure-theoretic) probability theory and some Markov chain theory. If you do not know measure-theoretic probability, you should still be able to follow the argument, but will have to "believe" some of the things that I and going to write.

First step analysis is a general strategy for solving many Markov chain problems by conditioning on the first step of the Markov chain.

We understand this from the first example of the book Stochastic Calculus and Financial Applications[^Steele2001]. We will derive a recurrence[^recurrence-vs-recursive] relationship of the probability of a gambler winning before he goes bankrupt, and find the expected time taken for the game to end.

### Problem setup

A gambler starts with a principal of \( 0 \), and he can borrow a maximum of \( b \). He stops playing if his net value is \( a \) at any point of time. At each instant \( i \), his wealth \( S_i \) either increases or decreases by one amount depending on the output of the Bernoulli random variable \( X_i \) with *up* probability \( p \). This gives rise to the finite state space \( 𝒮 = \bcrl{-b, -b + 1, …, 0, …, a - 1, a} \). Note that \( (S_n) \) is a time-homogeneous Markov chain on \( 𝒮 \) with transition probabilities as follows:

*   \( P_{-b, j} = P_{a, j} = 0 \) (absorbing barriers),
*   \( P_{i, i + 1} = p \) and \( P_{i, i - 1} = q \) with \( q = 1 - p \), and
*   \( P_{i, j} = 0 \) in all other cases.

Some interesting questions are as follows.

1.  What is the probability that the gambler *wins*?
2.  What is the expected time for the game to finish?

In order to answer these questions, we define the following.

*   \( τ = \inf\bcrl{n ≥ 0 ∣ S_n = a \text{ or } S_n = -b} \) is the *exit time*.
*   \( f(k) = ℙ\bcrl{S_τ = a ∣ S_0 = k} \) for \( k ∈ 𝒮 \) is the probability that the gambler wins if they start with a principal of \( k \).
*   \( g(k) = 𝔼\brnd{τ ∣ S_0 = k} \) for \( k ∈ 𝒮 \) is the *mean exit time* if the gambler start with a principal of \( k \).

Note that we can write \( f(k) = ℙ\bcrl{S_τ = a ∣ S_0 = k} = ℙ_{\bcrl{S_0 = k}} \bcrl{S_τ = a} \), where \( ℙ_{\bcrl{S_0 = k}} \) is the conditional probability measure.


##  Aim 1: Calculate the winning probabilities

### Aim 1a: Obtain a recursive formula for \( f \)

Note that \( f(-b) = 0 \) and \( f(a) = 1 \); these serve as our boundary conditions. Now

\begin{align*}
    \bcrl{S_τ = A}  & =  \bcrl{S_τ = A} ∩ Ω  \\
        & =  \bcrl{S_τ = A} ∩ ⨆_{l ∈ 𝒮} \bcrl{S_1 = l}  \\
        & =  ⨆_{l ∈ 𝒮} \bcrl{S_τ = A} ∩ \bcrl{S_1 = l} , \\
\end{align*}

and so

\begin{align*}
    f(k)  & =  ℙ_\bcrl{S_0 = k} \bcrl{S_τ = A}  \\
        & =  ∑_{l ∈ 𝒮} ℙ_\bcrl{S_0 = k} \brnd{\bcrl{S_τ = A} ∩ \bcrl{S_1 = l}}  \\
        & =  ∑_{l ∈ 𝒮} ℙ_\bcrl{S_0 = k} \bcrl{S_τ = A ∣ S_1 = l} ℙ_\bcrl{S_0 = k} \bcrl{S_1 = l}  \\
        & =  ∑_{l ∈ 𝒮} ℙ_\bcrl{S_1 = l} \bcrl{S_τ = A} P_{k, l}  \\
        & =  ∑_{l ∈ 𝒮} P_{k, l} f(l) , \\
\end{align*}

where we have used the Markov property in the penultimate step and time-homogenity in the ultimate step.

Since \( P_{k, l} = 0 \) for all \( l \) except for \( k ± 1 \), we obtain the recursive formula

\begin{equation}  \label{eq:f-recursive}
    f(k) = f(k + 1) p + f(k - 1) q ;  \quad  f(-b) = 0 , \; f(a) = 1 .
\end{equation}


### Aim 1b: Obtain a closed-form formula for \( f \)

!!! note "The *difference operator* and the *difference quotient*"
    Let \( f: ℝ → ℝ \) be a function. Define the *(first-order) forward difference operator* as \( Δ_h f(x) = f(x + h) - f(x) \). Then the difference quotient is the quantity \( \frac{Δ_h f(x)}{h} \). Taking limit as \( h → 0 \), we get the derivative of \( f \) at \( x \). We write \( Δf(x) \) to denote \( Δ_1 f(x) \). Similarly, we can define the *second-order forward difference operator* by \( Δ_h^2 f(x) = Δ_h (Δ_h f(x)) = f(x + 2 h) - 2 f(x + h) + f(x) \).

Let us denote by the odds of a *down* movement \( o_- = \frac{q}{p} \). Then using the fact that \( p + q = 1 \), the recursive formula \eqref{eq:f-recursive} gives \( (p + q) f(k) = p f(k + 1) + q f(k - 1) \), which is equivalent to

\[ Δf(k) = o_- Δf(k - 1) , \]

and gives us the useful relation

\begin{equation}  \label{eq:Δf-recursive}
    Δf(k + j)  =  o_-^j Δf(k) .
\end{equation}

Let \( α = Δf(-b) \). Then \( Δf(-b + j)  =  o_-^j Δf(-b) \). Now using the lower boundary conditions, we get

\begin{align*}
    f(k)  & =  ∑_{i = -b}^{k - 1} Δ f(i)  \\
        & =  ∑_{j = 0}^{k + b - 1} Δ f(- b + j)  \\
        & =  ∑_{j = 0}^{k + b - 1} o_-^j Δ f(- b)  \\
        & =  α ∑_{j = 0}^{k + b - 1} o_-^j , \\
\end{align*}

where we substituted \( j = b + i \) in the second step. Therefore, we have

\begin{equation}  \label{eq:f-prelim}
    f(k) =
    \begin{cases}
        (k + b) α  &  \text{if } p = q  \\
        \frac{o_-^{k + b} - 1}{o_- - 1} α  &  \text{if } p ≠ q  \\
    \end{cases} .
\end{equation}

Using the upper boundary condition \( f(a) = 1 \), we determine \( α \) to be the inverse of the coefficent of \( α \) in \eqref{eq:f-prelim} with \( k = a \) in both cases. Combine this with \eqref{eq:f-prelim} to finally obtain

\begin{equation}  \label{eq:f}
    f(k) =
    \begin{cases}
        \frac{k + b}{a + b}  &  \text{if } p = q  \\
        \frac{o_-^{k + b} - 1}{o_-^{a + b} - 1} α  &  \text{if } p ≠ q  \\
    \end{cases} .
\end{equation}


##  Aim 2: Calculate the mean exit times

### Aim 2a: Obtain a recursive formula for \( g \)

Since \( g(-b) = g(a) = 0 \), we can ignore those cases as they will not contribute to the expectation. These also serve as our boundary conditions. So we assume \( k ∉ \bcrl{-b, a} \), and take one step. Just like in the case of \( f \), we have

\begin{align*}
    g(k)  & =  𝔼_{ℙ_\bcrl{S_0 = k}} \brnd{τ}  \\
        & =  1 + ∑_{l ∈ 𝒮} 𝔼_{ℙ_\bcrl{S_0 = k}} \brnd{τ ∣ S_1 = l} ℙ_\bcrl{S_0 = k} \bcrl{S_1 = l}  \\
        & =  1 + ∑_{l ∈ 𝒮} 𝔼_{ℙ_\bcrl{S_0 = k}} \brnd{τ ∣ S_1 = l} ℙ_\bcrl{S_0 = k} \bcrl{S_1 = l}  \\
        & =  1 + ∑_{l ∈ 𝒮} 𝔼_{ℙ_\bcrl{S_1 = l}} \brnd{τ} P_{k, l}  \\
        & =  1 + ∑_{l ∈ 𝒮} P_{k, l} g(l) . \\
\end{align*}

In our particular case, this gives the recursive formula

\begin{equation}  \label{eq:g-recursive}
    g(k) = 1 + g(k + 1) p + g(k - 1) q ; \quad g(-b) = g(a) = 0 .
\end{equation}


### Aim 2b: Obtain a closed-form formula for \( g \)

Let us try to apply the same idea as we had used for \( f \). We get

\[ \frac1p + Δ g(k) = o_- Δ g(k - 1) . \]

This does not look as simple as the last time. What can we do? Since we have a constant term, let us try to apply the difference operator again to remove it. <!-- We get

\[ Δ^2 g(k) = o_- Δ^2 g(k - 1) , \]

which is exactly the kind of formula that we were looking for.
 -->
##  References

This note is partially based on the following resources.

[^Steele2001]: [J. Michael Steele, Stochastic Calculus and Financial Applications, 2001, §1.1](https://doi.org/10.1007/978-1-4684-9305-4)
[^Chen2018]:  [Yen-Chi Chen's notes, §3.5](http://faculty.washington.edu/yenchic/18A_stat516/Lec3_DTMC_p1.pdf)
[^Fewster]: [Rachel Fewster's notes, §8.12](https://www.stat.auckland.ac.nz/~fewster/325/notes/ch8.pdf)
[^recurrence-vs-recursive]: Still not sure what I should call this. See [MathSx931035](https://math.stackexchange.com/questions/931035/recurrence-vs-recursive).