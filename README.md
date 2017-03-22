# logic-expression-simplify

Simplify logic expression. 

### Demo 
Repo: https://github.com/shamcode/simplifier
App: http://simplify.shamcode.ru

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
