function longestConsec(strarr, k) {
  
  if(strarr.length === 0 || k > strarr.length || k < 0){
    return ""
  }
  
  slicedArr = strarr.map( (e, i, a)=> a.slice(i, i + k).join('') )
  
  sortedArr = slicedArr.sort((a, b)=> {
    return a.length - b.length
  })
  
  console.log(sortedArr)
  return sortedArr.slice(-1).join()

}