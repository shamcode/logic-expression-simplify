logic-expression-simplify
=========================

Simplify logic expression

Samples:
```
simplify('(a == true) && (b == false)') => 'a && !b'
simplify('(a && b) || (!a && !b)') => 'a == b'
simplify('(a && b) || !a == true') => '!a || b'
simplify('(a && b) || a') => 'a'
```
