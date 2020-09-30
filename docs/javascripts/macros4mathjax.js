window.MathJax = {
	loader: {load: ["[tex]/cancel", "input/tex", "output/chtml"]},
	// http://docs.mathjax.org/en/latest/input/tex/extensions.html
	// http://docs.mathjax.org/en/latest/output/index.html
	tex: {
		packages: {"[+]": ["cancel"]},
		tags: "ams",    // http://docs.mathjax.org/en/latest/input/tex/eqnumbers.html
		macros: {    // http://docs.mathjax.org/en/latest/input/tex/macros.html
			// Brackets
			brnd: [" \\left( #1 \\right) ", 1],
			bcrl: [" \\left\\{ #1 \\right\\} ", 1],
			bsqr: [" \\left[ #1 \\right] ", 1],
			// Commonly used delimiters
			abs: [" \\left| #1 \\right| ", 1],
			norm: [" \\left\\lVert #1 \\right\\rVert ", 1],
			inn: [" \\left\\langle #1 \\right\\rangle ", 1],
			pair: [" \\left⟨ #1 \\right⟩ ", 1],
			floor: [" \\left⌊ #1 \\right⌋ ", 1],
			ceil: [" \\left⌈ #1 \\right⌉ ", 1],
			// Differentials
			d: ["\\mathrm{d}"],
			D: ["\\mathrm{D}"],
			// Miscellaneous
			inv: ["{#1}^{-1}", 1],
		}
	}
};
