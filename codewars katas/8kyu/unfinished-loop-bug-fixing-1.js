function createArray(number){
  var newArray = [];
  //FIXME: Bug from missing increment on counter var fixed
  for(var counter = 1; counter <= number;counter++){
    newArray.push(counter);
  }
  
  return newArray;
}