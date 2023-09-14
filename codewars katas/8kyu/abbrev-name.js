function abbrevName(name){
  //returns an array with seperator to define individual elements. Maps the first character of each element in uppercase to a new array, joined with a period.
  return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}