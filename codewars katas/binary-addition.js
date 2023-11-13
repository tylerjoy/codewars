function addBinary(a,b) {
  let sum = a + b
  let reverseStr = ''
  while (sum != 0){
    reverseStr += sum % 2
    sum = Math.floor(sum / 2)
  }
  return reverseStr.split('').reverse().join('')
}