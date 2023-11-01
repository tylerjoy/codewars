function stringy(size) {
  let string = ""
  
      for(i=0;i<size;i++){
        if(i % 2 === 0) {
          string += 1
        } else if(i % 2 === 1) {
          string += 0
        }
      }
      return string
    }