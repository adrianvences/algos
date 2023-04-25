let spaces = ' sdfa fdsaf fd f dfdas fd dsa fd f d f f'


function noSpace(x){
  var xSpread = [...x];
  var newString = '';
  for(let i =0;i < xSpread.length;i++){
    if (xSpread[i] === ' '){
      newString += '';
    } else {
      newString += xSpread[i];
    }
    console.log(newString)
  }
    return newString;
  
  }

  console.log(noSpace(spaces));