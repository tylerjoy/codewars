//function
// function squareOrSquareRoot(array) {
//   return array.map(n => {
//       const i = Math.sqrt(n)
//       return (i % 1 == 0) ? i : (i * i)
// })
// }

//singular line
const squareOrSquareRoot = array => array.map(num => Math.sqrt(num) % 1 == 0 ? Math.sqrt(num) : num * num)