

const transpose = function(matrix) {
    let iMax;
    matrix.length > matrix[0].length ? iMax = matrix.length : iMax = matrix[0].length;
  
    let newMatrix = [];
  
  
    for (let i = 0; i < iMax; i++) {
      let newRow = [];
      for (const row of matrix) {
        if (i < row.length) {
          newRow.push(row[i]);
        }
      }
      if (newRow.length > 0) {
        newMatrix.push(newRow);
      }
    }
    return newMatrix;
  };
  
  const findWord = (letters, word) => {
    const joined = letters.map(f => f.join(''));
    for (const l of joined) {
      if (l.includes(word))
        return true;
    }
  };
    
  const reverseWord = word => {
    const newWord = word.split('').reverse().join('');
    return newWord;
  };
  
  
  const wordSearch = (letters, word) => {
    if (findWord(letters, word) || findWord(letters, reverseWord(word))) {
      return true;
    } if (findWord(transpose(letters), word) || findWord(transpose(letters), reverseWord(word))) {
      return true;
    }
    return false;
  };
   
  module.exports = wordSearch;