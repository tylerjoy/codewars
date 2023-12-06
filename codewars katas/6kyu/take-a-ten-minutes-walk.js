function isValidWalk(walk) {
  let n = 0
  let e = 0
  let s = 0
  let w = 0
  
  walk.forEach((el)=> {
    if(el === 'n'){
      n += 1
    }else if(el === 'e'){
      e += 1
    }else if(el === 's'){
      s += 1
    }else if(el === 'w'){
      w += 1
    }
  })
   
   return n + e + s + w === 10 && n === s && e === w ? true : false
   
 }