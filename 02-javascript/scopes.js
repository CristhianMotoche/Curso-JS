var outerFunction  = function(){

   if(true){
      var x = "Outer";
      console.log(y); //line 1, ReferenceError: y not defined
   }

   var nestedFunction = function() {

      if(true){
         var y = "Inner";
         console.log(x); //line 2, x will still be known prints "Outer"
      }

      if(true){
         console.log(y); //line 3, prints "Inner"
       }
   };
   return nestedFunction;
};

var myFunction = outerFunction();
myFunction();
