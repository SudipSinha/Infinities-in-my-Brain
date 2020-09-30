# A story of numbers

## Map of the journey ahead

*   Set theoretic construction of numbers
*   How numbers relate to the physical world
*   Sets of numbers
*   Comparing the "size" of these sets of numbers


## Notations

As we go along, we will "invent" some objects, so we shall "create" words to talk about those objects. The following is a list of all the words we shall see. You should definitely skip this list in your first reading.

!!! note
    *    \( ℕ = \{0, 1, 2, … \} \)
    *    \( ℤ = \{…, -2, -1, 0, 1, 2, … \} \)


## What is a number?

!!! definition "prime"
    A prime number is an natural number which has only \( 1 \) and itself as divisors.

!!! theorem
    A number is even iff its square is even.

!!! definition "even"
    A number \( n \) is called even if it can be written as \( n = 2k \) for some integer \( k \).

!!! theorem "Euclid's theorem"
    \( \sqrt2 \) is not rational.

???+ proof
    We prove this by contradiction.

    Suppose \( \sqrt2 \) is rational. Then it can be written in the form \( \frac{p}{q} \), where \( p, q \) are integers with \( q ≠ 0 \). Assume that \( p \) and \( q \) have no common factors, for if they do, we can reduce the fraction to its lowest terms and then call the numerator \( p \) and the denominator \( q \).

    Squaring and simplifying, we get
    \begin{equation}  \label{eq:sqrt2-notin-Q}
        p^2 = 2 q^2 .
    \end{equation}
    This means \( p^2 \) is even. By the previous lemma, \( p \) is also even. Therefore, there exists an integer \( r \) such that \( p = 2 r \), and so \( p^2 = 4 r^2 \).

    Putting this in equation \eqref{eq:sqrt2-notin-Q}, we get \( 4 r^2 = 2 q^2 \), which is the same as \( 2 r^2 = q^2 \). This means that \( q^2 \), and thus \( q \), is even.

    But we had assumed that \( p \) and \( q \) have no common factors. Thus we have a contradiction. Therefore, our supposition must be wrong, and it must be that \( \sqrt2 \) is not rational.

<div class="theorem">
    \( \sqrt2 \) is not rational.
</div>

<div class="proof">
    We prove this by contradiction.

    Suppose \( \sqrt2 \) is rational. Then it can be written in the form \( \frac{p}{q} \), where \( p, q \) are integers with \( q ≠ 0 \). Assume that \( p \) and \( q \) have no common factors, for if they do, we can reduce the fraction to its lowest terms and then call the numerator \( p \) and the denominator \( q \).

    Squaring and simplifying, we get
    \begin{equation}  \label{eq:sqrt2-notin-Q-v1}
        p^2 = 2 q^2 .
    \end{equation}
    This means \( p^2 \) is even. By the previous lemma, \( p \) is also even. Therefore, there exists an integer \( r \) such that \( p = 2 r \), and so \( p^2 = 4 r^2 \).

    Putting this in equation \eqref{eq:sqrt2-notin-Q-v1}, we get \( 4 r^2 = 2 q^2 \), which is the same as \( 2 r^2 = q^2 \). This means that \( q^2 \), and thus \( q \), is even.

    But we had assumed that \( p \) and \( q \) have no common factors. Thus we have a contradiction. Therefore, our supposition must be wrong, and it must be that \( \sqrt2 \) is not rational.
</div>