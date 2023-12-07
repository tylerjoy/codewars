function solve(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let numMatchingCharIndex = [];

  for (const word of arr) {
    let numMatchInWord = 0;

    for (let i = 0; i< word.length; i++) {
      const char = word[i].toLowerCase()
      
      if (i === alphabet.indexOf(char)) {
        numMatchInWord++;
      }
    }

    numMatchingCharIndex.push(numMatchInWord);
  }

  return numMatchingCharIndex;
}