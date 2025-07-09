
# Everyday Types

> 출처: [TypeScript Handbook - Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

이번 장에서는 JavaScript 코드에서 가장 흔히 사용되는 타입들과 TypeScript에서의 대응 방식을 알아본다.  
자주 쓰이는 타입들을 확실히 익히면 더 안전하고 예측 가능한 코드를 작성할 수 있다.

---

## 1. 원시 타입 📄

> 💡 **원시 타입이란?**
> 더 이상 쪼갤 수 없는 기본 데이터 단위. JavaScript와 TypeScript 모두에서 기본적으로 제공되는 타입이다.

### 주요 타입

- `string`: 문자열 데이터 (예: `"Hello, world"`)
- `number`: 숫자 데이터 (예: `42`, JavaScript에는 int/float 구분이 없다)
- `boolean`: 참 또는 거짓 (`true`, `false`)

> ⚠️ **주의**  
> `String`, `Number`, `Boolean`과 같은 대문자 타입은 거의 사용하지 않는다. 항상 소문자를 사용하자.

---

## 2. 배열 📚

> 💡 **배열 타입 표기법**
> 배열의 타입을 지정할 때 `T[]` 또는 `Array<T>` 두 가지 방법을 사용할 수 있다.

```ts
let nums: number[] = [1, 2, 3];  // 숫자 배열
let strs: string[] = ["a", "b", "c"];  // 문자열 배열
```

또는 제네릭 방식으로:

```ts
let nums: Array<number> = [1, 2, 3];
```

> ⚠️ `[number]`는 튜플과 관련 있는 문법으로, 배열 타입과 혼동하지 않도록 주의하자.

---

## 3. any 타입 🎭

> 💡 **any란?**
> "TypeScript의 보호를 끄겠다"는 의미. 모든 타입의 값을 허용한다.

```ts
let obj: any = { x: 0 };

obj.foo(); // 가능
obj();    // 가능
obj.bar = 100; // 가능
obj = "hello"; // 가능
const n: number = obj; // 가능
```

> ⚠️ **주의**
> `any`를 남발하면 TypeScript의 장점을 잃게 된다.

### noImplicitAny

`tsconfig.json`에 `"noImplicitAny": true`를 설정하면, 암묵적으로 `any`가 되는 상황을 막아준다.

---

## 4. 변수 타입 표기 ✍️

```ts
let myName: string = "Alice";
```

> 💡 **TypeScript 문법**
> 타입은 변수 이름 뒤에 `:`로 표기한다. C처럼 `int x = 0;` 형태가 아니다.

대부분의 경우, TypeScript는 초기값을 통해 타입을 자동으로 추론한다.

```ts
let myName = "Alice"; // string으로 추론
```

---

## 5. 함수 타입 ⚙️

### 매개변수 타입

```ts
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

greet("Alice"); // ✅
greet(42);     // ❌ 오류: number는 string에 할당할 수 없음
```

### 반환 타입

```ts
function getFavoriteNumber(): number {
  return 26;
}
```

> 💡 **Tip**
> 반환 타입은 생략 가능하지만, 문서화나 의도 전달을 위해 쓰면 좋다.

---

## 6. 익명 함수 🌀

TypeScript는 문맥(Context)을 활용해 타입을 자동 추론한다.

```ts
const names = ["Alice", "Bob", "Eve"];

names.forEach(function (s) {
  console.log(s.toUpperCase());
});

names.forEach((s) => {
  console.log(s.toUpperCase());
});
```

> ⚠️ 오타 예시
>
> `s.toUppercase()` ❌ → `s.toUpperCase()` ✅

---

## 7. 객체 타입 🏷️

> 💡 **객체 타입 선언**
> 객체 속성과 각 속성의 타입을 나열한다.

```ts
function printCoord(pt: { x: number; y: number }) {
  console.log("x =", pt.x);
  console.log("y =", pt.y);
}

printCoord({ x: 3, y: 7 });
```

---

## 8. 옵셔널 프로퍼티 💬

> 💡 **옵셔널 프로퍼티**
> 존재할 수도 있고, 안 할 수도 있는 속성.

```ts
function printName(obj: { first: string; last?: string }) {
  console.log(obj.first);

  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }

  // 최신 문법 (옵셔널 체이닝)
  console.log(obj.last?.toUpperCase());
}

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

---

## 9. 유니언 타입 🔀

> 💡 **유니언 타입**
> 여러 타입 중 하나를 허용한다. 타입을 조합할 때 사용한다.

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId(101);
printId("202");
```

### 배열 or 문자열

```ts
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}
```

### 공통 메서드 사용

```ts
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
```

---

## 10. 타입 별칭 💡

> 💡 **타입 별칭(Type Alias)**
> 복잡한 타입에 이름을 붙여 재사용성을 높인다.

```ts
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("x =", pt.x);
  console.log("y =", pt.y);
}
```

---

## 11. 인터페이스 📄

> 💡 **인터페이스**
> 객체의 구조를 선언하는 데 주로 사용. 확장성이 뛰어나다.

```ts
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("x =", pt.x);
  console.log("y =", pt.y);
}
```

> **타입 별칭 vs 인터페이스**
>
> - 인터페이스는 확장(extends) 가능.
> - 타입은 새 속성을 추가할 수 없음.

---

## 12. 타입 단언 🔎

> 💡 **타입 단언(Asserting)**
> "내가 타입을 잘 알고 있으니 컴파일러야 걱정하지 마!"라는 의미.

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// 또는
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");
```

---

## 13. 리터럴 타입 🏷️

> 💡 **리터럴 타입**
> 특정 값만 허용하도록 타입을 제한한다.

```ts
function printText(s: string, alignment: "left" | "right" | "center") {
  console.log(`${s} (aligned: ${alignment})`);
}

printText("Hello", "left");
printText("Hi", "centre"); // ❌ 오류
```

---

## 14. null & undefined ⚠️

> 💡 **strictNullChecks**
> null/undefined 사용 시 더 엄격한 검사를 위해 사용.

```ts
function doSomething(x: string | undefined) {
  if (x === undefined) {
    // ...
  } else {
    console.log(x.toUpperCase());
  }
}

function liveDangerously(x?: number | undefined) {
  console.log(x!.toFixed());
}
```

---

## 15. 열거형 (enum) 🎲

> 💡 **열거형(enum)**
> 이름 있는 상수 집합을 선언할 때 사용.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

---

## 16. 기타 원시 타입 🧬

### bigint

> 💡 **bigint**
> 매우 큰 정수를 표현.

```ts
const oneHundred: bigint = BigInt(100);
const anotherHundred: bigint = 100n;
```

### symbol

> 💡 **symbol**
> 고유하고 변경 불가능한 값.

```ts
const firstName = Symbol("name");
const secondName = Symbol("name");

if (firstName === secondName) {
  // 절대 true가 될 수 없음
}
```

---

## ✅ 정리

- TypeScript의 다양한 타입 개념을 이해하면, 코드 안정성과 유지보수성을 높일 수 있다.
- `any`와 같은 타입은 꼭 필요한 경우에만 사용하자.
- 타입 별칭, 인터페이스, 유니언 등을 적절히 활용하면 더 유연하고 안전한 코드를 작성할 수 있다.


---

## 🧩 Mini Quiz (복습 퀴즈)

### 1️⃣ 아래 코드에서 에러가 발생하는 이유는?

```ts
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase());
}

