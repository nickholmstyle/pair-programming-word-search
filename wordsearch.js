const transpose = function (array) {
  // declare an empty newArray, i,j
  let newMatrix = [];

  for (j = 0; j < array[0].length; j++){
    let newArray = [];
    for (i = 0; i < array.length; i++ ) {
     newArray.push(array[i][j]);
    }
    newMatrix.push(newArray);
  }
return newMatrix;
};

// Checks Horizontal
const wordSearch = (letters, word) => { 
  let horizontalJoin = letters.map(ls => ls.join('')) 
  for (let l of horizontalJoin) {
      if (l.includes(word)) {
          return true;
      } 
  }
  let flipLetters = transpose(letters);
  horizontalJoin = flipLetters.map(ls => ls.join('')) 
  for (let l of horizontalJoin) {
      if (l.includes(word)) {
          return true;
      } 
  }
  return false
}

// const wordSearch = (letters, word) => { 
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }
// }

module.exports = wordSearch