
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) return []
  console.log(matrix)
  let result = []
  matrix.forEach((el, index) => {
    if (index % 2 === 0) {
      el.sort((a, b) => a - b).forEach(el => result.push(el))
    } else {
      el.sort((a, b) => b - a).forEach(el => result.push(el))
    }
  });
  return result
}
