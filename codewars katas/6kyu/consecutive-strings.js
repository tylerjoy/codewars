function longestConsec(strarr, k) {
  const n = strarr.length
  
  if(n === 0 || k > n || k <= 0){
    return ''
  }

longestString = ''

for( i = 0; i <= n - k; i++ ){
  currentString = strarr.slice(i, i + k).join('')
  if(currentString.length > longestString.length){
    longestString = currentString
  }
}
return longestString
}