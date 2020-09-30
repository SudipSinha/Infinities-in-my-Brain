#   Demystifying multidimensional derivatives

??? warning
    This is still in draft mode. If you have any comments/suggestions, please email me so that I can improve on this.

??? abstract
    We see why there is no unique concept of a derivative for functions on spaces of dimension greater than one.

??? info "Prerequisites"
    Knowledge of elementary real analysis and linear algebra is essential, but some familiarity with functional analysis will greatly improve your experience.


## What is a derivative of a function?

We are typically introduced to derivatives as the rate of change of a function at a given point in the domain of the function. Is this the only way to think of the derivative? My thesis for this essay is that there is another way of looking at derivatives which allows us to generalize it to much general spaces.


##  Derivative in \( 1 \)-dimensional space

First, we look at the simplest case — derivative of a function in a \( 1 \)-dimensional space. Given a function \( f: G ⊆ ℝ → ℝ \), we say that the derivative of the function \( f \) at a *fixed* point \( x ∈ G \) is defined as

\begin{equation}  \label{def:derivative-1dim}
    f'(x) = \lim_{h → 0} \frac{f(x + h) - f(x)}{h} ,
\end{equation}

provided the limit exists.

??? note "Convention"
    In what follows, whenever we write a definition in terms of a limit, we will assume that the limit exists.

Note that we can rewrite \eqref{def:derivative-1dim} as

\begin{equation}  \label{def:derivative-1dim-linear}
    f(x + h) - f(x) - f'(x) h = o(h) ,
\end{equation}

