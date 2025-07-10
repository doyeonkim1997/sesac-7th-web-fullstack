
# Narrowing

> 출처: [TypeScript Handbook - Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

이번 장에서는 **Narrowing(타입 좁히기)** 개념을 다룬다.  
TypeScript는 조건문, 타입 가드 등을 활용하여 **더 구체적인 타입**으로 점점 좁히면서 코드를 분석한다.

---

## 1. Narrowing 기본 개념 🔎

> 💡 **Narrowing(좁히기)란?**
> 처음에 넓게 정의된 타입을 조건문 등을 통해 더 구체적인 타입으로 좁히는 과정이다.
> 예를 들어, `string | number` 타입을 `if`문을 이용해 각각의 타입으로 분리해서 처리할 수 있다.

### 예시: padLeft 함수

```ts
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

- `typeof padding === "number"` 조건문 안에서 padding은 `number` 타입으로 좁혀진다.
- 그 외에는 `string` 타입으로 간주된다.

---

## 2. typeof 타입 가드 🪄

> 💡 **typeof 연산자**
> 런타임에 값의 타입을 문자열로 반환한다.

가능한 반환 값:

- "string"
- "number"
- "bigint"
- "boolean"
- "symbol"
- "undefined"
- "object"
- "function"

### 예시

```ts
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    // object일 때 (string 배열 또는 null)
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}
```

> ⚠️ **주의**
> `typeof null`은 "object"를 반환한다.  
> 따라서 null을 정확히 구분하려면 추가 체크 필요.

---

## 3. Truthiness narrowing 💡

> 💡 **Truthy/Falsy**
> JavaScript에서는 값이 boolean으로 자동 변환될 때 참(Truthy)인지 거짓(Falsy)인지 판단한다.

Falsy로 간주되는 값:

- 0
- NaN
- "" (빈 문자열)
- null
- undefined
- 0n

### 예시

```ts
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}
```

> 💡 **Tip**
> Truthiness는 null/undefined 체크 시 자주 사용된다.

---

## 4. Equality narrowing ⚖️

> 💡 **동등 비교(==, ===)로 타입 좁히기**
> 타입스크립트는 `===`, `!==`, `==`, `!=` 등을 사용해 타입을 좁힐 수 있다.

### 예시

```ts
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
    y.toLowerCase();
  }
}
```

- x와 y가 같으면, 둘 다 `string` 타입으로 좁혀진다.

> 💡 `== null`은 null과 undefined 둘 다를 체크한다.

```ts
interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    container.value *= factor;
  }
}
```

---

## 5. in 연산자 타입 가드 🔐

> 💡 **in 연산자**
> 객체에 특정 속성이 존재하는지 확인할 때 사용.

### 예시

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}
```

---

## 6. instanceof 타입 가드 🏷️

> 💡 **instanceof**
> 어떤 객체가 특정 클래스의 인스턴스인지 확인.

### 예시

```ts
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
```

---

## 7. Control Flow Analysis (흐름 기반 분석) 🔁

> 💡 **Control Flow Analysis**
> 코드의 실행 흐름을 분석하며 변수 타입을 좁힌다.

### 예시

```ts
function example() {
  let x: string | number | boolean;
  x = Math.random() < 0.5;
  console.log(x); // boolean

  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x); // string
  } else {
    x = 100;
    console.log(x); // number
  }

  return x; // string | number
}
```

---

## 8. 사용자 정의 타입 가드 ✨

> 💡 **Type Predicate**
> 함수 반환 타입에 `parameter is Type` 형태로 작성.

### 예시

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let pet: Fish | Bird = { swim: () => console.log("swimming") };

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```

---

## 9. Discriminated unions 🎭

> 💡 **식별된 유니언**
> 각 타입에 공통된 리터럴 속성(예: kind)을 추가해 구분.

### 예시

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
```

---

## 10. Exhaustiveness checking & never 🔥

> 💡 **never 타입**
> 절대 발생하지 않는 타입. 모든 타입에 할당 가능하지만, 어떤 타입도 never에 할당할 수 없다.

### 예시

```ts
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

> 💡 새로운 타입이 추가되면 default 분기에서 컴파일 에러가 발생해 안전성을 높일 수 있다.

---

## ✅ 정리

- Narrowing은 타입을 점점 더 구체적으로 좁혀 타입 안정성을 높인다.
- `typeof`, `in`, `instanceof`, Type Predicate, Control Flow Analysis 등 다양한 방법이 있다.
- Discriminated unions와 never 타입을 활용하면 더 안전한 코드를 작성할 수 있다.
