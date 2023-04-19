/* 
  Given:
    - a search criteria object with primitive values only (ints,
      strings, booleans)
    - a list of objects

  Return any object that matches all the key value pairs in the search
  criteria object.

  Bonus: write a 2nd solution using built-in methods to practice functional
  programming.
*/

const items = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
  firstName: "Bob",
  age: 31,
};

const expected1 = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
  lastName: "Smith",
};

const expected2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */


// read in criteria and collection
// we have to search collection for the givin criteria 
// which would be matching key pair values
// return full entries when found in array of dictionaries 


function findObjects(criteria, collection) {
  // your code here
}

/**
 * - Time: O(?).
 * - Space: O(?).
 */
function findObjectsFunctional(criteria, collection) {
  
  array = []
  for(let x in criteria) {
    if (x.firstName === collection[x]) {
      array += collection[x];
      
    console.log(array)
    }
    
  }
  return array
  // collection.map(collection => {
  //   return (
  //     firstName : 
    
  }

  findObjectsFunctional(searchCriteria1,items);


// const obj = {
//   name: 'Luke Skywalker',
//   title: 'Jedi Knight',
//   age: 23
// };

// // Convert `obj` to a key/value array
// // `[['name', 'Luke Skywalker'], ['title', 'Jedi Knight'], ...]`
// const asArray = Object.entries(obj);

// const filtered = asArray.filter(([key, value]) => typeof value === 'string');

// // Convert the key/value array back to an object:
// // `{ name: 'Luke Skywalker', title: 'Jedi Knight' }`
// const justStrings = Object.fromEntries(filtered);


