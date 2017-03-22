# logic-expression-simplify

Simplify logic expression. Demo app: https://github.com/shamcode/simplifier

### Install
```bash
npm install logic-expression-simplify
```

### Usage 
```js
import simplify from 'logic-expression-simplify';

const result = simplify( '(a && b) || (!a && !b)' );
// result === 'a == b';
const result = simplify( 'a || (!a && !b)' );
// result === 'a || !b';
```
