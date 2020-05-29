#   Recipe for a markdown math blog

The goal here is to set up a blog which can process math written in the standard \( \LaTeX \) notation within markdown. In particular, the end product should be able to process *inline math* using `\( \)` tags, *display math* using `\[ \]`, and be able to process `begin..end` blocks.

If you are not looking for that, there are much simpler ways to set up a blog. I would recommend you look at [Blogger](https://www.blogger.com/) or [Wordpress](https://wordpress.com/read) if you are looking for a simpler setup.

In this tutorial, I will assume that you have some familiarity with with git and with installing software.


##  Ingredients

*   [git](https://git-scm.com/) for source control.
*   [GitHub](https://github.com/) (or your favorite source control repository service) for an online home of the source code.
*   A Python distribution (I use [miniconda](https://docs.conda.io/en/latest/miniconda.html), but feel free to use [Anaconda](https://www.anaconda.com/products/individual) or a bare bones Python setup). If you use any other method, please replace `conda ...` with `pip ...` or whatever is appropriate for the purpose.
*   [MkDocs](https://www.mkdocs.org/) as the static site generator. Pros:
    *    simple to deploy
    *    produces really pretty outputs
    *    built on top of [Python](https://www.python.org/)
    *    allows live preview of changes
    *    easily customizable
    *    open-source
*   [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) for the material theme.
*   Math (currently only MathJax works for `begin..end` blocks) For rendering mathematical formulas in \( \LaTeX \), we can use either of the following two JavaScript libraries.
    *   [MathJax](https://www.mathjax.org/): The setup is way simpler.
    *   [KaTeX](https://katex.org/): Much [faster](https://www.intmath.com/cg5/katex-mathjax-comparison.php).

        ==ToDo==: ask how to link Arithmatex and KaTeX for `begin..end` blocks.


##  Directions

### Essentials

*   Install `git`, the Python distribution, `mkdocs` and `mkdocs-material`.

!!! tips "If you are using `conda`"
    *   Install [miniconda](https://docs.conda.io/en/latest/miniconda.html) (or Python 3 directly).
    *   Add the [`conda-forge` repository](https://conda-forge.org/) (`conda config --add channels conda-forge`).
    *   Install [MkDocs](https://www.mkdocs.org/): `conda install mkdocs`.
    *   Install [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/): `conda install mkdocs-material`.
*   [Create a repository](https://help.github.com/en/github/getting-started-with-github/create-a-repo) in GitHub. We shall call it `<mathblog>` from now on. To the `.gitignore` add the line `site/`.
*   [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) the repository (`git clone <repository-url>`) on your local machine.
*   In the folder containing the repository, run `mkdocs new <mathblog>`. This generates all the required files for MkDocs.
*   Now enter the `<mathblog>` directory (`cd <mathblog>`), and run `mkdocs serve &`. If you do not have any errors, go to `http://127.0.0.1:8000/` in your web browser. You should see the home page of your (to be created) website. If you get the error `pkg_resources.DistributionNotFound: The 'mkdocs-material-extensions>=1.0' distribution was not found and is required by the application`, then install [`MkDocs Material Extensions`](https://pypi.org/project/mkdocs-material-extensions/) using `pip` (`pip install mkdocs-material-extensions`) since there is not conda package for it yet (check!).
*   To check if everything is in order, create a folder inside `docs/` and create an markdown document within the folder. This file should automatically show in the website.
*   Congratulation, we have set up the basic website. From now on, all modifications will be in the `mkdocs.yml`, so I will not mention this explicitly.


### Math
We need either MathJax or KaTeX to process \( \LaTeX \). As I mentioned earlier, we shall use MathJax since I have yet to figure out how to process `begin..end` blocks in KaTeX. The [Arithmatex](https://facelessuser.github.io/pymdown-extensions/extensions/arithmatex/#loading-katex) [pages](https://facelessuser.github.io/MarkdownPreview/extras/#katex-support) do talk about using KaTeX, but these did not work for me.

First, we need to enable the Arithmatex extension.
```yaml
markdown_extensions:
  - pymdownx.arithmatex:
      generic: true
```

Now we need to add relevant scripts.

=== "MathJax"
    `mkdocs.yml`
    ```yaml
    extra_javascript:
      - https://polyfill.io/v3/polyfill.min.js?features=es6
      - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
    ```

=== "KaTeX"
    `mkdocs.yml`
    ```yaml
    extra_javascript:
      - js/arithmatex2katex.js
      - https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js
      - https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js

    extra_css:
      - css/katex.my.css
      - https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css
    ```

    `docs/js/arithmatex2katex.js`
    ```js
    (function () {
    'use strict';

    var katexMath = (function () {
        var maths = document.querySelectorAll('.arithmatex'),
            tex;

        for (var i = 0; i < maths.length; i++) {
          tex = maths[i].textContent || maths[i].innerText;
          if (tex.startsWith('\\(') && tex.endsWith('\\)')) {
            katex.render(tex.slice(2, -2), maths[i], {'displayMode': false});
          } else if (tex.startsWith('\\[') && tex.endsWith('\\]')) {
            katex.render(tex.slice(2, -2), maths[i], {'displayMode': true});
          }
        }
    });

    (function () {
      var onReady = function onReady(fn) {
        if (document.addEventListener) {
          document.addEventListener("DOMContentLoaded", fn);
        } else {
          document.attachEvent("onreadystatechange", function () {
            if (document.readyState === "interactive") {
              fn();
            }
          });
        }
      };

      onReady(function () {
        if (typeof katex !== "undefined") {
          katexMath();
        }
      });
    })();

    }());
    ```

    `docs/css/katex.my.css`
    ```css
    .katex {
      font-size: 1.1em !important;    /* Smaller fonts for inline math */
    }

    .katex-display > .katex {
      font-size: 1.21em !important;    /* Larger fonts for display math */
    }

    .katex-html {
      overflow-y: hidden;
    }
    ```

Now write some math in your markdown files and test them out. They should render normally.

!!! note "[`markdown-katex`](https://pypi.org/project/markdown-katex/)"
    This package can only handle syntaxes in a particular format, namely ` $``…``$ ` (not two backticks but one) and ` ```math … ``` `. There are specific advantages to this, but it means I *cannot* copy-paste code between my website and \( \LaTeX \) documents, which is *not* what I want.

!!! note "Local installation"
    We do *not* need to install MathJax or KaTeX locally. Both are obtained directly from a CDN.

!!! ToDo
    *   Writing macros: See http://docs.mathjax.org/en/latest/input/tex/macros.html for MathJax and https://katex.org/docs/options.html for KaTeX.
    *   Write a CSS to customize Admonition for theorems and proofs.
        *   https://latex.now.sh/
        *   http://drz.ac/2013/01/17/latex-theorem-like-environments-for-the-web/
        *   https://squidfunk.github.io/mkdocs-material/extensions/admonition/
        *   https://python-markdown.github.io/extensions/admonition/
        *   https://codepen.io/haishanh/pen/zqqbmq/?editors=1100
        *   Modify https://github.com/Python-Markdown/markdown/blob/master/markdown/extensions/admonition.py
        *   https://www.w3schools.com/cssref/pr_gen_counter-increment.asp


### Extensions and plugins

*   ==ToDo== For graphs, we use the [MkDocs integration](https://github.com/sebastienwarin/mkdocs-mermaid-plugin) for [`mermaid`](https://mermaid-js.github.io/mermaid/). I have not been able to get this running. For an example of what it should look like, see [here](https://facelessuser.github.io/pymdown-extensions/extensions/superfences/#uml-diagram-example).
*   For each of the following plugins, install the plugin, *restart the server*, and add the necessary entry under `plugins` in `mkdocs.yml`. Further description of each plugin can be found in the respective pages.
*   [Search](https://squidfunk.github.io/mkdocs-material/plugins/search/)
*   [Minification](https://squidfunk.github.io/mkdocs-material/plugins/minification/): minifies all `*.html` files generated by `mkdocs build` in a post-processing step, stripping all unnecessary characters to reduce the payload served to the client.
*   [Revision date](https://squidfunk.github.io/mkdocs-material/plugins/revision-date/): adds the date on which a Markdown file was last updated at the bottom of each page.
*   [Awesome pages](https://squidfunk.github.io/mkdocs-material/plugins/awesome-pages/): omits the need to specify all pages in the nav entry of `mkdocs.yml`. For options, see https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin/ and @lukasgeiter/mkdocs-awesome-pages-plugin.


##  Presentation

Now that we are happy with our creation, it is time for us to show our work to the world. Before we go ahead, we [commit](https://guides.github.com/activities/hello-world/) to our changes using `git commit -a` and push the commit to the `origin` using `git push`.

Now run `mkdocs gh-deploy` to create a separate branch called `gh-pages` for our website. Finally, go to the GitHub Pages settings of your repository and choose the source as `gh-pages branch`. Now our website is live! Check this by visiting the link to your website as shown in your GitHub Pages settings.


##  Garnishing

### Extensions
The [Python Markdown extensions](https://facelessuser.github.io/pymdown-extensions/) are a set of extrememly useful extensions. For more extensions, see the Extensions pages of [SquidFunk's website for Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

[Mermaid](https://mermaid-js.github.io/mermaid/)

!!! note
    In `features` under `theme`, do not use
    *   `instant`, because it stops math from rendering without reloading, and
    *   `tabs`, because it just looks bad.

!!! tip
    For `social`, the icons can be found [here](https://github.com/squidfunk/mkdocs-material/tree/master/material/.icons/).


### Analytics

*   If you do not measure, you will not know. In order to measure traffic to our website, I am going to use [Google Analytics](https://analytics.google.com/). In Google Analytics, set up a `property` for your website.
*   Go to https://analytics.google.com/ and click `Set up for free`. Give an account name and go to the next page.
*   Select `Web` in the next page
*   Give the name and address of your website. It will create a Tracking ID, which we need to include.
    ```yaml
    google_analytics:
      - UA-XXXXXXXX-X
      - auto
    ```


### User interaction:

*   For comments, we can set up a [Disqus](https://disqus.com/)ion board.
*   The first step is to set up a Disqus account. If you do not have one, go to [Disqus signup](https://disqus.com/profile/signup/), and create a new account. If you have one, simply sign in.
*   The second step is to create a `Disqus website`. Go to [Disqus signup](https://disqus.com/profile/signup/), and click on `I want to install Disqus on my site`, and fill up the form. Now include your Disqus `Website Name` in the project.
    ```yaml
    extra:
      disqus: the-website-shortname
    ```
And we are done!


##  References

The links throughout the recipe were immensely helpful for me to set up the website (and create this document). I highly recommend you visit these sources for a better understanding of the processes and to customize the blog according to your tastes.

*   [MathML considered harmful](https://11011110.github.io/blog/2015/08/04/mathml-considered-harmful.html)


