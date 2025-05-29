/*
let arr = [10, 20, 30];
console.log(arr.length);


let arr = new Array(3); 
console.log(arr); 
console.log(arr.length); 

let arr = new Array(3).fill(0); 


let fruits = ["사과", "바나나", "포도"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


fruits[0] = "파인애플";
fruits[1] = "딸기";
fruits[2] = "망고";
console.log(fruits);


let scores = [85, 92, 78];
for (let i = 0; i < scores.length; i++) {
  console.log(`${i + 1}번째 점수: ${scores[i]}`);
}


let fruits = ["사과", "바나나"];
fruits.push("딸기");
console.log(fruits);


let fruits = ["사과", "바나나", "딸기"];
let removed = fruits.pop();
console.log(fruits);
console.log(removed);


let nums = [2, 3];
nums.unshift(1);
console.log(nums);


let nums = [1, 2, 3];
let first 


let nums = [1, 2, 3, 4];
nums.splice(2, 1, 99); 
console.log(nums);


let nums =[10, 20, 30, 40];
let part = nums.slice(1, 3);
console.log(part);


let items = ["컵", "책", "가방"];
console.log(items.indexOf("책"));
console.log(items.indexOf("연필"));

let person = {
  name: "홍길동",
  age: 25,
  inStudent: true
};

let car = {
  brand: "Hyundai",
  model: "Sonata",
  year: 2022
}

let user = new Object();
user.name = "Alice";
user.age = 30;


let book = {
  title: "JavaScript",
  price(키값): 15000 
};

console.log(book.title);  // 점 표기법
console.log(book["price"]); // 대괄호 표기법


let user = {};

// 추가
user.name = "jack hughes";
user.year = "1990";
user["age"] = 28;

// 수정9
user.age = 35;

// 삭제
delete user.name;

console.log(user);

//객체값이기 때문에 실행이 {중괄호}로 나온다.
(객체값인지 String문자값인지에 대한 구분)


const user = { name: "Alice", age: 30 };
console.log(Object.keys(user));

const user = { name: "Alice", age: 30 };
console.log(Object.values(user));


const user = { name: "Alice", age: 30 };
console.log(Object.entries(user));


const personA = {
  name: "Lee",
  age: 25,
  city: "Seoul"
};

const personB = {
  name: "Lee",
  age: 25,
  city: "Seoul"
}

console.log(personA === personB)

// 값은 똑같더라도 같을 수가 없다
// const A,B는 각자의 집이 있음.. (메모리의 공간이 다름..)
// 객체는 ★주소★를 기반으로 한다 

const personA = {
  name: "Lee",
  age: 25,
  city: "Seoul"
};
const personC = personA;

console.log(personA === personC)


const obj1 = { a: 1, b: 2};
const obj2 = { b: 3, c: 4};

const mergerd = { ...obj1, ...obj2};
console.log(mergerd);

// { a: 1, b: 3, c: 4 }
// 순서가 중요! obj2가 나중에 위치 → b: 3으로 덮어씀


const scores = [85, 92, 78];
console.log(scores[1]);

const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};
console.log(user.name, user.age, user.email);

function 
{
  add(x, y) 
  return x + y;
}

let a = 5;
let b = 8;

add(a,b);

function func2() {
  console.log("func2 실행");
}

function func1() {
  console.log("func1 시작");
  func2();
  console.log("func1 종료");
}

function main() {
  console.log("main 시작");
  func1();
  console.log("main 종료");
}

main();

const greet = function () {
  console.log('Hello!');
};
greet();


function execute(fn) {
  fn();
}

execute(function () {
  console.log('실행됨!');
});

function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
const double = multiplier(2);
console.log(double(5));


const actions = [
  function () { console.log('Run'); },
  function () { console.log('Jump'); }
];

actions[1]();

const obj = {
  speak: function () {
    console.log('Say something');
  }
};

obj.speak(); 

const myArray = [
  function(a, b) {
    return a + b;
  },
  function(a, b) {
    return a - b;
  }
];
console.log(myArray[0](5, 10));
console.log(myArray[1](10, 5));

//콜백 함수
setTimeout(() => {
  console.log("3초 후 실행");
}, 3000);

//  this 바인딩 문제
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++; // Timer 객체의 this
  }, 1000);
}
 // 즉시 실행 함수에도 유용
const result = ((x, y) => x + y)(2, 3); // 5


const name = "Lee";
const age = 25;

const user = {
  name,
  age
};


const person = { name: "Lee", age: 30 };

for (let key in person) {
  console.log(key);        
  console.log(person[key]); 



const numbers = [1, 2, 3];

for (let num of numbers) {
  console.log(num); 
}

*/

const fruits = ["사과", "바나나", "포도"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
