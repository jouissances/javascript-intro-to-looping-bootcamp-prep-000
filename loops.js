let array = [];
  
function forLoop(array) {
  for (let i = 1; i < 26; i++) {
    array.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`);
  }
  return array;
}

let n = Math.floor(Math.random() * 100);

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  return 'done';
}

function doWhileLoop(array) {
  do { 
    
  } while (Math.random() >= 0.5);
}