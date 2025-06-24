// 1. 묵시적 형 변환
// -> 자바스클비트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
// 10 + "20" -> "1020" 문자열끼리 덧셈은 문자열 연결이 됨
// (불가능한 연산, 오류를 발생시키기 않기 위해 묵시적 형 변환을 함)

// 2. 명시적 형 변환
// -> 개발자가 내장함수 또는 생성자를 사용하여 형 변환을 하는 것

let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2); // 10 (문자열의 앞부분이 숫자면 숫자로 변환)

// -> 숫자 -> 문자열
let num_1 = 20;
let numToStr1 = String(num_1); // "20"


// 1. 대입 연산자
let var_1 = 1; // 1은 저장된 값

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2; // 나머지 연산자

let num6 = (1 + 2) * 10; // 3 * 10 = 30

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20; // num7 = num7 + 20; 30 즉 20을 추가로 더함
num7 -= 10; // num7 = num7 - 10; 20 즉 10을 빼줌
num7 /= 2; // num7 = num7 / 2; 10 즉 2로 나눔
num7 *= 2; // num7 = num7 * 2; 20 즉 2를 곱함
num7 %= 3; // num7 = num7 % 3; 2 즉 3으로 나눈 나머지

// 4. 증감 연산자
let num8 = 10;
++num8; // num8 = num8 + 1; 11 즉 1을 증가시킴
num8--; // num8 = num8 - 1; 10 즉 1을 감소시킴

// ※ 주의 증감 연산자를 뒤에 쓰면 값을 먼저 사용하고 나중에 증가시킴, 변수명 앞에 적으면 먼저 증가시키고 값을 사용함

// 5. 논리 연산자
let or = true || false; // or 연산자 둘 중 하나만 true면 true 반환

let and = true && false; // and 연산자 

let not = !true; // not 연산자 tru를 false로 바꿈


// 6. 비교 연산자
let comp1 = 1 === 2; // === : 값과 타입이 모두 같은지 비교
// 왜 === 를 3번 쓰는가?
// -> 자바스크립트는 동적 타입 언어이기 때문에, 값의 타입이 다르면 비교가 false로 나옴 (===는 더 권장 되는 방식)

let comp2 = 1 !== 2; // !== : 값과 타입이 모두 다른지 비교


let comp3 = 2 > 1; // > : 왼쪽 값이 오른쪽 값보다 큰지 비교
let comp4 = 2 < 1; // < : 왼쪽 값이 오른쪽 값보다 작은지 비교

let comp5 = 2 >= 1; // >= : 왼쪽 값이 오른쪽 값보다 크거나 같은지 비교
let comp6 = 2 <= 1; // <= : 왼쪽 값이 오른쪽 값보다 작거나 같은지 비교

// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null 또는 undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10 (var1이 undefined이므로 var2의 값인 10을 반환)
let var5 = var1 ?? var3; // 20 (var1이 undefined이므로 var3의 값인 20을 반환)
let var6 = var2 ?? var3; // 10 (var2가 존재하므로 맨 처음 값인 var2의 10을 반환)

let userName;
let userNickname = "룰루";

let displayName = userNickname ?? userName; // "룰루" (userNickname이 존재하므로 userNickname의 값을 반환)

// 2. typeof 연산자
// -> 변수의 타입을 확인하는 연산자

let var7 = 1;
var7 = "hello";
var7 = 231;
var7 = true;

let t1 = typeof var7; // "string" (var7의 타입이 문자열이므로 "string"을 반환)

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구 사항: 변수 res에 var8의 값이 짝수 -> 짝, 홀수 -> 홀을 저장
let res = var8 % 2 === 0 ? "짝" : "홀"; // 콜론을 기준으로 왼쪽이 참일 때, 오른쪽이 거짓일 때의 값을 반환

// if 조건문 (if문)
let num_ = 4;

if (num_ >= 10) {
  // console.log("10 이상입니다.");
  // console.log("조건이 참일 때 실행됩니다.");
}
else if (num_ >= 5) {
  // console.log("5 이상 10 미만입니다.");
  // console.log("조건이 참일 때 실행됩니다.");
}
else { // = 그렇지 않으면
  // console.log("10 미만입니다.");
  // console.log("조건이 거짓일 때 실행됩니다.");
}

// 꼭 if로 시작해서 else로 끝내야 함

// 2. Switch 조건문 (switch문)
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적임

let animal = "owl";

switch (animal) {
  case "cat": {
    // console.log("고양이입니다.");
    break;
  }
  case "dog": {
    // console.log("강아지입니다.");
    break;
  }
  case "bear": {
    // console.log("곰입니다.");
    break;
  }
  case "snake": {
    // console.log("뱀입니다.");
    break;
  }
  case "tiger": {
    // console.log("호랑이입니다.");
    break;
  }
  default: {
    // console.log("알 수 없는 동물입니다.");
    break;
  }
}



// quiz 1 

const x = 15;
const y = 20;

let max = x > y ? x : y;
console.log(max);

// quiz 2

const a = true;

switch (typeof a) {
  case "number": {
    console.log("숫자입니다.");
    break;
  }
  case "string": {
    console.log("문자열입니다.");
    break;
  }
  case "boolean": {
    console.log("불리언입니다.");
    break;
  }
  case "undefined": {
    console.log("정의되지 않았습니다.");
    break;
  }
}

// quiz 3

let temperature = 10;

if (temperature >= 20) {
  console.log("매우 더움");
} else if (temperature >= 10 && temperature < 20) {
  console.log("적당");
} else if (temperature >= 0 && temperature < 10) {
  console.log("추움");
} else {
  console.log("매우 추움");
}
