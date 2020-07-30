#   Motivating large deviations

??? abstract
    We would like to understand why we need large deviation results. We shall first attempt to get such a result from the central limit theorem, see why it is not enough, and then go on to motivate Cramér's theorem using the Markov inequality.

??? info "Prerequisites"
    I expect you to know elementary probability theory. Knowledge of law of large numbers, central limit theorem, moment generating function, and Markov inequality is recommended, but can be looked up in the provided Wikipedia links.


##  Problem setup and the law of large numbers

Suppose we have a sequence of *independent and identically distributed* real-valued random variables, \( \bcrl{X_i: i ∈ ℕ} \), with mean \( 𝔼(X_1) < ∞ \) and variance \( 𝕍(X_1) = σ^2 < ∞ \). Since we can always subtract the mean from the original random variables to get a new set of random variables with \( 0 \) mean, we henceforth assume that \( 𝔼(X_1) = 0 \) without any loss of generality. Denote the *sample mean* by \( \overline{X}_n = \frac1n ∑_{i = 1}^n X_i \). Our goal is to find the *probability of deviation* of \( \overline{X}_n \) from \( \overline{X} \) as \( n → ∞ \). In particular, for some \( ε > 0 \), we would like to calculate rate of convergence of the limit

\begin{equation}  \label{eq:goal}
    \lim_{n → ∞} ℙ\bcrl{\overline{X}_n > ε} .
\end{equation}

For a fixed \( ε \), the [weak law of large numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers) gives us \( \lim_{n → ∞} ℙ\bcrl{\abs{\overline{X}_n} > ε} = 0 \). But it does not say how fast the probability converges to zero as a function of \( ε \). Our intuition should suggest that the rate of convergence should be much faster when \( ε = 2 \) as compared to \( ε = 1 \), which should in turn be faster as compared to when \( ε = \frac12 \). In fact, it is natural to expect the rate to be slower as \( ε \) gets closer to \( 0 \), and faster as \( ε \) gets farther away from \( 0 \). So the question is, can we get a more informative estimate?

It might be beneficial to look at some real-life examples at this point.

??? example "Measuring length using a ruler"
    Suppose we want to measure a physical quantity. If we perform one measurement, there is a good possibility that our observation is incorrect to some degree. Instead, if we repeat the process a number of times and average the measured values, we intuitively understand that our measurement is more accurate. The law of large numbers gives a mathematical foundation for this intuition, and tells us why we must repeat our observations a number of times and average the values in order to get good estimates.

    Now, suppose we are measuring a thread which has a true length of 39mm. Consider the following situations.

    1.  We get a mean observed length of 40mm after 8 observations.
    2.  We get a mean observed length of 50mm after 8 observations.

    It is intuitively clear to us that situation 1 is much more probable as compared to situation 2. But the law of large numbers does not give us any idea of this.

??? example "Convergence rate in computing"
    Suppose \( X_i \) denotes the number of iterations required for a machine learning routine to converge with a certain degree of accuracy for the \( i \)th cross-validation dataset. If we want to get a good estimate of the distribution of the \( X_i \)s, we should look at the average values.

    Suppose the true mean for particular algorithm is 40 iterations. It would be more likely for us to observe a mean of 50 as compared to 100 if we run a lot of simulations. Again, the law of large numbers does not give us any indications in this direction.


##  Small deviations and the central limit theorem

