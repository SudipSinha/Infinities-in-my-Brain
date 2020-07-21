#   Motivating large deviations

!!! abstract
    We would like to understand why we need large deviation results. We shall first attempt to get such a result from (a stunted version of) the central limit theorem, see why it is not enough, and then go on to motivate Cramér's theorem using the Markov inequality.

!!! info "Prerequisites"
    I expect you to know elementary (measure-theoretic) probability theory. Knowledge of other topics are beneficial, but if not, you can look them up in the Wikipedia links that I have provided.


## Problem setup

Suppose we have a sequence of independent and identically distributed (IID) random variables, \( \bcrl{X_i: i ∈ ℕ} \). We further assume that \( X_1 \) has moments of all order, with mean \( 𝔼X_1 < ∞ \) and variance \( 𝕍X_1 = σ^2 < ∞ \). Since we can always subtract the mean from the original random variables to get a new set of random variables with \( 0 \) mean, we henceforth assume that \( 𝔼X_1 = 0 \) without any loss of generality. Denote the sample mean by \( \bar{X}_n = n^{-1} ∑_{i = 1}^n X_i \). Our goal is to find the probability of deviation of \( \bar{X}_n \) from \( \bar{x} \) as \( n → ∞ \). In particular, for some \( ε > 0 \), we would like to calculate

\begin{equation}  \label{eq:goal}
    \lim_{n → ∞} ℙ\bcrl{\bar{X}_n > ε} .
\end{equation}

For a fixed \( ε \), the [weak law of large numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers) gives us \( \lim_{n → ∞} ℙ\bcrl{\abs{\bar{X}_n} > ε} = 0 \). But it does not say how quickly the limit approaches zero. Can we do better?


##  Small deviations and the central limit theorem

Our first attempt would be to try use the central limit theorem. This theorem tells us how our goal \eqref{eq:goal} behaves for a certain class of \( ε \)s. In particular the theorem says that we can estimate the deviations from the mean when \( ε ∼ \frac{1}{\sqrt{n}} \). Let us see a stunted version of the central limit theorem, which requires the existence of the moment generating function of \( X_1 \).

