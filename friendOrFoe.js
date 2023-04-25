let friendList = ['adrian','eric','marlene','kris']


function friend(friends){
  //your code here
  var friendList = []
  for (let i =0;i < friends.length;i++){
   if(friends[i].length == 4){
     friendList.push(friends[i])
   }  else if (friends[i].length != 4) {
    console.log('not a friend')
   }
  
  }
  return friendList
}

console.log(friend(friendList))