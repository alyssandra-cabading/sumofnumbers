const nums = [1, 2, 3, 4];

function sumFor(arrNums) {
  let total = 0;
  for (const arrNum of arrNums) {
    total += arrNum;
  }
  return total;
}
console.log(sumFor(nums));

function sumWhile(arrNums) {
  let total = 0;
  let i = 0;
  while (i < arrNums.length) {
    total += arrNums[i];
    i++;
  }
  return total;
}
console.log(sumWhile(nums));
// eslint-disable-next-line consistent-return
function sumRecursion(arrNums) {
  if (arrNums.length === 0) {
    return 0;
  }
  return arrNums[0] + sumRecursion(arrNums.slice(1, arrNums.length));
}
console.log(sumRecursion(nums));

function sumTheSimpleWay(arrNums) {
  return _.reduce(arrNums, function (mem, num) { return mem + num; }, 0);
}
console.log(sumTheSimpleWay(nums));