!!! theorem
    \( \lim_{n → ∞} ℙ\bcrl{\sqrt{n} \bar{X}_n ≤ z} = 𝒩_{σ^2}(z) \), where \( 𝒩_{σ^2} \) denotes the distribution function of the [Gaussian measure](https://en.wikipedia.org/wiki/Normal_distribution) with mean 0 and variance \( σ^2 \).

???+ proof
    Let \( Z = \sqrt{n} \bar{X}_n \) and \( M(λ) = 𝔼e^{λ X_1} \). Then, expanding the [Taylor series](https://en.wikipedia.org/wiki/Taylor_series) of \( M \) around \( 0 \), we get

    \[ M(λ) = 1 + M'(0) λ + \frac12 M''(0) λ^2 + o(λ^2) . \]

    Now, \( M'(0) = 𝔼X_1 = 0 \) and \( M''(0) = 𝔼X_1^2 = σ^2 \), we have

    \[ M(λ) = 1 + \frac12 σ^2 λ^2 + o(λ^2) . \]

    Now, we calculate the moment generating function of \( \bar{X}_n \).

    \begin{align*}
        M_{\bar{X}_n}(λ)  & =  𝔼e^{λ \bar{X}_n}  \\
            & =  𝔼e^{∑_{i = 1}^n \fracλn X_i}  \\
            & =  𝔼 ∏_{i = 1}^n e^{\fracλn X_i}  \\
            & =  ∏_{i = 1}^n 𝔼 e^{\fracλn X_i}  \\
            & =  ∏_{i = 1}^n 𝔼 e^{\fracλn X_1}  =  M\brnd{\fracλn}^n , \\
    \end{align*}

    where we used the independence of \( X_i \)s to interchange the expectation and the product, and used the indentical distribution assumption to get the same moment generating function for each.

    Using the above, we get \( M_Z(λ) = 𝔼e^{λ Z} = 𝔼e^{\sqrt{n} λ \bar{X}_n} = M_{\bar{X}_n}(\sqrt{n} λ) = M\brnd{\frac{λ}{\sqrt{n}}}^n \).

    Finally, putting it all together, we get

    \[ M_Z(λ) = \brnd{1 + \frac12 \frac{σ^2 λ^2}{n} + o\brnd{\frac{λ^2}{n}}}^n  →  e^{\frac12 λ^2 σ^2} . \]

    Now since \( e^{\frac12 λ^2 σ^2} \) is the moment generating function of a Gaussian measure, and convergence of moment generating functions imply convergence of distribution, our proof is complete.


!!! note "On the word *stunted*"
    We are calling the above version of the central limit theorem as *stunted* because we are stating and proving a strictly weaker version of the result. The actual central limit theorem can be written for any distribution, that is, there is no requirement for the moment generating function to exist. The proof of the general version uses a complex version of the moment generating function called the [characteristic function or Fourier transform](https://en.wikipedia.org/wiki/Characteristic_function_(probability_theory)).

Using the central limit theorem, we can write

\[ \lim_{n → ∞} ℙ\bcrl{\bar{X}_n ≥ \frac{z}{\sqrt{n}}} = 1 - 𝒩_{σ^2}\brnd{\frac{z}{\sqrt{n}}} . \]

But can we use the central limit theorem to get the result we were looking for in the first place? The answer is no, because the central limit theorem only talks about the asymptotics when the fluctuations are of the order of \( \frac{1}{\sqrt{n}} \), which go to \( 0 \) as \( n → ∞ \). Therefore, this is not going to be helpful when we have a constant fluctuation. In this sense, the central limit theorem only works for *small deviations*.


##  Large deviations

What we can do, instead, is to use [Markov's inequality](https://en.wikipedia.org/wiki/Markov%27s_inequality) to obtain exponential tail bounds. Let us see how.

For an arbitrary *tuning parameter* \( λ > 0 \), we have

\begin{align*}
    ℙ\bcrl{\bar{X}_n > ε}  & =  ℙ\bcrl{e^{n λ \bar{X}_n} > e^{n λ ε}}  \\
        & ≤  e^{-n λ ε} 𝔼e^{n λ \bar{X}_n}  \\
        & =  e^{-n λ ε} M_{\bar{X}_n}(n λ)  \\
        & =  \brnd{e^{-λ ε} M(λ)}^n ,  \\
\end{align*}

so

\[ n^{-1} \log ℙ\bcrl{\bar{X}_n > ε} ≤ -λ ε + \log M(λ) . \]

Now, since \( λ > 0 \) was arbitrary, it is true that

\[ n^{-1} \log ℙ\bcrl{\bar{X}_n > ε} ≤ \inf_{λ > 0} \bcrl{-λ ε + \log M(λ)} = -\sup_{λ > 0} \bcrl{λ ε - \log M(λ)} . \]

Therefore, we obtained bounds of the form of an exponential decay in probabilities as a function of the deviation \( ε \).

What we obtained is essentially the famous Cramér's theorem, which states that the stochastic process \( (\bar{X}_n) \) follows a large deviation principle with rate function \( Λ^*(ε) = \sup_{λ > 0} \bcrl{λ ε - \log M(λ)} \).

!!! example "Cramér's theorem for Gaussian measures"
    For Gaussian random variables with mean \( 0 \) and variance \( σ^2 \), we have \( M(λ) = e^{\frac12 λ^2 σ^2} \), so if \( f(λ) = λ ε - \log M(λ) \), then using calculus, we see that \( f \) attains its maximum at \( λ = \frac{ε}{σ^2} \), so \( Λ^*(ε) = \frac{ε^2}{2 σ^2} \).


##  References

*   [Sham Kakade's notes](http://stat.wharton.upenn.edu/~skakade/courses/stat928/lectures/lecture04.pdf)
*   [Djalil Chafaï's tutorial](http://djalil.chafai.net/blog/2018/03/09/tutorial-on-large-deviation-principles/)
*   [Dominic Yeo's article series](https://eventuallyalmosteverywhere.wordpress.com/2013/01/16/large-deviations-1-motivation-and-cramers-theorem/)
*   [Tim van Erven: Cramér vs Sanov](https://www.timvanerven.nl/blog/2012/08/large-deviations-cramer-vs-sanov/)
*   [Frank den Hollander's lectures in ISI, Bangalore
](https://www.isibang.ac.in/~athreya/pcm/)
