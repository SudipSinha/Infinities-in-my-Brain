window.MathJax = {
	loader: {load: ["[tex]/cancel"]},    // http://docs.mathjax.org/en/latest/input/tex/extensions.html
	tex: {
		packages: {"[+]": ["cancel"]},
		tags: "ams",    // http://docs.mathjax.org/en/latest/input/tex/eqnumbers.html
		macros: {    // http://docs.mathjax.org/en/latest/input/tex/macros.html
			brnd: [" \\left( #1 \\right) ", 1],
			bcrl: [" \\left\\{ #1 \\right\\} ", 1],
			bsqr: [" \\left[ #1 \right] ", 1],
		}
	}
};
