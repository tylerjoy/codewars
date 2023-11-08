const getCount = str => [...str].reduce((a, c, i)=> +'aeiou'.includes(str[i]) + a, 0 )
