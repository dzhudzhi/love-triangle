/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let personsInTriangle = new Set();
  let third;
  return preferences.reduce((count, second, first)=>{
    second--;
    third = preferences[second] - 1;
    if (first != second) {
      if (!personsInTriangle.has(first)) {
        if (!personsInTriangle.has(second)) {
          if ((preferences[third] - 1) == first) {
            personsInTriangle.add(first);
            personsInTriangle.add(second);
            personsInTriangle.add(third);
            return ++count;
          }
        }
      }
    }
    return count;
  }, 0);
};