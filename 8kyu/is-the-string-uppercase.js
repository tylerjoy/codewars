// Create a method to see whether the string is ALL CAPS.
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


String.prototype.isUpperCase = function() {
  //assign local str variable to the object
  //turn string into array so chars can be iterated as elements
  let str = this.split('');
  //loop through arr while i is less than str length
  for(let i = 0; i < str.length; i++){
    //if char ar i is NOT the same as uppercase char on any single iteration, return false
    if(str[i] !== str[i].toUpperCase()) {
      return false;
    }
  }
    //else, return true. only two conditions so else is not needed
    return true;
  }