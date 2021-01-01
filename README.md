# is-empty
function to check for null values



## Installation
```
npm install @ravshan01/isEmpty
#or
yarn add @ravshan01/isEmpty
```

## Example
```javascript
  const isEmpty = require('@ravshan01/is-empty');

  isEmpty([]);              // true
  isEmpty({});              // true
  isEmpty('');              // true
  isEmpty(0);               // true
  isEmpty(function(){});    // true
  isEmpty(null);            // true
  isEmpty(undefined);       // true
  isEmpty(new Map());       // true
  isEmpty(new Set());       // true

  isEmpty(true);            // false
  isEmpty(false);           // false
  isEmpty(['a', 'b']);      // false
  isEmpty({ a: 'b' });      // false
  isEmpty('string');        // false
  isEmpty(42);              // false
  isEmpty(function(a,b){}); // false
  isEmpty(new Map([['key', 'value']])); // false
  isEmpty(new Set([1]));    // false
```