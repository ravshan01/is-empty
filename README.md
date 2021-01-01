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
  const empty = require('@ravshan01/is-empty');

  empty([]);              // true
  empty({});              // true
  empty('');              // true
  empty(0);               // true
  empty(function(){});    // true
  empty(null);            // true
  empty(undefined);       // true
  empty(new Map());       // true
  empty(new Set());       // true

  empty(true);            // false
  empty(false);           // false
  empty(['a', 'b']);      // false
  empty({ a: 'b' });      // false
  empty('string');        // false
  empty(42);              // false
  empty(function(a,b){}); // false
  empty(new Map([['key', 'value']])); // false
  empty(new Set([1]));    // false
```