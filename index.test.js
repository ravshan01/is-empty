const isEmpty = require('./index');


test('empty object', () => expect( isEmpty({}) ).toBe(true) );
test('data object',  () => expect( isEmpty({ test: [] }) ).toBe(false) );

test('empty array', () => expect( isEmpty([]) ).toBe(true) );
test('data array',  () => expect( isEmpty([ 1, '2', null ]) ).toBe(false) );

test('empty string', () => expect( isEmpty('') ).toBe(true) );
test('data string',  () => expect( isEmpty('Hello World') ).toBe(false) );

test('empty map', () => expect( isEmpty(new Map()) ).toBe(true) );
test('data map',  () => expect( isEmpty(new Map([ ['data', 'Hello World'] ])) ).toBe(false) );

test('empty set', () => expect( isEmpty(new Set()) ).toBe(true) );
test('data set',  () => expect( isEmpty( new Set([ 'Hello', 'World' ]) ) ).toBe(false) );

test('negative number', () => expect( isEmpty(-5) ).toBe(true) );
test('zero number',     () => expect( isEmpty(0) ).toBe(true) );
test('positive number', () => expect( isEmpty(5) ).toBe(false) );

test('false boolean', () => expect( isEmpty(false) ).toBe(true) );
test('true boolean',  () => expect( isEmpty(true) ).toBe(false) );

test('empty Symbol', () => expect( isEmpty(Symbol()) ).toBe(true) );
test('data Symbol', () => expect( isEmpty(Symbol('Hello')) ).toBe(false) );

test('undefined', () => expect( isEmpty(undefined) ).toBe(true) )
test('null', () => expect( isEmpty(null) ).toBe(true) );
test('NaN', () => expect( isEmpty(NaN) ).toBe(true) );
