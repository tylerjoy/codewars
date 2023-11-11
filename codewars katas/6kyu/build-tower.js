function towerBuilder(nFloors) {
  let towerArr = []
  for(i=0;i<nFloors;i++){
    towerArr.push(
      ' '.repeat((nFloors - i) - 1)
      + '*'.repeat((i * 2) + 1)
      + ' '.repeat((nFloors - i) - 1)
    )
  }
  return towerArr
}