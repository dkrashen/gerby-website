
    MathJax.Hub.Config({
      extensions: ['tex2jax.js'],
      preferredFont: "STIX",
      jax: ['input/TeX','output/HTML-CSS'],
      TeX: {extensions: ['AMSmath.js', 'AMSsymbols.js', '/static/XyJax/extensions/TeX/xypic.js'],
      TagSide: 'left'},
      tex2jax: {
        inlineMath: [['$','$']],
        displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
      },
      'HTML-CSS': { scale: 85 }
    });
