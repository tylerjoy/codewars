function scrabbleScore(str){
  let score = 0
  upperCaseArr = str.toUpperCase().split('')
  upperCaseArr.forEach( letter => {
    score += $dict.hasOwnProperty(letter) ? $dict[letter] : 0 
  })
  return score
}