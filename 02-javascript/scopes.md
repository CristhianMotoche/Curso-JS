# Lexical Scoping

First off, JavaScript has *lexical scoping* with *function scope*. In other words,
even though JavaScript looks like it should have block scope because it uses curly
braces { }, a new scope is created only when you create a new function.

In order to resolve variables, JavaScript starts at the innermost scope and searches
outwards until it finds the variable it was looking for.

Notes taken from: [Kaitlin Davis][blog-kd-js-scope]

[blog-kd-js-scope][https://spin.atomicobject.com/2014/10/20/javascript-scope-closures/]
