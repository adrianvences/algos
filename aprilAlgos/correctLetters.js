let string1 = '5nake'
let string2 = 'l0tus'
let string3 = 'zum1es'

function correct(string)
{
	// your code here
  //delare empty array
  let charArr = [];
  for (let i = 0; i < string.length; i++){
    if(string[i] === '5') {
      charArr.push('S');
    } else if (string[i] == '0') {
      charArr.push('O')
    } else if (string[i] == '1') {
      charArr.push('I')
    } else {
      charArr.push(string[i])
    }
    
  }
  return charArr.join('');
}

console.log(correct(string1))