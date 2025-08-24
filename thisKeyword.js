const user = {
  name: "salin",
  ref: function () {
    return this;
  },
};
const calculator = {
  result: 0,
  sum(a, b) {
    this.result = a + b;
    return this.result;
  },
  sub(a, b) {
    this.result = a > b ? a - b : b - a;
    return this.result;
  },
  read() {
    return this.result;
  },
};

const person = {
  name: "Sal",
  greet: function () {
    return "Hi, I’m " + this.name;
  },
};
const newObj = person.greet;

//console.log(newObj.call({ name: "x" }));
//console.log(newObj.apply({ name: "y" }));

Function.prototype.myBind = function (context = {}, ...args) {
  // your code here
  if (typeof this !== "function") {
    throw new Error("this is not callable");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
function introduce(age, city) {
  return `Hi, I’m ${this.name}, ${age} years old from ${city}`;
}

const person1 = { name: "Sal" };

const boundIntroduce = introduce.myBind(person1, 21);
console.log(boundIntroduce("Berlin"));
// "Hi, I’m Sal, 21 years old from Berlin"
