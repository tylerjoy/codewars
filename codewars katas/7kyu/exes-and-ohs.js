function XO(str) {
  const xArr = str
                .toLowerCase()
                .split('')
                .filter((letter) => letter ==='x')
  
  const oArr = str
                .toLowerCase()
                .split('')
                .filter((letter) => letter ==='o')

  return xArr.length === oArr.length
    