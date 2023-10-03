function countSalutes(hallway) {
  let salutes = 0
  for(i=0;i<hallway.length;i++){
    if(hallway[i] === '>'){
      for(j = i + 1;j < hallway.length;j++){
        if(hallway[j] === '<'){
          salutes += 1
        }
      }
    }
  }
  return salutes * 2
}