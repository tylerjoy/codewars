
function arrayMash (array1, array2) {
  let mashedArr = []
  for(i=0;i<array1.length;i++){
    mashedArr.push(array1[i])
    mashedArr.push(array2[i])
  }
  return mashedArr
}