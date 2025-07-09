
# The Basics

> 출처: [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#%EC%98%A4%EB%A5%98-%EB%B0%9C%EC%83%9D%EC%8B%9C%ED%82%A4%EA%B8%B0)

타입스크립트 핸드북 첫 번째 페이지에 온 걸 환영한다.  
만약 TypeScript가 처음이라면 **Getting Started** 가이드를 먼저 보는 것을 추천한다.

자바스크립트의 모든 값은 여러 연산을 통해 관찰할 수 있는 일련의 동작을 가진다.  
예를 들어 `message`라는 변수에 대해 생각해보자.

```ts
message.toLowerCase(); // ✅ 문자열 메서드 호출 시도
message();            // ❌ 문자열을 함수처럼 호출 시도
```

첫 번째 라인은 `message`의 `toLowerCase`라는 프로퍼티를 찾아 호출한다.  
두 번째 라인은 `message` 자체를 함수처럼 호출하려고 한다.

> 💡 **중요한 질문들**
> - message는 호출 가능한가?
> - toLowerCase라는 프로퍼티가 존재하는가?
> - 그 프로퍼티가 호출 가능한 함수인가?
> - 반환값은 무엇인가?

---

## 1. 예시: 문자열 선언

```ts
const message = "Hello World!"; // string 타입으로 추론됨
message.toLowerCase();          // ✅ 정상 작동
message();                     // ❌ TypeError: message is not a function
```

JS 런타임은 값의 타입에 따라 동작을 결정한다.  
문자열과 숫자 같은 원시 타입은 `typeof` 연산자로 확인할 수 있다.

---

## 2. 예시 함수

```ts
function fn(x) {
  return x.flip(); // x가 flip() 메서드를 가지고 있어야 정상 작동
}
```

JS에서는 이러한 타입 정보를 코드만 보고 알 수 없으며, 실제 실행 시에야 결과를 확인할 수 있다.

---

## 3. Static type-checking 🔎

문자열을 함수처럼 호출하려고 하면 TypeError가 발생한다.  
TypeScript는 이런 버그를 **정적 타입 시스템**으로 사전에 검증한다.

```ts
const msg = "hello!";
msg(); // ❌ "이 표현식은 호출할 수 없습니다. 'String' 타입에는 호출 시그니처가 없습니다."
```

---

## 4. Non-exception Failures ⚠️

JS는 일부 경우 오류를 던지지 않고 `undefined`를 반환한다.

```ts
const user = {
  name: "Daniel",
  age: 26,
};
user.location; // undefined (JS에서는 허용)
```

TypeScript는 존재하지 않는 속성 접근도 오류로 처리할 수 있다.

```ts
const user2 = {
  name: "Daniel",
  age: 26,
};
user2.location; // ❌ "location" 속성이 타입에 존재하지 않습니다."
```

---

## 5. 버그 탐지 예시 🔬

```ts
const announcement = "Hello World!";
announcement.toLocaleLowercase(); // ❌ 오타
announcement.toLocalLowerCase();  // ❌ 오타
announcement.toLocaleLowerCase(); // ✅ 올바른 메서드
```

---

## 6. 호출 안 된 함수 🌀

```ts
function flipCoin() {
  return Math.random < 0.5; // ❌ Math.random()을 사용해야 함
}
```

---

## 7. 논리 오류 예시 ⚖️

```ts
const value = Math.random() < 0.5 ? "a" : "b";

if (value !== "a") {
  // ...
} else if (value === "b") {
  // ❌ 도달할 수 없는 조건
}
```

---

## 8. Types for Tooling 🛠️

TypeScript는 오류 방지뿐만 아니라, 편집기 자동완성과 네비게이션 기능을 제공한다.

```ts
import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send;
  // 자동완성: send, sendFile, sendStatus 등 추천됨
});

app.listen(3000);
```

> 💡 **추가 지원 기능**  
> 자동 수정, 리팩토링, 정의로 이동 등 강력한 도구 지원을 제공한다.

---

## 9. tsc, the TypeScript compiler 💡

타입 검사를 위해 TypeScript 컴파일러(tsc)를 사용한다.  
설치: `npm install -g typescript`

```ts
// hello.ts
console.log("Hello world!");
```

실행: `tsc hello.ts`  
오류가 없으면 `hello.js`가 생성된다.

---

### 예외가 있는 코드 예시

```ts
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan"); // ❌ 2개 인자가 필요함
```

---

## 10. Emitting with Errors 🗂️

기본적으로 tsc는 오류가 있어도 JS 파일을 출력한다.  
옵션: `tsc --noEmitOnError hello.ts` → 오류가 있으면 JS 출력 안 함

---

## 11. Explicit Types ✍️

```ts
function greet2(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet2("Maddison", new Date()); // ✅ 올바른 타입의 인자 전달
```

---

## 12. 타입 추론 🔥

```ts
let msg2 = "hello there!"; // string 타입으로 자동 추론됨
```

---

## 13. Erased Types 🧹

TypeScript의 타입은 JS로 컴파일될 때 제거된다.  
런타임에 영향을 주지 않는다.

---

## 14. Downleveling ⬇️

TypeScript는 ES2015 이상 문법을 ES3 또는 ES5로 변환할 수 있다.  
기본 target은 ES5이지만, 대부분 ES2015 이상을 사용해도 안전하다.

---

## 15. Strictness ✅

TypeScript는 기본적으로 느슨한 검사를 하지만, `strict` 옵션으로 강화할 수 있다.

`tsconfig.json` 예시:

```json
{
  "strict": true
}
```

> **주요 플래그**
> - `noImplicitAny`: 암묵적 any 금지
> - `strictNullChecks`: null과 undefined에 대해 더 엄격한 검사

---

## 정리 🟢

- TypeScript는 실행 전에 오류를 미리 잡아주는 **정적 타입 시스템**을 제공한다.
- 더 안전하고 예측 가능한 코드를 작성할 수 있도록 돕는다.
- 자동완성, 리팩토링 등 도구 지원을 통해 개발 생산성을 크게 향상시킨다.
