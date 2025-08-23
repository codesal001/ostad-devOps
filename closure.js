function makeCounter() {
  var count = 0;
  function increment() {
    count++;
    return count;
  }
  function reset() {
    count = 0;
    return count;
  }
  return { increment, reset };
}

let counter = makeCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.increment());