greet(123);
```

> 💡 **힌트**: `number` 타입은 `string`에 할당될 수 없다.

---

### 2️⃣ `any` 타입과 `unknown` 타입의 차이점 중 맞는 것은?

- A) 둘 다 아무 타입이나 받을 수 있지만, `unknown`은 사용 전에 타입 검사를 요구한다.
- B) `any`는 타입 검사를 강제하지만, `unknown`은 하지 않는다.
- C) 둘 다 완전히 동일하다.

> 💡 **힌트**: `unknown`은 더 안전한 `any`라고 불린다.

---

### 3️⃣ 옵셔널 프로퍼티를 나타내는 표기법은 무엇인가요?

- A) `prop!`
- B) `prop?`
- C) `prop: optional`

> 💡 **힌트**: 속성 이름 뒤에 붙는 기호.

---

### 4️⃣ 아래 코드에서 `x`의 타입은 무엇으로 추론될까요?

```ts
let x = "hello";
```

- A) `any`
- B) `string`
- C) `"hello"`

> 💡 **힌트**: 초기값에 따라 추론된다.

---

### 5️⃣ 다음 중 **인터페이스**의 특징으로 올바른 것은?

- A) 한 번 선언되면 더 이상 확장할 수 없다.
- B) 확장이 가능하며, 다른 타입들과 병합할 수 있다.
- C) 오직 프리미티브 타입에만 사용할 수 있다.

> 💡 **힌트**: interface는 확장성과 구조적 유연성이 큰 장점이다.

---

## ✅ Answers (힌트)

1. `greet` 함수는 `string`을 받도록 정의되어 있지만, `number`를 전달했기 때문입니다.
2. A
3. B
4. B
5. B

---
