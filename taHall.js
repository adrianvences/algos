// class Ball {
//   constructor(type = 'regular') {
//     this.ballType = type;
//   }
// }

class Ball {
  constructor(type) {
  this.ballType = type ? type : "regular"
  }
}


// class Ball {
//   constructor(type) {
//     if(type == undefined)
//       this.ballType = "regular";
//     else
//       this.ballType = type;
//   }
// }

const ball1 = new Ball("Ruuber")
const ball2 = new Ball()

console.log(ball1.ballType)
console.log(ball2.ballType)