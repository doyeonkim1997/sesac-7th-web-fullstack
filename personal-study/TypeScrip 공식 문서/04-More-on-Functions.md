
# More on Functions (함수 더 알아보기)

함수는 모든 JavaScript 및 TypeScript 프로그램의 핵심 요소다. 이 장에서는 함수 타입을 어떻게 정의하고, 제네릭, 오버로드, this 타입 선언 등 실전에서 많이 쓰는 다양한 패턴들을 상세하게 알아본다.

---

## 함수 타입 표현식

함수를 타입으로 표현할 때는 `(매개변수: 타입) => 반환타입` 형태를 쓴다.  
이 문법은 화살표 함수와 유사해서 이해하기 쉽다.

```ts
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);
```

✅ 여기서 `(a: string) => void`는 "문자열을 받고 아무것도 반환하지 않는 함수"를 의미한다.

💡 **주의!** 매개변수 이름은 필수이며, 생략하면 안 된다.

---

## 타입 별칭과 함수

타입 별칭을 사용하면 함수 타입에 이름을 붙여 재사용하기 좋다.

```ts
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  fn("Hi!");
}
```

---

## 호출 시그니처 (Call Signatures)

JavaScript 함수는 호출뿐만 아니라 프로퍼티를 가질 수도 있다.  
이런 "객체처럼 동작하면서 호출 가능한" 구조는 아래와 같이 정의한다.

```ts
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
```

여기서 `description`은 프로퍼티이고, `(someArg: number): boolean`은 호출 시그니처다.

---

## 생성자 시그니처 (Construct Signatures)

`new` 키워드를 붙여 생성자 형태의 시그니처도 정의할 수 있다.

```ts
type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

Date 같은 객체는 `new`로도, 그냥 함수처럼도 호출 가능하다.

```ts
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
```

---

## 제네릭 함수

타입 매개변수를 이용해 입력과 출력 타입 사이의 관계를 표현할 수 있다.

```ts
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

const s = firstElement(["a", "b", "c"]); // string
const n = firstElement([1, 2, 3]); // number
const u = firstElement([]); // undefined
```

### 타입 제한 조건

제네릭 타입에 조건을 걸 때는 `extends`를 사용한다.

```ts
function longest<Type extends { length: number }>(a: Type, b: Type) {
  return a.length >= b.length ? a : b;
}

const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("alice", "bob");
```

### 타입 인수 명시

```ts
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr = combine<string | number>([1, 2, 3], ["hello"]);
```

✅ **Tip:** 타입 매개변수를 불필요하게 늘리면 추론이 어려워진다.

---

## 선택적 매개변수

`?`를 사용해 매개변수를 선택적으로 만들 수 있다.

```ts
function f(x?: number) {
  console.log(x);
}

f(); // OK
f(10); // OK
```

기본값을 지정하면 타입은 그 값으로 좁혀진다.

```ts
function f(x = 10) {
  console.log(x);
}
```

---

## 콜백 함수에서의 선택적 매개변수 주의

콜백의 선택적 매개변수는 실제 호출 시에 값이 생략될 수 있음을 의미한다.  
**따라서 콜백에서 선택적 매개변수를 선언할 때는 신중해야 한다!**

```ts
function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
```

---

## 함수 오버로드

```ts
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3); // ❌ 오류
```

✅ **Tip:** 가능한 한 오버로드보다는 유니언 타입을 사용하는 것이 좋다.

---

## this 타입 선언

```ts
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
```

화살표 함수는 `this`를 캡처하므로 function 키워드를 사용해야 한다.

---

## 함수와 관련된 주요 타입

- `void`: 값을 반환하지 않는 함수
- `object`: 원시값이 아닌 모든 값
- `unknown`: 모든 타입 (더 안전한 any)
- `never`: 절대 반환되지 않는 타입
- `Function`: 일반적인 Function 타입 (가능하면 사용 자제)

---

## 나머지 매개변수와 전개 구문

```ts
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}

const a = multiply(10, 1, 2, 3);
```

```ts
const args = [8, 5] as const;
const angle = Math.atan2(...args);
```

---

## 매개변수 구조 분해

```ts
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}
```

---

## 함수의 할당 가능성과 void

```ts
type voidFunc = () => void;

const f1: voidFunc = () => true; // 허용
const v1 = f1(); // v1 타입은 void
```

하지만 명시적으로 void를 반환 타입으로 선언한 함수는 값을 반환하면 오류다.

```ts
function f2(): void {
  // return true; // ❌ 오류
}
```

---

## ✅ 요약

- 함수는 타입 정의가 매우 다양하다.
- 제네릭과 오버로드를 적절히 사용하되, **추론을 방해하지 않도록 최소화**할 것.
- 선택적 매개변수와 this 사용 시 주의.
- 되도록 오버로드보다는 **유니언 타입**을 활용.
- `unknown`, `never`, `void` 등 특별한 타입의 의미를 정확히 이해.
