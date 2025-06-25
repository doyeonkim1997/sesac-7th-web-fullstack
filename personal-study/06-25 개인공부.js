
// 반복문 for문
for (let idx = 1; idx <= 10; idx++) { // idx는 1부터 10까지 증가
  if (idx % 2 === 0) {
    continue; // 짝수인 경우 다음 반복으로 넘어감
  }
  // console.log(idx);

  if (idx >= 5) {
    break; // 5 이상인 경우 반복문을 종료
  }
}


// 함수 선언
// function greeting() {
//   console.log("안녕하세요!");
// }

// console.log("호출 전"); // 함수 호출 전 메시지 출력
// greeting(); // 함수 호출
// console.log("호출 후"); // 함수 호출 후 메시지 출력


let area1 = getArea(10, 20); // 함수 호출, 인수로 10과 20을 전달
// console.log(area1); // 반환된 면적 출력

let area2 = getArea(5, 15); // 함수 호출, 인수로 5와 15을 전달
// console.log(area2); // 반환된 면적 출력

getArea(3, 7); // 함수 호출, 인수로 3과 7을 전달 (반환값은 사용하지 않음)


// 호이스팅
// -> 끌어올리다 라는 뜻

function getArea(width, height) { // 함수 선언
  // width와 height는 매개변수

  function another() { // 중첩 함수
    // console.log("이 함수는 getArea 내부에 정의된 또 다른 함수입니다.");
  }

  another();
  let area = width * height; // 면적 계산

  return area; // 계산된 면적을 반환
  // console.log("이 코드는 실행되지 않습니다."); // 이 줄은 실행되지 않음, return 이후의 코드는 무시됨
}


// 1. 함수 표현식
function funcA() {
  // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function funB() { // 익명 함수 표현식
  // funB는 이 함수 내부에서만 사용할 수 있는 이름
  // console.log("funcB");

}

varB(); // varB는 익명 함수이므로 이름을 사용할 수 없음


// 2. 화살표 함수
let varC = (value) => {
  // console.log("화살표 함수 호출, 전달된 값:", value);
  return value * 1; // 전달된 값을 1배로 반환
};

// console.log(varC(10)); // 화살표 함수 호출


// 콜백 함수

function main(value) {
  // console.log("1");
  // console.log("2")
  value(); // value는 함수이므로 호출 가능
  // console.log("3");
}

function sub() {
  // console.log("나는 서브");
}
main(() => {
  // console.log("나는 서브");
}); // main(sub); // sub 함수를 main에 전달하여 호출



// 콜백 함수의 활용
function repeat(count, callback) {
  for (let i = 1; i < count; i++) {
    callback(i);
  }
}

repeat(5, (i) => {
  // console.log(i);
}); // 1, 2, 3, 4

repeat(5, (i) => {
  // console.log(i * 2);
})


// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcG() {
  let b = 2; // 지역 스코프, funcG 내부에서만 접근 가능
  //  console.log(a); // 전역 변수 a에 접근 가능
}

funcG();
// console.log(b); // // b는 funcG 내부에서만 정의되므로 접근 불가, 에러 발생

if (true) {
  let c = 1; // 지역 스코프, if 블록 내부에서만 접근 가능
}

for (let i = 0; i < 10; i++) {
  let d = 1; // 지역 스코프, for 블록 내부에서만 접근 가능
}

// console.log(d); // d는 for 블록 내부에서만 정의되므로 접근 불가, 에러 발생


// 함수는 함수식에서는 지역 스코프를 갖지만 if, for 등의 블록 스코프는 갖지 않음




// quiz 1

// 내가 적은 코드
// let num = 100;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   // console.log(i);
//   if (i >= 100) {
//     break;
//   }
// }

// 정답 코드
// let num = 100;

// for (let i = 1; i <= num; i++) {
//   if (//num % i === 0) {
//     // console.log(i);
//   }
// }


//Quiz 2. 소수 판별기 (에라토스테네스의 체)
// 다음 요구사항을 만족하는 isPrimeNumber함수를 완성하세요
// 함수 isPrimeNumber는 한개의 매개변수 num을 제공받아 소수인지 판별합니다.
// num이 소수라면 true를, 아니라면 false를 반환합니다.
// 예외적으로 1은 소수로 판별합니다.

function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrimeNumber(1));
// console.log(isPrimeNumber(4));
// console.log(isPrimeNumber(11));
// console.log(isPrimeNumber(12));

// 출력 결과 :
// true
// false
// true
// false


// quiz 3
// 콜백함수를 이용하여 다음 요구사항을 만족하는 코드를 작성하세요
// 두 수를 덧셈하는 함수 add, 뺄셈하는 함수 sub를 각각 구현하세요
// 2개의 매개변수 num1, num2를 제공받습니다.
// 연산의 결과를 반환합니다.

// 다음 조건을 만족하는 함수 calc를 구현하세요
// 3개의 매개변수 num1, num2, callback을 제공받습니다.
// num1, num2 : 연산에 활용될 숫자
// callback : 실제로 연산을 수행할 함수
// callback 함수로 전달된 연산의 결과값을 콘솔에 출력하세요

// 1. 덧셈 함수
function add(num1, num2) {
  return num1 + num2;
}

// 2. 뺄셈 함수
function sub(num1, num2) {
  return num1 - num2;
}

// 3. calc 함수 (콜백 함수 활용)
function calc(num1, num2, callback) {
  const result = callback(num1, num2); // 콜백 함수 실행
  console.log(result); // 결과 출력
}

calc(5, 3, add); // 덧셈 함수 호출
calc(5, 3, sub); // 뺄셈 함수 호출

// 출력 결과 :
// 8
// 2