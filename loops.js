let array = [];
  
function forLoop(array) {
  for (let i = 1; i < 26; i++) {
    array.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`);
  }
  return array;
}

let n = 100;

function whileLoop(n) {
  while (n > 0) {
    console.log('done');
    n--;
  }
  return 
}