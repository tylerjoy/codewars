//function
// let hotpo = function(n){
//   //set number calcs to 0
//   let numCalcs = 0

//   //while number is greater than 1 
//     //and if number is odd, mult by 3 and add 1, add one to number calcs
//     //and if number is even, div by 2, add one to number calcs
//   while (n > 1){
//     if(n % 2){
//       n = ( n * 3 ) + 1
//     }else{
//       n /= 2
//     }
//     numCalcs++
//   }
//   return numCalcs
// }

//single line (recursive)
const hotpo = n => n < 2 ? 0 : hotpo(n % 2 ? 3 * n + 1 : n / 2) + 1;