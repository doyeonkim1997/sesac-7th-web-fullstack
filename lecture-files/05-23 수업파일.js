/*
const myMap = new Map();
myMap.set('name', 'alice');
myMap.set(1, 'numberkey');
myMap.set(true, 'boolkey');

console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.size);


const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}

for (const [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
}


const mySet = new Set();
mySet.add('apple');
mySet.add('banana');
mySet.add('apple');

console.log(mySet.has('apple'));
console.log(mySet.size);

const fruits = new Set(['apple', 'banana', 'cherry']);

for (const fruit of fruits) {
  console.log(fruit);
}


const add = (a, b) => a + b;
console.log(add(2, 3));

const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2);
console.log(doubled); 


console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(Response => Response.json())
  .then(data => console.log(data))
  .catch(error => console.error());




const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('성공!');
  }, 1000);
});

promise.then(result => console.log(result));



const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('에러 발생');
  }, 1000);
});

promise.catch(error => console.log(error));



function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 1000);
  });
}

fetchData()
  .then(data => data + 5)
  .then(result => console.log(result));


const p1 = new Promise(resolve => setTimeout(() => resolve('1번 완료'), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve('2번 완료'), 1500));
const p3 = new Promise(resolve => setTimeout(() => resolve('3번 완료'), 500));

Promise.all([p1, p2, p3])
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log('에러 발생:', err));


function delay() {
  return new Promise(resolve => setTimeout(() => resolve('완료!'), 1000));
}

async function start() {
  const result = await delay();
  console.log(result);
}

start();



function fail() {
  return new Promise((_, reject) => setTimeout(() => reject('에러!'), 1000));
}

async function execute() {
  try {
    await fail();
  } catch (err) {
    console.log(err);
  }
}

execute();



function fetchUser() {
  return new Promise(resolve => setTimeout(() => resolve('유저'), 1000));
}

function fetchPosts() {
  return new Promise(resolve => setTimeout(() => resolve('게시물'), 1000));
}

async function loadPage() {
  const user = await fetvhUser();
  const posts = await fetvhPosts();
  console.log(user, posts);
}

loadPage();



function greet(name) {
  console.log(`hello, ${name}`);
}

function processUserInput(callback) {
  const name = '231ce';
  callback(name);
}

processUserInput(greet);


function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

console.log(calculate(5, 3, add));
console.log(calculate(5, 3, subtract));

var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});


var wrongArr = [10, 20, 30].map(function (index, currentValue) {
  console.log(index, currentValue);
  return currentValue + 5;
});

console.log(newArr);
console.log(wrongArr);


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`hi, i am ${this.name}, ${this.age} years old`);
  }
}

const p1 = new Person("Alice", 30);
const p2 = new Person("Bob", 25);

p1.sayHello();
p2.sayHello();

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`)''
  }
}
const dog = new Animal("dubu");
dog.speak();


function example(x) {
  console.log(x);
  var x;
  console.log(x);
  var x = 2;
  console.log(x);
}
example(1);


function test() {
  console.log(b);
  var b = 'bbb';
  console.log(b);
  function b() {

  }
  console.log(b);
}
test();



function sum(a, b) {
  return a + b;
}

var multiply = function (a, b) {
  return a + b;
};
console.log(sum(1, 2));
console.log(multiply(3, 4));



const x = 1;
function outer() {
  const y = 2;
  function inner() {
    const z = 3;
    console.log(x, y, z);
  }
  inner();
}
outer();

*/

var a = 1;
var outer = function () {
  console.log("outer: " + this);
  var inner = function () {
    console.log("inner: " + this);
    console.log(a);
    var a = 3;
  };
  inner();
  console.log(a);
};
outer();
