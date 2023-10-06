function leaderB(user, user_score, your_score){
  var diff = user_score - your_score
  
  if (diff < 0)
    return "Winning!"
  if (diff == 0)
    return "Only need one!"
  
  var beta = ~~(diff/3), eight = diff % 3
  
  return `To beat ${user}'s score, I must complete ${beta} Beta kata and ${eight} 8kyu kata.` + (beta+eight > 1000 ? " Dammit!" : "")
  }