where \( \frac{o(k)}{k} → 0 \) as \( k → 0 \). See [Landau notations](https://en.wikipedia.org/wiki/Big_O_notation#Little-o_notation) for more details.

That is, the *linearization* of the function \( f \) about the *fixed* point \( x \) is given by \( l_x(h) = f(x) + f'(x) h \). An informal way to understand \eqref{def:derivative-1dim-linear} is to think that the difference between the function and the linearization is *small* as we get *close* to \( x \).

Therefore, we could as easily have defined the derivative using \eqref{def:derivative-1dim-linear} instead of \eqref{def:derivative-1dim}. Are these definitions equivalent, or is one more preferable the other? As we saw, both are equivalent in \( 1 \)-dimension. But in higher dimensions, the two perspectives can diverge to give different results, and so it is important to understand both sides of the picture. This is the point of the article.


##  Higher dimensions

A natural question that arises in our minds is that how can we talk about derivatives in higher-dimensional spaces. It is not just a mathematical curiosity, but an extremely practical question because we live in a \( 3 \)-dimensional world (classical spacial dimensions).

How can we attempt to answer the question? Note that we have control over two spaces, the domain and the codomain. First, let us try to have a \( 2 \)-dimensional codomain.

Let \( f: U ⊆ ℝ → ℝ^2 \). How do we find the derivative of such a function?

We can do a "coordinate-wise" differentiation here. Let \( f(x) = (f_1(x), f_2(x)) \). Note that we can always do this as for \( i ∈ \bcrl{1, 2} \), we can simply define \( f_i = f ∘ π_i \), where \( π_i \) is the projection onto the \( i \)th coordinate. Now, using \eqref{def:derivative-1dim}, we can define the derivative of \( f \) at \( x \) as

\[ f'(x) = (f_1'(x), f_2'(x)) . \]

??? example "Traversing the unit circle"
    As an example of such function, let \( 𝕊^1 = \bcrl{(x_1, x_2) ∈ ℝ^2 : \norm{x}_2 = 1} \) be the unit circle, and \( θ ∈ 𝕋 = [0, 2π) \) represent anglular measures about the origin. Then there is a bijection between \( 𝕋 \) and \( 𝕊^1 \), that is given by \( f: 𝕋 → 𝕊^1: θ ↦ (\cos(θ), \sin(θ)) \). To calculate the rate of change of a particle's position with respect to changing angles, we can simple calculate the derivative of \( f \) at an angle \( θ \).

    \[ f'(θ) = (\cos'(θ), \sin'(θ)) = (-\sin(θ), \cos(θ)) . \]

The moral of the above argument is that the dimension of the codomain does not pose theoretical difficulties as we can always differentiate each coordinate separately (at least for countable-dimensional codomains). Thus, we shall only focus on the domain from now on.

So far, so good. Can we do the same if we have a \( 2 \)-dimensional domain? Take a function \( f: ℝ^2 → ℝ \). How do we define the derivative of \( f \)?

The issue we face is that there are two inputs to our function. In the problems until now, there was only one input, so we could just increase or decrease it by \( h \). In other words, there were only two ways of \( h \) approaching \( 0 \) — from the left and from the right. But now we have infinite possibilities as any point in a \( 2 \)-dimensional space can be approached from infinite directions!


### Vector calculus

Let us first try to brute-force our way through in the finite-dimensional case for linear and quadratic forms. These functions occur very commonly throughout mathematics and give us the simplest examples of convex functions.

One way to differentiate linear and quadratic functionals on a finite-dimensional vector space is to use a basis.

In this section, let \( 𝒳 \) be a \( d \)-dimensional real vector space. Fix a basis \( ℬ = \bcrl{e_1, …, e_d} \) for \( 𝒳 \) so that we can express any \( x ∈ 𝒳 \) as \( x = ∑_{i = 1}^d x_i e_i \) for some \( x_i ∈ ℝ \) for each \( i ∈ [d] \). This gives us an identification of \( 𝒳 \) with \( ℝ^d \), and we can write the identification of \( x ∈ 𝒳 \) as the column vector \( (x_1, …, x_d) ∈ ℝ^d \). We shall use the notation \( ⋅^* \) to represents the transpose operation, and denote \( [d] = \bcrl{1, …, d} \).

??? example "Linear functionals"

    Let \( v ∈ 𝒳 \) be fixed and \( m_v: 𝒳 → ℝ: x ↦ \inn{x, v} \). Using the identification, we write \( v = (v_1, …, v_d) ∈ ℝ^d \). So our definition of \( m_v \) becomes \( m_v(x) = x^* v = ∑_{i = 1}^d x_i v_i \). Now, \( \frac{∂m_v(x)}{∂x_j} = v_j \), so writing this in the [numerator layout convention](https://en.wikipedia.org/wiki/Matrix_calculus#Layout_conventions), we get

    \[
        \frac{∂m_v(x)}{∂x}  =
        \begin{bmatrix}
                v_1  &  ⋯  &  v_d
        \end{bmatrix}
        =  v^* ,
    \]

    so we can write \( \frac{∂m_v(x)}{∂x} = \inn{⋅, v} \).


??? example "Quadratic functionals"

    Let \( f: 𝒳 → ℝ: x ↦ \inn{x, T x} \), where \( T: 𝒳 → 𝒳 \) is a linear operator. In the basis \( ℬ \), the operator \( T \) has a unique matrix representative, say \( A = (a_{ij})_{i, j ∈ [d]} \). Therefore, we can write

    \begin{align*}
        f(x)  & =  \inn{x, T x}  \\
            & =  x^* A x \\
            & =  ∑_{i = 1}^d x_i ∑_{j = 1}^d a_{ij} x_j  \\
            & =  ∑_{i = 1}^d ∑_{j = 1}^d x_i a_{ij} x_j  \\
            & =  ∑_{j ≠ k} x_k a_{kj} x_j + ∑_{i ≠ k} x_i a_{ik} x_k \\
            & \quad  + a_{kk} x_k^2 + ∑_{i ≠ k, j ≠ k} x_i a_{ij} x_j , \\
    \end{align*}

    where in the last step we broke down the double sum into four cases,

    1. \( i = k \) and \( j ≠ k \),
    2. \( i ≠ k \) and \( j = k \),
    3. \( i = k \) and \( j = k \),
    4. \( i ≠ k \) and \( j ≠ k \).

    Taking partial derivatives with respect to \( x_k \), we get

    \begin{align*}
        \frac{∂f(x)}{∂x_j}
            & =  ∑_{j ≠ k} a_{kj} x_j
                + ∑_{i ≠ k} x_i a_{ik}
                + 2 a_{kk} x_k + 0  \\
            & =  ∑_{j = 1}^d a_{kj} x_j + ∑_{i = 1}^d x_i a_{ik}  \\
            & =  A_{k, ⋅} x + x^* A_{⋅, k}  \\
            & =  x^* A_{k, ⋅}^* + x^* A_{⋅, k}  \\
            & =  x^* \brnd{A_{⋅, k} + A_{k, ⋅}^*} . \\
    \end{align*}

    Finally, writing in the [numerator layout convention](https://en.wikipedia.org/wiki/Matrix_calculus#Layout_conventions), we get

    \begin{align*}
        \frac{∂f(x)}{∂x}
            & =  \begin{bmatrix}
                x^* \brnd{A_{⋅, 1} + A_{1, ⋅}^*}  &  ⋯  &  x^* \brnd{A_{⋅, d} + A_{d, ⋅}^*}  \\
                \end{bmatrix}  \\
            & =  x^* \brnd{
                    \begin{bmatrix}
                    A_{⋅, 1}  &  ⋯  &  A_{⋅, d}  \\
                    \end{bmatrix}  +  \begin{bmatrix}
                    A_{1, ⋅}^*  &  ⋯  &  A_{d, ⋅}^*  \\
                    \end{bmatrix}
                }  \\
            & =  x^* (A^* + A)  \\
            & =  x^* \brnd{A + A^*}^* \\
            & =  \brnd{(A + A^*) x}^* , \\
    \end{align*}

    where in the penultimate steps we used the involution and anti-distributivity [properties of the adjoint](https://en.wikipedia.org/wiki/Hermitian_adjoint#Properties). Therefore, we can write \( \frac{∂f(x)}{∂x} = \inn{⋅, (A + A^*) x} \).

Note that our final results in both cases do not depend on the choice of the basis. So our intuition should say that there should be a basis-free way of deriving the same results. We shall soon see that this is true.



##  Generalizing

From now on, instead of looking at the Euclidean spaces \( ℝ^n \), we shall look at general real vector spaces. We will return to Euclidean spaces and see what happens in these special cases.

We can look at the problem in two ways. In Fréchet's way, we do not care about the path of approach and try to get a *uniform linearization*. In Gâteaux's way, we fix a direction, so we can only talk about two ways of approaching as in our \( 1 \)-dimensional case.


### Fréchet derivative

!!! definition
    Let \( 𝒳, 𝒴 \) be [normed vector spaces](https://en.wikipedia.org/wiki/Normed_𝒳ector_space), and \( U ⊆ 𝒳 \). A function \( f : U → 𝒴 \) is called *Fréchet differentiable* at \( x ∈ U \) if there exists a bounded linear operator \( L_x: 𝒳 → 𝒴 \) such that

    \begin{equation}  \label{def:Fréchet-derivative}
        \norm{f(x + h) - f(x) - L_x h}_𝒴 = o\brnd{\norm{h}_𝒳} \text{ as } \norm{h}_𝒳 → 0 .
    \end{equation}

!!! notes
    *   This approach is similar to the one used in \eqref{def:derivative-1dim-linear}.
    *   It is customary to write the action of a linear operator \( T \) on a vector \( v \) by \( T v \) instead of \( T(v) \). They are the same.

!!! proposition
    \( L_x \) is unique.

??? proof
    Suppose not. That is, suppose there exists two such linear operators, say \( L_x \) and \( \tilde{L}_x \) that satisfy \eqref{def:Fréchet-derivative}. Therefore, we have

    \begin{align*}
        \norm{f(x + h) - f(x) - L_x h}_𝒴 = o\brnd{\norm{h}_𝒳}  \\
        \norm{f(x + h) - f(x) - \tilde{L}_x h}_𝒴 = o\brnd{\norm{h}_𝒳}  \\
    \end{align*}

    Now, using the triangle inequality of the norm, we get

    \begin{align*}
        \norm{(\tilde{L}_x - L_x) h}_𝒴  & =  \norm{(-L_x h) - (-\tilde{L}_x h)}_𝒴  \\
            & =  \norm{(f(x + h) - f(x) - L_x h) - (f(x + h) - f(x) - \tilde{L}_x h)}_𝒴  \\
            & ≤  \norm{f(x + h) - f(x) - L_x h}_𝒴 + \norm{f(x + h) - f(x) - \tilde{L}_x h}_𝒴  \\
            & =  o\brnd{\norm{h}_𝒳} + o\brnd{\norm{h}_𝒳}  =  o\brnd{\norm{h}_𝒳} . \\
    \end{align*}

    This gives us

    \[ \norm{\tilde{L}_x - L_x}_∞  =  \sup_{\norm{h}_𝒳 ≤ 1} \frac{\norm{(\tilde{L}_x - L_x) h}_𝒴}{\norm{h}_𝒳}  =  \sup_{\norm{h}_𝒳 ≤ 1} \frac{o\brnd{\norm{h}_𝒳}}{\norm{h}_𝒳} → 0 \text{ as } \norm{h}_𝒳 → 0 . \]

    Therefore, \( \tilde{L}_x = L_x \), and we are done.

Since such an operator \( L_x \) is unique (if it exists), we write \( \D f(x) = L_x \)  and call it the *Fréchet derivative* of \( f \) at \( x \).


### Gâteaux differential

!!! definition
    Let \( 𝒳, 𝒴 \) be [normed vector spaces](https://en.wikipedia.org/wiki/Normed_𝒳ector_space), and \( U ⊆ 𝒳 \). The *Gâteaux differential* of a function \( f : U → 𝒴 \) at \( x ∈ U \) in the direction \( v \) is defined as

    \begin{equation}  \label{def:Gâteaux-differential}
        \d_h f(x) = \lim_{t → 0} \frac{f(x + t v) - f(x)}{t} = \left. \frac{d}{d t} \right|_{t = 0} f(x + t v) .
    \end{equation}

    If the limit exists for all \( v ∈ 𝒳 \), then we say that \( f \) is *Gâteaux differentiable* at \( x \).


!!! note
    *   This approach is similar to the one used in \eqref{def:derivative-1dim}.
    *   The Gâteaux differential is unique if it exists, since the limit in the definition is unique if it exists.
    *   Existence of the Gâteaux differential does not guarantee continuity. See examples [here](https://en.wikipedia.org/wiki/Gateaux_derivative#Linearity_and_continuity).
    *   The Gâteaux differential is related to the Fréchet derivative by \( \d_h f(x) = \D f(x) h \) (when both exist).
    *   There is a Gâteaux differential for each direction. So in \( 1 \)-dimension real vector space, there are two (*left* and *right*) such derivatives, but in two or more dimensions or in any complex vector space, there are infinitely (uncountably) many.
    *    The Gâteaux differential is a \( 1 \)-dimensional calculation along a specified direction \( h \), so we can use our ordinary \( 1 \)-dimensional calculus to compute it. This makes computability much easier.
    *    The fundamental theorem of calculus for Gâteaux differentials is \( f(x + h) - f(x) = ∫_0^1 \d_h f(x + t h) \d t \).

##  Special cases

In Euclidean spaces

*   Directional derivatives are basically Gâteaux differentials
*   The total derivative or the gradient are basically the Fréchet derivative.


##  Examples

### Finite-dimensional spaces

???+ example "The absolute value function on ℝ"

    Let \( f: ℝ → ℝ: x ↦ \abs{x} \). If \( x = 0 \), then we have \( \lim_{t → 0} \frac{\abs{t h}}{t} \). If \( h > 0 \) then the limit is \( h \), and if \( h < 0 \) then the limit is \( -h \), which we combine to get the limit as \( \abs{h} \). Now, if \( x ≠ 0 \), then in the limit \( x + th \) will have the same sign as \( x \). Following the same logic as for \( x = 0 \), we get the derivative as \( h \frac{x}{\abs{x}} \). Therefore,

    \[ \d_h f(x) =
        \begin{cases}
            h \frac{x}{\abs{x}}  &  \text{if } x ≠ 0  \\
            \abs{h}  &  \text{if } x = 0  \\
        \end{cases} .
    \]

    It might be surprising to find out that the Gâteaux differential of the absolute value function exists at \( 0 \). In ordinary derivatives, the limit for the derivative does not exist at \( 0 \) because we approach it from both sides. But in Gâteaux differentials, we specify a direction (\( h \)), so we do not have the same problem. But note that the Gâteaux differential depends on \( h \) in a nonlinear way, and therefore there is no Fréchet derivative.


### Inner product spaces

In what follows, \( (𝒳, \inn{⋅, ⋅}) \) is a real inner product space.

??? tip "Inner product spaces"
    If you do not know what a inner product space is, think of it as an \( n \)-dimensional Euclidean space \( ℝ^n \) with the dot product.

??? example "Linear functionals"
    Let \( v ∈ 𝒳 \) be fixed and \( m_v: 𝒳 → ℝ: x ↦ \inn{x, v} \). Then

    *Gâteaux differential*

    \begin{align*}
        \d_h m_v(x)  & =  \lim_{t → 0} \frac{m_v(x + t h) - m_v(x)}{t}  \\
            & =  \lim_{t → 0} \frac{\inn{\cancel{x} + \bcancel{t} h, v} - \cancel{\inn{x, v}}}{\bcancel{t}}  \\
            & =  \inn{h, v} . \\
    \end{align*}

    *Fréchet derivative*: Since the Gâteaux differential is linear in \( h \), the Fréchet derivative is the same as the Gâteaux differential. That is, \( \D f(x): 𝒳 → ℝ: h ↦ \inn{h, v} \). The proof is simply writing out the definition of the Fréchet derivative. Note that the derivative is independent of \( x \), as we should have expected.


??? example "Quadratic functionals"

    Let \( f: 𝒳 → ℝ: x ↦ \inn{x, T x} \), where \( T: 𝒳 → 𝒳 \) is a bounded linear operator. From the definition of \( f \), we note that \( T \) is self-adjoint.

    *Gâteaux differential*

    \begin{align*}
        \d_h f(x)  & =  \lim_{t → 0} \frac{f(x + t h) - f(x)}{t}  \\
            & =  \lim_{t → 0} \frac{\inn{x + t h, T (x + t h)} - \inn{x, Tx}}{t}  \\
            & =  \lim_{t → 0} \frac{\cancel{\inn{x, T x}} + \bcancel{t} \inn{x, T h} + \bcancel{t} \inn{h, T x} + t^\bcancel{2} \inn{h, T h} - \cancel{\inn{x, T x}}}{\bcancel{t}}  \\
            & =  \inn{x, T h} + \inn{h, T x}  \\
            & =  \inn{h, 2Tx} , \\
    \end{align*}

    where in the third last step, we have used the definition of [adjoint of an operator](https://en.wikipedia.org/wiki/Hermitian_adjoint).

    *Fréchet derivative*: The linearity of the Gâteaux differential shows us that the Fréchet derivative is the same. In this case, \( \D f(x): 𝒳 → ℝ: h ↦ \inn{h, 2Tx} \). Note the analogy with \( \frac{d (a x^2)}{d x} h = h ⋅ 2ax \).

Compare the computations in the above examples to the ones performed in the earlier section on [Vector calculus](#vector-calculus). The computations by definition of the Gâteaux differential is actually much simpler than applying the derivative formulas.


### Topological vector spaces

In what follows, \( (𝒳, \inn{⋅, ⋅}) \) is a topological vector space.

??? tip
    This section can be skipped without any consequences.

??? example "Linear functionals"
    Let \( l: 𝒳 → ℝ \) be linear. Then

    *Gâteaux differential*

    \begin{align*}
        \d_h l(x)  & =  \lim_{t → 0} \frac1t \brnd{l(x + t h) - l(x)}  \\
            & =  \lim_{t → 0} \frac{1}{\bcancel{t}} \brnd{\cancel{l(x)} + \bcancel{t} l(h) - \cancel{l(x)}}  \\
            & =  l(h) . \\
    \end{align*}

    *Fréchet derivative*: Since the Gâteaux differential is linear in \( h \), the Fréchet derivative is the same as the Gâteaux differential. In this case, \( \D l(x) = l \).


??? example "Quadratic functionals"
    For a general idea of the concepts here, see the [Wikipedia article on quadratic forms](https://en.wikipedia.org/wiki/Quadratic_form#Definitions).

    Let \( q: 𝒳 → ℝ: x ↦ b_q(x, x) \), where \( b_q: 𝒳 × 𝒳 → ℝ \) is the associated bilinear form of a quadratic form \( q \) defined by

    \[ b_q(x, y) = \frac12 \brnd{q(x + y) - q(x) - q(y)} . \]

    Note that \( b_q \) is symmetric from the defition.

    *Gâteaux differential*

    \begin{align*}
        \d_h q(x)  & =  \lim_{t → 0} \frac1t \brnd{q(x + t h) - q(x)}  \\
            & =  \lim_{t → 0} \frac1t \brnd{b_q(x + t h, x + t h) - b_q(x, x)}  \\
            & =  \lim_{t → 0} \frac{1}{\bcancel{t}} \brnd{\cancel{b_q(x, x)} + \bcancel{t} b_q(h, x) + \bcancel{t} b_q(x, h) + t^{\bcancel2} b_q(h, h) - \cancel{b_q(x, x)}}  \\
            & =  \lim_{t → 0} \frac{\cancel{\inn{x, T x}} + \bcancel{t} \inn{x, T h} + \bcancel{t} \inn{h, T x} + t^\bcancel{2} \inn{h, T h} - \cancel{\inn{x, T x}}}{\bcancel{t}}  \\
            & =  b_q(x, h) + b_q(h, x)  \\
            & =  b_q(h, 2x)  \\
    \end{align*}

    *Fréchet derivative*: The linearity of the Gâteaux differential shows us that the Fréchet derivative is the same. In this case, \( \D f(x): 𝒳 → ℝ: h ↦ b_q(h, 2x) \).


##  Summary

### Relationship between the two derivatives

!!! proposition "Implications"
    Fréchet differentiability implies Gâteaux differentiability.

??? proof

    Assume \( f: 𝒳 → 𝒴 \) has Fréchet derivative \( \D f(x) \) at \( x ∈ 𝒳 \). Now,

    \begin{align*}
            &  \norm{\frac{f(x + t v) - f(x)}{t} - \D f(x)(v)}_𝒴  \\
        = &  \frac{\norm{f(x + t v) - f(x) - \D f(x)(v) t}_𝒴}{\abs{t} \norm{v}_𝒳} \norm{v}_𝒳  \\
        = &  \frac{\norm{f(x + t v) - f(x) - \D f(x)(tv)}_𝒴}{\norm{t v}_𝒳} \norm{v}_𝒳 → 0 \\
    \end{align*}

    as \( t → 0 \) since \( \norm{t v}_𝒳 → 0 \) as \( t → 0 \) and \( f \) is Fréchet differentiable.

!!! note
    The converse of the above proposition is not true, as is shown by the counterexample.

    \[ f(x, y) = \frac{x^3}{x^2 + y^2} 𝟙_{(x, y) ≠ (0, 0)}(x, y) . \]


The Fréchet differentiability is a stronger notion. The Fréchet derivative contains information about the rate of change of *the norm of the function* about a particular point independent of direction. It is true to the spirit of the original derivative in the sense that it is still linear. Its existence guarantees the existence of the Gâteaux differential.

The Gâteaux differentiability is a strictly weaker notion. The Gâteaux differential need not be linear, and its existence does not imply the existence of the Fréchet derivative. In fact, its existence at a point does not even guarantee the continuity of the function at that point. It gives us the rate of change of a function *only* in a particular direction. This rate of change is not just of the norm, but of the vector output itself. The Gâteaux differential only requires that the difference quotients converge along the specific direction; there is no requirement about the rates of convergence for different directions. Thus, in order for a linear Gâteaux differential to imply the existence of the Fréchet derivative, the difference quotients have to converge *uniformly* for all directions.

So even though Gâteaux differentiability is closer to the definition of the deriviative in \( 1 \)-dimensional spaces, the Fréchet derivative is closer to the true sprit of the derivative as it gives us a local linear approximation of the function.

In general, in the infinite dimensional spaces, there are usually reasonably satisfactory results on the existence of Gâteaux differentials of Lipschitz functions. On the other hand, similar results on existence of Fréchet derivatives are rare and usually very hard to prove.

From an application perspective, one can see that there is an analogy with the definition of limits. On the one hand, the Gâteaux differential is like the intuitive definition, which we use to *compute* limits. On the other hand, the Fréchet derivative is like the \( ε \)-\( δ \) definition that we use to *prove* that the limit we found actually holds.

Therefore, there are significant differences in the two derivates, and each has its own pros and cons. In life, and even more so in mathematics, there is no free lunch. The choice among the two then depends on the requirement. In many applications, we *require* Fréchet derivatives as they provides a genuine local linear approximations unlike the Gâteaux differentials.

It is important to remember that if a function is Fréchet differentiable, then it is also Gâteaux differentiable, and the two derivatives are equal.

The following table highlights some of the differences.

| property     | Gâteaux differentials   | Fréchet derivative          |
|:-------------|:------------------------|:----------------------------|
| strength     | weaker                  | stronger                    |
| utility      | computation             | verification/proofs         |
| direction    | dependent               | independent                 |
| linear       | not necessarily         | yes                         |
| in \( ℝ^d \) | directional derivatives | total derivative / Jacobian |


<!-- # ToDo

*   Chain rule
*   Product rule
*   More examples
*   FTC
 -->

##  Applications

### Ordinary least squares

In this section, we shall use what we learned to derive the normal equations in the [ordinary least squares method](https://en.wikipedia.org/wiki/Ordinary_least_squares).

The problem setup is as follows. Our data consists of \( n \) observations, \( \bcrl{(x_i, y_i): i ∈ [n]} \), where \( y_i \) is the scalar *output* and \( x_i \) is a \( p \)-dimensional vector of *input* values. In a [linear regression model](https://en.wikipedia.org/wiki/Linear_regression), the output variable is a linear function of the input variables, so

\[ y_i = x_i^* β + ε_i , \]

where \( β \) is a \( p \)-dimensional vector assigning weightages to each variable according to their importance in predicting the output, and the scalars \( ε_i \) represent the errors. This model can be written in matrix notation as

\[ y = X β + ε , \]

where \( y \) and \( ε \) are \( n \)-dimensional vectors of the values of the output and the errors for the various observations, and \( X \) is an \( n × p \) matrix of the inputs.

Our goal is to get \( \hat{β} \) which minimizes the squared errors (\( ℓ^2 \)-norm). That is, we want to minimize

\begin{align*}
    e(β)  & =  \frac12 \norm{ε}_2^2  \\
        & =  \frac12 \inn{ε, ε}  \\
        & =  \frac12 \inn{X β - y, X β - y}  \\
        & =  \frac12 \brnd{\inn{X β, X β} - 2 \inn{X β, y} + \inn{y, y}}  \\
        & =  \frac12 \inn{β, X^* X β} - \inn{β, X^* y} + \frac12 \inn{y, y}  \\
\end{align*}

First, notice that \( X^* X \) is self-adjoint, that is, \( (X^* X)^* = X^* X \). Now, using the results from the section [Inner product spaces](#inner-product-spaces), we get the Fréchet derivative

\begin{align*}
    De(β) h  & =  \frac12 \inn{h, (X^* X + (X^* X)^*) β} - \inn{h, X^* y}  \\
        & =  \frac{1}{\cancel2} \inn{h, \cancel2 X^* X β} - \inn{h, X^* y}  \\
        & =  \inn{h, X^* (X β - y)} , \\
\end{align*}

where we used the fact that an inner product in a real vector space is linear also in the second argument.

For a minimum, we want \( De(\hat{β}) h = 0 \) for any \( h \). This is only possible if \( X^* (X \hat{β} - y) = 0 \), which gives us our optimality condition

\begin{equation}
    \hat{β} = (X^* X)^{-1} X^* y .
\end{equation}


### Convex conjugate of a bilinear form

!!! tip
    For intuition behind the convex conjugate, see this [post by Nick Alger](https://physics.stackexchange.com/questions/4384/physical-meaning-of-legendre-transformation/9360).

Let \( (𝒳, \inn{⋅, ⋅}) \) be a real inner product space, and \( 𝒳^* \) be the dual space to \( 𝒳 \). Denote the dual pairing by \( (⋅, ⋅): 𝒳^* × 𝒳 → ℝ \). Let \( f: 𝒳 → ℝ: x ↦ \inn{x, Q x} \) for some symmetric, invertible operator \( Q \). We want to find the [convex conjugate](https://en.wikipedia.org/wiki/Convex_conjugate) of \( f \), that is, \( f^*:𝒳^* → ℝ: ϕ ↦ \sup_{x ∈ 𝒳} \brnd{(ϕ, x) - f(x)} \).

Essentially, we have to find the supremum of the function \( g(x) = \inn{ϕ, x} - \frac12 \inn{x, Q x} \), where we identified \( ϕ \) with its canonical representative in \( 𝒳 \). Using the results from the section [Inner product spaces](#inner-product-spaces), we get

\[ d_h g(x) = \inn{h, ϕ} - \frac12 \inn{h, 2Cx} = \inn{h, ϕ - Cx} . \]

For the supremum, the derivative must be zero, that is \( ϕ = Cx \), or \( x = \inv{C} ϕ \). Putting this in the convex conjugate, we get

\[ f^*(ϕ) = \inn{\inv{C} ϕ, ϕ} - \frac12 \inn{\inv{C} ϕ, \cancel{C} \cancel{\inv{C}} ϕ} = \frac12 \inn{\inv{C} ϕ, ϕ} . \]


<!-- ##  References

Derivatives

*   [Kevin Long's notes](http://www.math.ttu.edu/~klong/5311-spr09/diff.pdf)
*   https://mathoverflow.net/questions/22255/usefulness-of-frechet-versus-Gâteaux-differentiability-or-something-in-between
*   https://math.stackexchange.com/questions/23902/what-is-the-practical-difference-between-a-differential-and-a-derivative
*   https://faculty.arts.ubc.ca/pschrimpf/526/calculus-526.pdf
*   http://individual.utoronto.ca/jordanbell/notes/frechetderivatives.pdf
*   https://en.wikipedia.org/wiki/Derivative
*   https://en.wikipedia.org/wiki/Directional_derivative
*   https://en.wikipedia.org/wiki/Generalizations_of_the_derivative
*   https://en.wikipedia.org/wiki/Fréchet_derivative
*   https://en.wikipedia.org/wiki/Gâteaux_derivative
*   https://en.wikipedia.org/wiki/Jacobi_operator

Matrix calculus

*   https://en.wikipedia.org/wiki/Matrix_calculus
*   https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf
*   https://ccrma.stanford.edu/~dattorro/matrixcalc.pdf
*   http://www.matrixcalculus.org/
*   https://explained.ai/matrix-calculus/
*   https://atmos.washington.edu/~dennis/MatrixCalculus.pdf

Calculus in Banach spaces

*   https://www.johndcook.com/Differentiation_in_Banach_spaces.pdf
*   https://math.stackexchange.com/questions/291318/derivative-of-the-2-norm-of-a-multivariate-function
*   https://math.stackexchange.com/questions/659712/derivative-on-hilbert-space
*   http://www.math.ucsd.edu/~bdriver/231-02-03/Lecture_Notes/chap22.pdf
https://www.math.ucdavis.edu/~hunter/book/ch13.pdf
*   http://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf
*   https://math.byu.edu/~bakker/Math634/Math634Lectures/Lec19.pdf
 -->
