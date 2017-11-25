let array = [];
  
function forLoop(array) {
  let i = 0;
    if (i === 0) {
      array.push(`I am 1 strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  return array;
}

let n = 100;

function whileLoop(n) {
  while (n > 0) {
    console.log('done');
    n--;
  }
}