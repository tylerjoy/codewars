function countSheeps(arrayOfSheep) {
  const sheep = arrayOfSheep.filter(Boolean).length
  return sheep
}