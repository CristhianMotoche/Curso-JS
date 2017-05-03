# Functions
A JavaScript function is a block of code designed to perform a particular task:


- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self invoked)

A JavaScript function is executed when "something" invokes it (calls it).

When JavaScript reaches a `return` statement, the function will stop executing.

```javascript
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
```

- toCelsius(3) <- Function execution
- toCelsius <- Function definition
