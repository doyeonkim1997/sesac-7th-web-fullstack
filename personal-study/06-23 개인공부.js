// 1. 변수
let age;

age = 30;

// 2. 상수
const birth = "1997.01.07";

// 3. 변수 명명 규칙
// 3-1. $, _ 를 제외한 기호는 사용할 수 없다.
let $_name

// 3-2. 숫자로 시작할 수 없다.
let name1;
let name2;

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 2;
let totalSales = salesCount - refundCount;

// 5. 숫자형
let num1 = 27
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; // 무한대
let minif = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number, 숫자가 아님

// 2. String
let myName = "김도연"; // 쌍따옴표를 안쓰면 문자열이 아닌걸로 판단
let myLocation = "서울시 강남구 역삼동";
let introduction = myName + myLocation; // 문자열 연결

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;

// 템플릿 리터럴 문법


// 3. Boolean Type
let inSwitchOn = true; // 켜져있다
let isEmpty = false; // 비어있다

// 4. Null Type (아무것도 없다)
let empty = null; // null은 의도적으로 아무것도 없음을 나타내는 값

// 5. Undefined Type (정의되지 않았다)
let none;
console.log(none); // undefined은 변수는 선언되었지만 값이 할당되지 않았음을 나타냄
