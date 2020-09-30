#   Assignment 1

!!! exercise "V3.1.8"
    Suppose \( A ∖ B ⊆ C ∩ D \) and \( x ∈ A \). Prove that if \( x ∉ D \) then \( x ∈ B \).

!!! proof
    Suppose \( x ∉ D \). Then clearly \( x ∉ C ∩ D \). Since \( A ∖ B ⊆ C ∩ D \), we conclude that \( x ∉ A ∖ B = A ∩ B^∁ \). Using De Morgan's laws, \( x ∈ (A ∩ B^∁)^∁ = A^∁ ∪ B \). So either \( x ∉ A \) or \( x ∈ B \). But since by assumption \( x ∈ A \), we must have \( x ∈ B \).


!!! exercise "V3.2.3"
    Suppose \( A ⊆ C \), and \( B \) and \( C \) are disjoint. Prove that if \( x ∈ A \) then \( x ∉ B \).

!!! proof
    Suppose \( x ∈ A \). Since \( A ⊆ C \), we have \( x ∈ C \). Now, if \( x ∈ B \), then \( x ∈ B ∩ C \), which is a contradiction since \( B \) and \( C \) are disjoint. Therefore and \( x ∉ B \).


!!! exercise "V3.2.7"
    Use the method of proof by contradiction to prove the theorem in Example 3.2.5, which states that if \( A ⊆ B \), \( a ∈ A \), and \( a ∉ B ∖ C \), Then \( a ∈ C \).

!!! proof
    Suppose \( a ∉ C \). Since \( a ∈ A \) and \( A ⊆ B \), we have \( a ∈ B \). Note that \( a ∉ B ∖ C \) is equivalent to saying \( a ∈ (B ∩ C^∁)^∁ = B^∁ ∪ C \). So \( a ∉ B \) or \( a ∈ C \). So we have two cases.

    *   Case 1: \( a ∉ B \). This gives us a contradiction as we have already seen that \( a ∈ B \).
    *   Case 2: \( a ∈ C \). This also gives a contradiction with our supposition that \( a ∉ C \).

    Since neither is true, and our supposition must be wrong, and we must have \( a ∈ C \).


!!! exercise "V3.3.2"
    Prove that if \( A \) and \( B \ C \) are disjoint, then \( A ∩ B ⊆ C \).

!!! proof
     Let \( x ∈ A ∩ B \) be arbitrary. Thus, \( x ∈ A \) and \( x ∈ B \). Now, if \( x ∉ C \), then \( x ∈ B ∖ C \). But this contradicts the fact that \( A \) and \( B \ C \) are disjoint since \( x \) belongs to both. Therefore, it must be that \( x ∈ C \). Since \( x \) was arbitrary, we have \( A ∩ B ⊆ C \).


!!! exercise "V3.4.6"
    Prove that for any sets \( A \), \( B \), and \( C \), we have \( A ∖ (B ∩ C) = (A ∖ B) ∪ (A ∖ C) \), by finding a string of equivalences starting with \( x ∈ A ∖ (B ∩ C) \) and ending with \( x ∈ (A ∖ B) ∪ (A ∖ C) \). (See Example 3.4.4.)

!!! proof
    Let \( x \) be arbitrary. Then

    \begin{align*}
        x ∈ A ∖ (B ∩ C)
        ⟺  x ∈ A ∧ x ∉ B ∩ C
        ⟺  x ∈ A ∧ ¬(x ∈ B ∩ C)
        ⟺  x ∈ A ∧ ¬(x ∈ B ∧ x ∈ C)
        ⟺  x ∈ A ∧ (x ∉ B ∨ x ∉ C)
        ⟺  (x ∈ A ∧ x ∉ B) ∨ (x ∈ A ∧ x ∉ C)
        ⟺  (x ∈ A ∖ B) ∨ (x ∈ A ∖ C)
        ⟺  x ∈ (A ∖ B) ∪ (A ∖ C)
    \end{align*}

    Thus, \( x ∈ A ∖ (B ∩ C) ⟺ x ∈ (A ∖ B) ∪ (A ∖ C) \), and consequently \( A ∖ (B ∩ C) = (A ∖ B) ∪ (A ∖ C) \).


!!! exercise "V3.4.8"
    Prove that for any sets \( A \) and \( B \), if \( 𝒫(A) ∪ 𝒫(B) = 𝒫(A ∪ B) \) then either \( A ⊆ B \) or \( B ⊆ A \).

!!! proof
    Suppose \( 𝒫(A) ∪ 𝒫(B) = 𝒫(A ∪ B) \), and that neither \( A ⊆ B \) nor \( B ⊆ A \), that is, there is \( a ∈ A ∖ B \) and \( b ∈ B ∖ A \). Then \( \bcrl{a, b} ∈ 𝒫(A ∪ B) ∖ (𝒫(A) ∪ 𝒫(B)) \), which contradicts our supposition. Therefore, we must have \( A ⊆ B \) or \( B ⊆ A \) if \( 𝒫(A) ∪ 𝒫(B) = 𝒫(A ∪ B) \).


!!! exercise "V3.5.7a"
    Let \( U \) be any set. Prove that there is a unique \( A ∈ 𝒫(U) \)such that for every \( B ∈ 𝒫(U) \), \( A ∩ B = B \).

!!! proof
    Suppose \( A = U \). Then \( A \) satisfies the existence criterion since \( U ∩ B = B \) for every \( B ∈ 𝒫(U) \). Now, if \( V ∈ 𝒫(U) \) also satisfies the existence criterion, then \( V = V ∩ U = U \), which gives us the uniqueness.