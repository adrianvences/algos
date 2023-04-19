
// Print 1-255
// Print all the integers from 1 to 255.
// for (let i = 1; i < 256;i++) {
//   console.log (i)
// }


// Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
// let sum = 0 
// for(let i = 0; i < 256;i++) {
  
//   sum = i + sum
  
//   console.log (sum) 
// }


// Print Odds 1-255
// Print all odd integers from 1 to 255.
// let odd = 0 
// for (let i = 0 ; i < 256 ;i++) {
//   if (i % 2 == 1) {
//     console.log(i)
//   }
// }

// var x = "nicky"
// if (x == "gabby") {
//   return 
// }

// function rentalCarCost(d) {
//   // Your solution here
//   if (d >= 7 ) {
//     total-=50
//   }
//   let total = d * 40;
//   if(d >=3 ) {
//     total -=20;
    
//   } 
  
//   return total;
// }

// function squareSum(numbers){
//   let sum = 0;
//     for(let i = 0; i < numbers.length;i++) {
//       sum += numbers[i]*numbers[i]
//     }
//     return sum
//   }

// console.log(squareSum([3,3,3]))

// function solution(str){
//   let reverseString = '';
//     for (let i = str.length-1; i >=0 ;i--){
//       reverseString += str[i]
//     }
//     return reverseString;
//   }
//   console.log(solution('hello'))

  function solution(str){
    
      let reverseString = reverse(str);
      
      return reverseString;
    }
    console.log(solution('hello'))


