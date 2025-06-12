// 변수 선언 및 초기화
// var, let, const 키워드를 사용하여 변수 선언

var name = "홍길동";
console.log(name);

let age = 20;
console.log(age);

const PI = 3.14;
console.log(PI);

/*
const : ES6 이후 등장한 상수 선언 키워드
초기화 필수(선언과 동시에 값을 반드시 할당해야 함)
값 재할당 불가
주로 변하지 않는 값을 선언할 떄 사용
*/

let nickname = "코딩온"; // 선언 + 대입
console.log(nickname); // 호출 (결과)


// 상수

// 리터럴 상수
// 코드에 "값 그 자체"가 고정되어 적힌 것 (10, "홍길동", true)

// const 키워드
// 값을 바꿀 수 없는 "변수"를 만드는 키워드


let score = 100; // 변수 선언 및 초기화
score = 200; // 값 변경

let string = "안녕 세계야";
string = "이건 덮어씌워질 것임";
console.log(string); // "이건 덮어씌워질 것임"
// let은 변할 수 있는 선언임. 아랫줄로 재할당했으므로 위 데이터를 덮어씌움

let a = 10;
console.log(a); // 10

let b = 10
console.log(b); // 10
b = 20;
console.log({ b }, "값이 재할당 되었음"); // 20

let c = 10;
console.log("a = " + c); // 10

let d;
console.log(d); // undefined(할당되지 않은 변수)

let e = null; // null은 "값이 없음"을 명시적으로 표현
console.log(e); // null (값이 없음)

let myname = "김도연";
console.log(`내 이름은 ${myname}이야.`); // "내 이름은 김도연이야."

let str = "Hello world!";
console.log(str.length) // 12 (문자열의 길이)

let str1 = "안녕 ";
let str2 = "세계야!";
let result = str1.concat(str2); // 문자열 합치기
console.log(result); // "안녕 세계야!"

// 1. + 연산자 사용
let plusResult = str1 + str2;
console.log("+ 연산자:", plusResult);

// 2. concat() 메서드 사용
let concatResult = str1.concat(str2);
console.log("concat():", concatResult);

/* 
비교:
1. + 연산자
  - 더 간결하고 직관적
  - 일반적으로 더 빠른 성능
  - JavaScript 엔진 최적화가 잘 되어있음
  
2. concat()
  - 여러 문자열을 연결할 때 체이닝 가능 (예: str1.concat(str2, str3, str4))
  - 메서드 형태로 명시적
  - 약간의 성능 오버헤드 존재

권장: + 연산자 사용을 추천
이유: 간결성, 가독성, 성능면에서 우수
*/

let test = "Hello, world!";
// substr(시작 인덱스, 길이) - 시작 위치부터 지정된 길이만큼 추출
// 더 이상 권장되지 않는 방식
console.log(test.substr(7, 5)); // "world"

// slice(시작 인덱스, 끝 인덱스) - 시작 위치부터 끝 위치 직전까지 추출
// 현재 권장되는 표준 방식
console.log(test.slice(7, 12)); // "world"

// 예시:
// test.substr(7, 5) -> 7번 인덱스부터 5개의 문자를 추출
// test.slice(7, 12) -> 7번 인덱스부터 12번 인덱스 전까지 추출

const kim = {
  name: "김도연",
  age: 20,
};

console.log(kim.name); // "김도연"
console.log(kim.age); // 20

const color = ["white", "red", "green"];
// 배열은 인덱스 취급됨

console.log(color[0]); // "white"
console.log(color[1]); // "red"
console.log(color[2]); // "green"

// 객체(Object)
/*
- 관련된 데이터와 함수의 집합
- 키-값 쌍으로 구성
- 중괄호 {}를 사용하여 생성
- 점(.) 또는 대괄호[] 표기법으로 접근
*/
const person = {
  name: "홍길동",
  age: 25,
  greet: function () {
    return `안녕하세요, ${this.name}입니다!`;
  }
};
console.log(person.name);        // 점 표기법
console.log(person["age"]);      // 대괄호 표기법
console.log(person.greet());     // 메서드 호출

// 배열(Array)
/*
- 여러 데이터를 순차적으로 저장하는 자료구조
- 대괄호 []를 사용하여 생성
- 0부터 시작하는 인덱스로 접근
- 길이는 자유롭게 변경 가능
*/
const fruits = ["사과", "바나나", "오렌지"];
console.log(fruits.length);      // 배열 길이
fruits.push("망고");            // 배열 끝에 요소 추가
console.log(fruits);
fruits.pop();                    // 배열 마지막 요소 제거
console.log(fruits);

// 배열 반복
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});


// 문자열 변환
console.log("10" + 2);              // "102"
console.log("10" + true);           // "10true"
console.log("10" + {});             // "10[object Object]"
console.log("10" + null);           // "10null"
console.log("10" + undefined);      // "10undefined"
// 문자열 변환은 값이 문자열과 결합될 때 자동으로 발생


// 숫자 변환
console.log(1 - "2");              // -1
console.log("2" * "3");            // 6
console.log(4 + +"5");             // 9 (+"5"는 숫자 5로 변환됨)

Number("  100  ")     // 100 (공백 제거됨)
Number("")            // 0
Number("123abc")      // NaN
Number(null)          // 0
Number(undefined)     // NaN

// 불리언 변환
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false
console.log(Boolean("false"));    // true ← 문자열은 내용과 관계없이 true
console.log(Boolean({}));         // true ← 객체는 무조건 true
console.log(Boolean([]));         // true ← 빈 배열도 true
console.log(Boolean("1"));        // true ← "1"은 문자열이지만 내용이 있으므로 true

// 문자열로 변환
console.log(String(123));         // "123"
console.log(String(true));        // "true" 

// 숫자로 변환
Number("123");          // 123
Number(" 42 ");         // 42
Number("abc");          // NaN
Number(true);           // 1
Number(false);          // 0
+"100";                 // 100
+false;                 // 0

// 불리언으로 변환
Boolean(0);             // false
Boolean("");            // false
Boolean("hello");       // true
Boolean([]);            // true
!!123;                  // true
!!0;                    // false


// 연산자

// 1순위
let result1 = (2 + 3) * 2;
console.log(result1); // 10
// 2순위
let result2 = { name: "doyeon" };
console.log(result2.name); // . 도트 연산자이며 객체의 속성에 접근할 때 사용

const user = {
  "user-id": 101,
  name: "새싹"
};

const key = "name";
console.log(user[key]); // "새싹" - 대괄호 표기법으로 속성 접근
console.log(user["user-id"]); // 101 - 대괄호 표기법으로 속성 접근
// 대괄호 표기법은 속성 이름에 특수문자나 공백이 있을 때 유용

// 5순위 후위 증가/감소 a++, a-- 연산자
let abc = 5;
console.log(abc++); // 5 (출력 후 증가)
console.log(abc);   // 6 (이제 abc는 6)
let cde = 5;
console.log(cde--); // 5 (출력 후 감소)
console.log(cde);   // 4 (이제 cde는 4)

//