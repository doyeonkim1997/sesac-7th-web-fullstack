// 1.객체 생성 
let ob1 = new Object(); // 객체 생성자
let ob2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성00)
let doYeon = {
  name: "김도연",
  age: 29,
  hobby: "컴퓨터",
  job: "FE 개발자",
  extra: {},
  10: 20,
  "like cat": true, // 프로퍼티 이름에 공백이 있는 경우 따옴표로 감싸야 함
};

// key - value 형태로 프로퍼티 정의
// 문자열과 숫자 모두 사용 가능

// 3. 객체 프로퍼티를 다루는 방법
// 3-1 특정 프로퍼티에 접근 (점 표기법, 대괄호 표기법)

// let name = person.name; // 점 표기법
// // console.log(name); // "김도연"

// let age = person["age"]; // 대괄호 표기법
// console.log(age); // 29

// let property = "hobby";
// let hobby = person[property]; // 변수로 프로퍼티 접근
// console.log(hobby); // "컴퓨터"

// // 3-2 새로운 프로퍼티를 추가하는 방법`
// person.job = "프론트엔드 개발자"; // 점 표기법
// person["favoriteFood"] = "떡볶이";

// console.log(person);

// 3-3 프로퍼티를 수정하는 방법
// person.job = "백엔드 개발자"; // 점 표기법
// person["favoriteFood"] = "김밥"; // 대괄호 표기법

// console.log(person);

// // 3-4 프로퍼티를 삭제하는 방법
// delete person.job; // 점 표기법
// delete person["favoriteFood"]; // 대괄호 표기법
// console.log(person);

// // 3-5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
// let result1 = "name" in person; // true
// console.log(result1);

// let result2 = "job" in person; // false
// console.log(result2);


// 1. 상수 객체 // 상수에 객체를 저장하는걸 상수 객체라고 한다
const animal = {
  type: "냥냥이",
  name: "두붕",
  color: "하늘색",
};


// 상수라는건 새로운 값을 할당하지 못하는 변수를 말하는 것
// 객체의 프로퍼티는 수정 가능
// 따라서 상수 객체의 프로퍼티는 수정 가능하다

// animal.age = 2; // 추가
// animal.name = "까망이"; // 수정
// delete animal.color; // 삭제
// console.log(animal); // { type: '냥냥이', name: '까망이', age: 2 }


// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

// const person2 = {
//   name: "이정환",
//   // 메서드 선언
//   sayHi() {
//     console.log("안녕!");
//   },
// };

// person2.sayHi();
// person2["sayHi"]();


// 1. 배열 생성
// let arrA = new Array(); // 배열 생성자
// let arrB = []; // 배열 리터럴 (대부분 사용)

// let arrC = [1, 2, 3, 4, 5, true, "Hello"]
// console.log(arrC); // [1, 2, 3, 4, 5, true, "Hello"]

// // 2. 배열 요소 접근
// let item1 = arrC[0];
// let item2 = arrC[1];
// console.log(item1, item2); // 1 2 배열은 0부터 시작하는 인덱스

// arrC[0] = 10; // 배열 요소 수정
// console.log(arrC); // [10, 2, 3, 4, 5, true, "Hello"]


// Falsy한 값
let f1 = undefined; // false
let f2 = null; // false
let f3 = 0; // false  
let f4 = -0; // false
let f5 = NaN; // false
let f6 = ""; // false
let f7 = 0n; // false / BigInt 타입의 0

// Truthy한 값
// 모든 값이 Truthy하다
let t1 = "Hello"; // true
let t2 = 1; // true
let t3 = [];
let t4 = {}; // true


// 활용 사례

// function printName(person) {
//   if (!person) {
//     console.log("person의 값이 없음");
//     return;
//   }
//   console.log(person.name);
// }

// let person = { name: "김도연" };
// printName(person); // { name: '김도연' }


// 단락 평가

// function returnFalse() {
//   console.log("returnFalse 호출");
//   return undefined;
// }

// function returnTrue() {
//   console.log("returnTrue 호출");
//   return 10;
// }

// console.log(returnFalse && returnTrue()); // true

// && 연산자는 왼쪽 값이 false이면 오른쪽 값을 평가하지 않음
// 따라서 returnFalse()는 호출되지 않음


// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name; // person이 falsy한 값이면 name은 undefined
  console.log(name || "이름 없음");
}

printName();
printName({ name: "김도연" }); // 김도연



//  Quiz 1. 책 정보 확인하기
// 목표: 주어진 책 정보 객체에서 특정 속성이 존재하는지 확인하고, 그 결과를 출력합니다.
// 다음 요구사항을 만족하는 코드를 작성하세요

// book 객체 내에 '출판년도(publishedYear)' 속성이 있는지 확인해 결과에 따라 다음과 같이 출력합니다.
// 속성이 있으면: "출판년도는 ${출판년도}입니다."
// 속성이 없으면: "출판년도 정보가 없습니다."

const book = {
  title: "한 입 크기로 잘라먹는 리액트",
  author: "이정환",
  // publishedYear 속성은 이 객체에는 없습니다.
};

if ("publishedYear" in book) {
  console.log(`출판년도는 ${book.publishedYear}입니다.`);
} else {
  console.log("출판년도 정보가 없습니다.");
}

