# TypeScript for JavaScript Programmers

> 출처: [TypeScript Handbook - TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

TypeScript는 JavaScript를 기반으로 한 언어다. 
기존 JavaScript 기능은 그대로 다 사용하면서, **타입**을 추가해 코드를 더 안전하게 만든다.

예를 들어, JavaScript에는 문자열(`string`), 숫자(`number`) 같은 기본 자료형이 있지만, 값을 정확히 검사하지는 않는다. TypeScript는 이걸 검사한다.

즉, 원래 잘 돌아가던 JavaScript 코드는 TypeScript 코드로도 그대로 쓸 수 있다.
다만 TypeScript를 쓰면 예상치 못한 실수를 미리 잡아내 버그를 줄일 수 있다.

이 문서는 TypeScript의 **"타입"** 개념을 쉽게 설명한다.

## 1. Types by Inference (자동 타입 추론) 📌

> 💡 **타입 추론(Type Inference)이란?**
> 프로그래밍에서 코드의 문맥을 보고 타입을 자동으로 파악하는 것을 말한다.
> 마치 "사과를 먹었다"라는 문장에서 '사과'가 음식이라는 것을 자동으로 이해하는 것과 비슷하다.

TypeScript는 JavaScript를 잘 알고 있어서, 변수를 선언할 때 값을 보고 타입을 자동으로 정한다.

```ts
// 타입 추론 예시
let helloWorld = "Hello World";
// TypeScript는 초기값 "Hello World"를 보고 자동으로 string 타입으로 추론합니다
```

그래서 `string`이라고 직접 쓰지 않아도 된다.

예:  
```ts
let helloWorld: string
```

참고: VS Code에서 JavaScript 자동완성이 잘 되는 이유는 내부적으로 TypeScript가 같이 쓰이기 때문이다.

---

## 2. Defining Types (타입 직접 정의하기) 🗂️

> 💡 **인터페이스(Interface)란?**
> 객체의 구조를 정의하는 설계도와 같다. 마치 건물을 지을 때 설계도가 필요한 것처럼,
> TypeScript에서는 객체가 어떤 속성과 메서드를 가져야 하는지 미리 정의할 수 있다.

복잡하거나 규칙이 많은 경우, TypeScript가 타입을 잘못 추론할 수도 있다. 이럴 때는 직접 타입을 정의할 수 있다.

```ts
const user = {
  name: "Hayes",
  id: 0,
};
```

이런 **모양**을 미리 정해 놓는 걸 **인터페이스(interface)** 라고 한다.

```ts
// 인터페이스를 사용한 객체 타입 정의
interface User {
  name: string;  // name은 문자열만 허용
  id: number;    // id는 숫자만 허용
}

// 인터페이스를 타입으로 사용
const user2: User = {
  name: "Hayes",  // ✅ OK: string 타입 할당
  id: 0,         // ✅ OK: number 타입 할당
};

// 인터페이스와 맞지 않는 객체 구조
const user3: User = {
  username: "Hayes",  // ❌ Error: 'name' 속성이 필요한데 'username'이 사용됨
  id: 0,
};
```

---

## 3. 클래스에 타입 적용하기 💻

```ts
// 클래스에 타입 시스템 적용
class UserAccount {
  // 클래스 프로퍼티의 타입을 명시적으로 선언
  name: string;
  id: number;

  // 생성자의 매개변수에도 타입 지정
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

// User 인터페이스를 타입으로 사용하면서 UserAccount 인스턴스 생성
const user4: User = new UserAccount("Murphy", 1);
```

---

## 4. 함수의 타입 🔧

```ts
function deleteUser(user: User) {
  // ...
}

function getAdminUser(): User {
  return {
    name: "Admin",
    id: 0,
  };
}
```

---

## 5. 기본 자료형 🧾

### JavaScript 기본 타입 상세 설명
- `boolean` - 참/거짓 (true/false)
- `bigint` - 큰 숫자 (2^53 이상의 정수를 다룰 때 사용)
- `null` - 값 없음 (의도적으로 비어있음을 표현)
- `number` - 숫자 (정수와 소수 모두 포함)
- `string` - 문자열 (텍스트 데이터)
- `symbol` - 고유한 값 (객체 속성의 키로 주로 사용)
- `undefined` - 정의되지 않음 (값이 할당되지 않은 상태)

### TypeScript 추가 타입 상세 설명
- `any` - 아무 값이나 가능 (TypeScript의 타입 검사를 비활성화)
- `unknown` - 타입을 나중에 정해야 함 (any보다 안전한 타입)
- `never` - 절대 발생하지 않는 값 (예: 항상 에러를 던지는 함수의 반환 타입)
- `void` - 반환값 없는 함수 (undefined를 반환하는 함수의 타입)

> **Note**: `interface`와 `type` 둘 다 규칙을 만들 때 쓰며, 보통은 `interface`를 먼저 사용한다.

---

## 6. Composing Types (타입 조합하기) ⚡

### Unions (여러 타입 중 하나)

```ts
// 유니언 타입 예시
type WindowStates = "open" | "closed" | "minimized";  // 세 가지 문자열 중 하나만 허용
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;  // 다섯 개의 숫자 중 하나만 허용

// 유니언 타입을 활용한 함수 예시
function getLength(obj: string | string[]) {  // 문자열 또는 문자열 배열을 받을 수 있음
  return obj.length;  // string과 string[] 모두 length 속성을 가지고 있어서 가능
}

function wrapInArray(obj: string | string[]) {
  // typeof로 타입 가드를 사용해 런타임에 타입 확인
  if (typeof obj === "string") {
    return [obj];  // 문자열이면 배열로 감싸서 반환
  }
  return obj;  // 이미 배열이면 그대로 반환
}
```

---

### Generics (제너릭) 📚

> 💡 **제너릭이란?**
> 재사용 가능한 컴포넌트를 만들 때 사용하는 템플릿과 같은 개념이다.
> 예를 들어, 배열이 "숫자의 배열", "문자열의 배열" 등 다양한 타입을 담을 수 있는 것처럼,
> 제너릭을 사용하면 다양한 타입에 대해 동작하는 컴포넌트를 만들 수 있다.

예시로 살펴보는 제너릭:
```ts
// 제너릭 함수 예시
function firstElement<T>(arr: T[]): T | undefined {
    // T는 타입 변수로, 어떤 타입이든 될 수 있음
    return arr[0];  // 배열의 첫 번째 요소를 반환하거나 undefined
}

// 제너릭 함수 사용 예시
const numbers = firstElement([1, 2, 3]);  // T는 number로 결정됨
const strings = firstElement(["a", "b"]); // T는 string으로 결정됨
```

---

## 7. Structural Type System (구조 기반 타입 검사) 🦆

> 💡 **덕 타이핑(Duck Typing)이란?**
> "만약 어떤 새가 오리처럼 걷고, 오리처럼 소리내고, 오리처럼 헤엄치면, 그건 오리일 것이다"라는 
> 개념에서 유래했다. TypeScript에서는 객체의 실제 타입보다는 객체가 가진 속성과 메서드가 
> 중요하다.

TypeScript는 **모양(구조)이 같으면 같은 타입**으로 간주한다. 이를 "덕 타이핑(duck typing)"이라고도 부른다.

```ts
// 구조적 타이핑 예시
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// Point 인터페이스와 정확히 일치하는 객체
const point = { x: 12, y: 26 };
logPoint(point);  // ✅ OK: 필요한 속성이 모두 있음

// 추가 속성이 있는 객체도 사용 가능
const point3 = { x: 12, y: 26, z: 89 };  // z가 추가되어 있지만 OK
logPoint(point3); // ✅ OK: 필요한 속성이 모두 있음

// 다른 용도로 만든 객체여도 필요한 속성만 있으면 사용 가능
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);  // ✅ OK: x와 y가 있으므로 사용 가능
```

클래스도 동일하게 적용된다.

```ts
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // 출력: 13, 56
```

---

## 정리 ✅

- TypeScript는 JavaScript의 기능을 그대로 쓰면서 **타입 검사**를 추가할 수 있다.
- 자동 타입 추론, 직접 규칙 작성, 유니언, 제너릭, 구조 기반 검사 덕분에 **더 안전하고 예측 가능한 코드**를 작성할 수 있다.
