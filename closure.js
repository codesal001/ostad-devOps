function makeCounter() {
  var count = 0;
  function increment() {
    count++;
    return count;
  }
  function decrement() {
    count--;
    return count;
  }
  function reset() {
    count = 0;
    return count;
  }
  return { increment, decrement, reset };
}

let counter = makeCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());

function Account(initialBalance) {
  balance = initialBalance;
  function deposite(amount) {
    balance = balance + amount;
    return balance;
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log("Insufficent Balance");
      return;
    }
    balance = balance - amount;
    return balance;
  }

  return { deposite, withdraw };
}

const myAccount = Account(5000);

console.log(myAccount.deposite(1000));
console.log(myAccount.withdraw(2000));
