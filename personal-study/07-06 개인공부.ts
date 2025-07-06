/**
 * The Basics
 * https://www.typescriptlang.org/docs/handbook/2/basic-types.html#%EC%98%A4%EB%A5%98-%EB%B0%9C%EC%83%9D%EC%8B%9C%ED%82%A4%EA%B8%B0
 * 타입스크립트 핸드북 첫 번째 페이지에 온 걸 환영합니다.
 * 만약 TypeScript가 처음이라면, 'Getting Started' 가이드를 먼저 보는 걸 추천합니다.
 * 
 * 자바스크립트의 모든 값은 여러 연산을 통해 관찰할 수 있는 일련의 동작을 가집니다.
 * 이게 다소 추상적으로 들릴 수 있는데, 예를 들어 message라는 변수에 대해 생각해보겠습니다.
 */

// 'toLowerCase'라는 프로퍼티에 접근 후 호출
message.toLowerCase();
// message를 직접 호출
message();

/**
 * 첫 번째 라인은 message의 toLowerCase라는 프로퍼티를 찾아 호출합니다.
 * 두 번째 라인은 message 자체를 함수처럼 호출하려고 합니다.
 * 
 * message의 실제 값이 뭔지 모른다면 (실제로 매우 흔함), 이 코드를 실행했을 때 무슨 결과가 나올지 확실히 알기 어렵습니다.
 * 각 연산의 결과는 message의 실제 값에 전적으로 의존합니다.
 * 
 * - message는 호출 가능한가?
 * - toLowerCase라는 프로퍼티가 존재하는가?
 * - 그 프로퍼티가 호출 가능한 함수인가?
 * - 반환값은 무엇인가?
 * 
 * 이런 질문들의 답은 JS 작성 시 머릿속에 기억해두어야 합니다.
 */

// 예시: message가 문자열로 선언됨
const message = "Hello World!";
// message.toLowerCase() => "hello world!"
// message() => TypeError: message is not a function

/**
 * 코드 실행 중에 JS 런타임은 값의 타입에 따라 동작을 결정합니다.
 * 문자열과 숫자 같은 원시 타입은 typeof 연산자로 타입 확인이 가능합니다.
 * 하지만 함수 등 다른 값들은 런타임에서 정확히 알기 어렵습니다.
 */

// 예시 함수
function fn(x) {
  return x.flip();
}

/**
 * 위 코드는 x가 flip이라는 호출 가능한 프로퍼티를 가진 객체여야만 동작합니다.
 * JS에서는 이러한 타입 정보를 코드 읽기 외에는 알 수 없고, 실행해봐야 결과를 알 수 있습니다.
 * 
 * -> 타입 시스템은 어떤 값이 전달될 수 있고, 어떤 값은 실패하는지를 설명합니다.
 * JS는 **동적 타입**만 제공하며, 실행 후 결과를 확인할 수 있습니다.
 * 
 * **정적 타입 시스템**은 실행 전 코드의 예상 동작을 예측할 수 있게 해줍니다.
 */

/**
 * Static type-checking
 * 
 * 문자열을 함수처럼 호출했을 때 TypeError가 발생했습니다. 이런 런타임 에러는 버그로 간주됩니다.
 * 버그를 줄이려면 코드를 작성할 때 미리 확인할 수 있으면 좋겠죠?
 * 
 * TypeScript 같은 정적 타입 시스템은 값을 실행 전 검증해줍니다.
 */

const msg = "hello!";
msg(); // ❌ "이 표현식은 호출할 수 없습니다. 'String' 타입에는 호출 시그니처가 없습니다."

/**
 * Non-exception Failures
 * 
 * 지금까지는 런타임 에러(예: TypeError)에 대해 이야기했습니다.
 * 하지만 JS는 일부 경우 오류를 던지지 않고 undefined를 반환합니다.
 */

const user = {
  name: "Daniel",
  age: 26,
};
user.location; // undefined

/**
 * TypeScript는 객체에 존재하지 않는 속성 접근도 오류로 처리할 수 있습니다.
 */

const user2 = {
  name: "Daniel",
  age: 26,
};
user2.location; // ❌ "location" 속성이 타입에 존재하지 않습니다.

/**
 * TypeScript는 많은 실제 버그를 잡아줍니다.
 */

// 오타 예시
const announcement = "Hello World!";
announcement.toLocaleLowercase(); // ❌
announcement.toLocalLowerCase();  // ❌
announcement.toLocaleLowerCase(); // ✅

/**
 * 호출 안 된 함수
 */
function flipCoin() {
  return Math.random < 0.5; // ❌ Math.random()을 써야 함
}

/**
 * 논리 오류 예시
 */
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  // 이 조건은 도달할 수 없음
}

/**
 * Types for Tooling
 * 
 * TypeScript는 오류를 사전에 방지할 뿐 아니라, 편집기 자동완성과 네비게이션 기능을 제공합니다.
 */

import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send;
  // 자동완성: send, sendFile, sendStatus 등 추천됨
});

app.listen(3000);

/**
 * TypeScript는 자동 수정, 리팩토링, 정의로 이동 등 다양한 도구 지원을 제공합니다.
 * 
 * tsc, the TypeScript compiler
 * 
 * 타입 검사를 위해 TypeScript 컴파일러(tsc)를 사용합니다.
 * 설치: npm install -g typescript
 * 
 * hello.ts 파일 생성
 */

// Greets the world.
console.log("Hello world!");

/**
 * 실행: tsc hello.ts
 * -> 오류 없으면 hello.js 파일이 생성됨 (컴파일 결과)
 * 
 * 예외가 있는 코드 예시
 */

function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan"); // ❌ 2개 인자 필요

/**
 * Emitting with Errors
 * 
 * tsc는 기본적으로 오류가 있어도 JS 파일을 출력합니다.
 * 옵션: tsc --noEmitOnError hello.ts -> 오류가 있으면 JS 출력 안 함
 */

/**
 * Explicit Types
 * 
 * 명시적 타입 선언 예시
 */

function greet2(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet2("Maddison", new Date());

/**
 * 타입 추론
 */
let msg2 = "hello there!"; // string으로 추론됨

/**
 * Erased Types
 * 
 * TypeScript의 타입은 JS로 컴파일될 때 제거됩니다. 타입은 런타임에 영향을 주지 않습니다.
 * 
 * Downleveling
 * 
 * TypeScript는 ES2015 이상 문법을 ES3 또는 ES5로 변환할 수 있습니다.
 * 기본 target은 ES5이지만, 대부분 ES2015 이상을 사용해도 안전합니다.
 * 
 * Strictness
 * 
 * TypeScript는 기본적으로 느슨한 검사를 하지만, strict 옵션으로 강화할 수 있습니다.
 * tsconfig.json: "strict": true
 * 주요 플래그
 * - noImplicitAny: 암묵적 any 금지
 * - strictNullChecks: null과 undefined에 대해 더 엄격한 검사
 */

/**
 * 요약
 * - TypeScript는 실행 전에 오류를 미리 잡아주는 정적 타입 시스템을 제공합니다.
 * - 더 안전하고 예측 가능한 코드를 작성할 수 있도록 돕습니다.
 * - 도구 지원(자동완성, 리팩토링 등)을 통해 개발 생산성을 크게 향상시킵니다.
 */
