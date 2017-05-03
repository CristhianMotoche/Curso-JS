# Variables
## Data types in JavaScript
There are some data types in JS:
- Numbers
  - JavaScript Numbers are Always 64-bit Floating Point
  - This format stores numbers in 64 bits, where the number (the fraction) is stored
  in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

|Mantissa|Exponent|Sign|
----
|52 bits(0-51)|11 bits (52-62)|1 bit (63)|

  - Precision
    - Integers (numbers without a period or exponent notation) are considered accurate up to 15 digits.
    - The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
- String
- Bool
- Array
- Object
- Date
- Function

## Bottom types
- undefined
- null

## Difference between Undefined and Null

```javascript
typeof undefined           // undefined
typeof null                // object
null === undefined         // false
null == undefined          // true
```

Use `typeof` to see the data type of a indentifier or a value.

## Define variables
Using the keyword `var`.

**JavaScript evaluates expressions from left to right.**

Notes taken from: [W3C][w3c]
[w3c]: https://www.w3schools.com/js/js_datatypes.asp
