let string1 = 'hello my name is Adrian Vences.'
function spinWords(string){
  //TODO Have fun :)
  let words = string.split(' ')
  for (let i = 0; i < words.length;i++){
    if (words[i].length > 5 ) {
      words[i] = words[i].split('').reverse().join('')
    }
  }
  return words.join(' ')
}

console.log(spinWords(string1))