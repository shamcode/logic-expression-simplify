logic-expression-simplify
=========================

Simplify logic expression

Samples:
(a == true) && (b == false) => a && !b
(a && b) || (!a && !b) => a == b
(a && b) || !a == true => !a || b
(a && b) || a => a