Our first attempt would be to try use the [central limit theorem](https://en.wikipedia.org/wiki/Central_limit_theorem). This theorem tells us how the limit \eqref{eq:goal} behaves for a certain class of deviations. In particular the theorem says that we can estimate the probability of deviations from the mean when the deviations scale as an order of \( n^{-\frac12} \), that is, \( ε ∼ \frac{1}{\sqrt{n}} \). To keep matters simple, let us see a stunted version of the central limit theorem. This version requires the existence of the moment generating function of \( X_1 \).

!!! theorem "Central limit theorem"
    In the problem setup described above,

    \[ \lim_{n → ∞} ℙ\bcrl{\sqrt{n} \overline{X}_n ≤ z} = 𝒩_{σ^2}(z) , \]

    where \( 𝒩_{σ^2} \) denotes the [distribution function](https://en.wikipedia.org/wiki/Cumulative_distribution_function) of the [Gaussian measure](https://en.wikipedia.org/wiki/Normal_distribution) with mean 0 and variance \( σ^2 \).

???+ proof
    Let \( Z = \sqrt{n} \overline{X}_n \) and \( M(λ) = 𝔼\brnd{e^{λ X_1}} \). Then, expanding the [Taylor series](https://en.wikipedia.org/wiki/Taylor_series) of \( M \) around \( 0 \), we get

    \[ M(λ) = 1 + M'(0) λ + \frac12 M''(0) λ^2 + o(λ^2) . \]

    Now, \( M'(0) = 𝔼(X_1) = 0 \) and \( M''(0) = 𝔼(X_1)^2 = σ^2 \), we have

    \[ M(λ) = 1 + \frac12 σ^2 λ^2 + o(λ^2) . \]

    Now, we calculate the moment generating function of \( \overline{X}_n \).

    \begin{align*}
        M_{\overline{X}_n}(λ)  & =  𝔼 \brnd{e^{λ \overline{X}_n}}  \\
            & =  𝔼 \brnd{e^{∑_{i = 1}^n \fracλn X_i}}  \\
            & =  𝔼 \brnd{∏_{i = 1}^n e^{\fracλn X_i}}  \\
            & =  ∏_{i = 1}^n 𝔼 \brnd{e^{\fracλn X_i}}  \\
            & =  ∏_{i = 1}^n 𝔼 \brnd{e^{\fracλn X_1}}  =  \brnd{M\brnd{\fracλn}}^n , \\
    \end{align*}

    where we used the independence of \( X_i \)s to interchange the expectation and the product, and used the indentical distribution assumption to get the same moment generating function for each.

    Using the above, we get \( M_Z(λ) = 𝔼\brnd{e^{λ Z}} = 𝔼\brnd{e^{\sqrt{n} λ \overline{X}_n}} = M_{\overline{X}_n}(\sqrt{n} λ) = \brnd{M\brnd{\frac{λ}{\sqrt{n}}}}^n \).

    Finally, putting it all together, we get

    \[ M_Z(λ) = \brnd{1 + \frac12 \frac{σ^2 λ^2}{n} + o\brnd{\frac{λ^2}{n}}}^n  →  e^{\frac12 λ^2 σ^2} . \]

    Now since \( e^{\frac12 λ^2 σ^2} \) is the moment generating function of a Gaussian measure, and convergence of moment generating functions imply convergence of distribution, our proof is complete.


??? note "On the word *stunted*"
    We are calling the above version of the central limit theorem as *stunted* because we are stating and proving a strictly weaker version of the result. The general result can be written for any distribution, that is, there is no requirement for the moment generating function to exist. The [proof of the general version](https://en.wikipedia.org/wiki/Central_limit_theorem#Proof_of_classical_CLT) uses a complex analytic version of the moment generating function called the [characteristic function or Fourier transform](https://en.wikipedia.org/wiki/Characteristic_function_(probability_theory)).

Using the central limit theorem, we can write

\[ \lim_{n → ∞} ℙ\bcrl{\overline{X}_n ≥ \frac{z}{\sqrt{n}}} = 1 - 𝒩_{σ^2}\brnd{\frac{z}{\sqrt{n}}} , \qquad z ∈ ℝ . \]

But can we use the central limit theorem to get the result we were looking for in the first place? The answer is no, because the central limit theorem only talks about the asymptotics when the deviations are of the order of \( n^{-\frac12} \), which go to \( 0 \) as \( n → ∞ \). Therefore, this is not going to be helpful when we have a constant deviation. In this sense, the central limit theorem only works for *small deviations*.


##  Large deviations

What we can do, instead, is to use [Markov's inequality](https://en.wikipedia.org/wiki/Markov%27s_inequality) to obtain exponential tail bounds. Let us see how.

For an arbitrary *tuning parameter* \( λ > 0 \), we have

\begin{align*}
    ℙ\bcrl{\overline{X}_n > ε}  & =  ℙ\bcrl{e^{n λ \overline{X}_n} > e^{n λ ε}}  \\
        & ≤  e^{-n λ ε} 𝔼\brnd{e^{n λ \overline{X}_n}}  \\
        & =  e^{-n λ ε} M_{\overline{X}_n}(n λ)  \\
        & =  \brnd{e^{-λ ε} M(λ)}^n ,  \\
\end{align*}

so

\[ \frac1n \log ℙ\bcrl{\overline{X}_n > ε} ≤ -λ ε + \log M(λ) . \]

Now, since \( λ > 0 \) was arbitrary, it is true that

\begin{align*}
    \frac1n \log ℙ\bcrl{\overline{X}_n > ε}  & ≤  \inf_{λ > 0} \bcrl{-λ ε + \log M(λ)}  \\
        & =  -\sup_{λ > 0} \bcrl{λ ε - \log M(λ)} .  \\
\end{align*}

??? hint "Infimum and supremum"
    If you do not know what \( \inf \) and \( \sup \) is, think of them as \( \min \) and \( \max \), respectively.

Therefore, we obtained bounds of the form of an exponential decay in probabilities as a function of the deviation \( ε \).

We essentially derived an intuition behind the famous [Cramér's theorem](https://en.wikipedia.org/wiki/Cram%C3%A9r%27s_theorem_(large_deviations)), which states the following.

!!! theorem "Cramér (1938)"
    The stochastic process \( (\overline{X}_n) \) follows a large deviation principle with rate function \( Λ^*(ε) := \sup_{λ > 0} \bcrl{λ ε - \log M(λ)} \). That is, the following hold.

    *   (*upper bound*)  For every closed set \( F \), we have

        \[ \limsup_{n → ∞} \frac1n \log ℙ\bcrl{\overline{X}_n > ε}  ≤  - \inf_{x ∈ F} Λ^*(x) . \]

    *   (*lower bound*)  For every open set \( G \), we have

        \[ \liminf_{n → ∞} \frac1n \log ℙ\bcrl{\overline{X}_n > ε}  ≥  - \inf_{x ∈ G} Λ^*(x) . \]

??? note "Why \( \inf \) of the rate function?"
    In large deviation statements, the bounds are taken over sets rather than intervals. Therefore, we need to understand how the rate depends on the points in the set. Since we want the *worst estimate*, we take the infimum of the rate function over the set to get the *slowest rate*.

To point out the the exponential decay explicitly, we informally write \( ℙ\bcrl{\overline{X}_n ∈ \d x} ≍ e^{-n Λ^*(x)} \d x \) for \( x ∈ ℝ \), where \( ≍ \) denotes the asympototic behavior as \( n → ∞ \). This means that the probability of the sample mean lying in a small interval \( \d x \) around \( x \) decreases exponentially on the value of the rate function at \( x \).

Finally, let us look at an example to confirm our intuitions.

!!! example "Cramér's theorem for Gaussian measures"
    For [Gaussian random variables](https://en.wikipedia.org/wiki/Normal_distribution) with mean \( 0 \) and variance \( σ^2 \), we have \( M(λ) = e^{\frac12 λ^2 σ^2} \). If \( f(λ) = λ ε - \log M(λ) \), then using calculus, we see that \( f \) attains its maximum at \( λ = \frac{ε}{σ^2} \), and therefore \( Λ^*(ε) = f\brnd{\frac{ε}{σ^2}} = \frac{ε^2}{2 σ^2} \).

    Intuitively, this makes sense. If we have a larger deviation \( ε \), we expect the rate of probability falling to zero to be faster. Moreover, if the variance of the original random variables \( σ^2 \) is large, it is more likely that we can have a deviant result (slower rate). We see that the actual rate function is directly proportional to (the square of) the deviation and inversely proportional to (the square of) the variance.

!!! info "On the usage of the words *large* and *small*"
    Note that we did not use *small* deviation to mean a *small* value of the deviation, but to signify deviations that asymptotically go to zero. Similarly, we did not use *large* deviation to mean that the deviation is itself a large value, rather we use it to indicate that there is no requirement for the deviations to asymptotically tend to zero.


##  References

*   [Sham Kakade's notes](http://stat.wharton.upenn.edu/~skakade/courses/stat928/lectures/lecture04.pdf)
*   [Djalil Chafaï's tutorial](http://djalil.chafai.net/blog/2018/03/09/tutorial-on-large-deviation-principles/)
*   [Dominic Yeo's article series](https://eventuallyalmosteverywhere.wordpress.com/2013/01/16/large-deviations-1-motivation-and-cramers-theorem/)
*   [Tim van Erven: Cramér vs Sanov](https://www.timvanerven.nl/blog/2012/08/large-deviations-cramer-vs-sanov/)
*   [Frank den Hollander's lectures in ISI, Bangalore
](https://www.isibang.ac.in/~athreya/pcm/)
