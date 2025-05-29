/* function add(x, y) {
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

actions[0](); // Run

const obj = {
  speak: function () {
    console.log('Say something');
  }
};

obj.speak(); // Say something



// 기존 방식
const name = "Kim";
const msg = "안녕하세요, " + name + "님!";

// 개선된 방식
const msg2 = `안녕하세요, ${name}님!`;

*/


