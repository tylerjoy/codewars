// function getDrinkByProfession(param){
//   param = param.toLowerCase()
//   let output = ""

//   if(param === 'jabroni') {
//     output = 'Patron Tequila'
//   }else if (param === 'school counselor'){
//     output = 'Anything with Alcohol'
//   }else if (param === 'programmer'){
//     output = 'Hipster Craft Beer'
//   }else if (param === 'bike gang member'){
//     output = 'Moonshine'
//   }else if (param === 'politician'){
//     output = 'Your tax dollars'
//   }else if (param === 'rapper'){
//     output = 'Cristal'
//   }else{
//     output = 'Anything with Alcohol'
//   }

//   return output
// }


const drinks = {
  'jabroni' : 'Patron Tequila',
  'school counselor' : 'Anything with Alcohol',
  'programmer' : 'Hipster Craft Beer',
  'bike gang member' : 'Moonshine',
  'politician' : 'Your tax dollars',
  'rapper' : 'Cristal',
}

const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || 'Beer'



console.log(getDrinkByProfession('jabroni'))