/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case

.indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {
  // your code here
  s1=s1.toLowerCase(); /// converts to lower case
  s2=s2.toLowerCase();
  let map = {}; // freq table goes in here // how many occurences of each letter do we have
  for ( let char in s2){ // goes through s2
    if (s2 [char] in map) map[s2[char]]++; // checking if letter exist and if it does adds 1
    else {
      map[s2[char]]=1; // if it doesnt exist it adds it and sets it to one
    }
  }
  for (let char in s1){
    if (s1[char] in map) { // checking if letter in s1 is in map 
      map[s1[char]]-- // if it is it decriments by 1
      if(map[s1[char]] < 0)return false; // if letter in s1 is less than 0 in map it returns false
    }
    else {
      return false   // if that letter isnt in the map at all it returns false
    }
  }
  return true  // if there is a corrsiponding letter in s2 for s1 return true 
}

console.log(canBuildS1FromS2(strA1,strB1));
console.log(canBuildS1FromS2(strA2,strB2));
console.log(canBuildS1FromS2(strA3,strB3));
console.log(canBuildS1FromS2(strA4,strB4));
console.log(canBuildS1FromS2(strA5,strB5));


/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.

Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.

return an array of the song indexes or [-1, -1] if no pair is found.

If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

// const busDuration1 = 300;
// const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
// const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

// const busDuration2 = 300;
// const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
// const expected2 = [3, 6]; // 230, 40
// /* Explanation:
// This is the pair with the longest song.
// */

// const busDuration3 = 300;
// const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
// const expected3 = [-1, -1]; // not found.

// /**
//  * Finds the pair of song durations that adds up to 30 seconds before the bus
//  * ride ends.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {number} busDuration Seconds.
//  * @param {number} songDurations Seconds.
//  * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
//  *    pair is found.
//  */
// function musicRuntime(busDuration, songDurations) {
//   // your code here
//   let arr = []
//   busDuration = busDuration-30
//   let min = busDuration-Math.max(...songDurations);
//   for (let i = 0; i < songDurations.length-1;i++) {
//     if (songDurations[i] > min ) {
//       for (let j = i+1; j < songDurations.length;j++) {
//         if (songDurations[i]+songDurations[j]== busDuration) {
//           arr=[i,j] 
//         }
//       }
      
//     }
//   }
//   if (arr.length < 1 ) {
//     arr= [-1,-1]
//   }
//   console.log(arr)

// }
//   console.log(musicRuntime(busDuration1,songDurations1))
//   console.log(musicRuntime(busDuration2,songDurations2))
//   console.log(musicRuntime(busDuration3,songDurations3))