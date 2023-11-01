function positiveSum(arr) {
  //loop using filter of positive nums
  //reduce
  //return sum of positive ints only or 0
  return arr.filter((num)=> num > 0).reduce((acc,sum)=> acc+sum, 0)
}