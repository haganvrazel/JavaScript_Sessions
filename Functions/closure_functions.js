/**
 * Closure means an inner function.
 * Closuer function always has access to the vars and parameters of outer function.
 */

function Counter() {
     var counter = 0;
     function increaseCounter() {
         return counter += 1;
     }
     return increaseCounter;
 }

 var counter = Counter();
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());