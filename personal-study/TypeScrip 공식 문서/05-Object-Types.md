
# 📦 Object Types (객체 타입)

JavaScript에서 데이터를 묶고 전달하는 기본적인 방식은 객체(Object)를 사용하는 것이다. TypeScript에서도 이러한 객체를 타입으로 나타낼 수 있다.

객체 타입은 아래와 같이 익명 형태로 작성할 수도 있고,

```ts
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
```

또는 `interface`나 `type alias`로 이름을 붙여 작성할 수도 있다.

```ts
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}
```

```ts
type Person = {
  name: string;
  age: number;
};

function greet(person: Person) {
  return "Hello " + person.name;
}
```

위 예제 모두에서 `name`(string 타입)과 `age`(number 타입)를 가진 객체를 매개변수로 받고 있다. TypeScript에서는 이렇게 객체 타입을 명확히 선언함으로써 코드의 의도를 분명히 하고, 실수를 줄일 수 있다.

## ❓ 속성 한눈에 보기

각 속성은 타입과 선택 여부(`?`), 그리고 읽기 전용 여부(`readonly`)를 지정할 수 있다.

### ⚡ 선택적 속성 (Optional Properties)

속성 이름 뒤에 `?`를 붙이면 선택적으로 사용할 수 있다는 의미이다.

```ts
interface PaintOptions {
  shape: string;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  // opts.xPos와 opts.yPos는 undefined일 수 있음
  let x = opts.xPos ?? 0; // 기본값 0
  let y = opts.yPos ?? 0; // 기본값 0
  console.log(`x: ${x}, y: ${y}`);
}
```

> 💡 `??` 연산자는 nullish coalescing 연산자로, 값이 `null` 또는 `undefined`인 경우 오른쪽 값을 사용한다.

선택적 속성은 설정하지 않아도 되지만, 지정하면 반드시 선언된 타입을 따라야 한다.

### 🔒 읽기 전용 속성 (Readonly Properties)

`readonly` 키워드를 붙이면 속성을 재할당할 수 없다.

```ts
interface SomeType {
  readonly prop: string;
}

function showProp(obj: SomeType) {
  console.log(obj.prop);
  // obj.prop = "변경"; // ❌ 오류: 읽기 전용 속성
}
```

단, 속성이 참조형 객체인 경우 내부 값을 변경할 수는 있다.

```ts
interface Home {
  readonly resident: { name: string; age: number };
}

const home: Home = {
  resident: { name: "Alice", age: 30 }
};

home.resident.age++; // ✅ 내부 속성 변경 가능
// home.resident = { name: "Bob", age: 25 }; // ❌ 오류: 전체 객체 재할당 불가
```

### 🔑 인덱스 시그니처 (Index Signatures)

모든 속성 이름을 미리 알 수 없을 때 사용한다.

```ts
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["a", "b", "c"];
console.log(arr[1]); // "b"
```

```ts
interface NumberDictionary {
  [key: string]: number;
  length: number; // OK
  // name: string; // ❌ 오류: string은 number에 할당될 수 없음
}
```

## ✨ 과잉 속성 검사 (Excess Property Checks)

객체 리터럴을 바로 전달할 때, TypeScript는 선언된 타입 외의 속성이 포함되면 오류를 발생시킨다.

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color ?? "red",
    area: config.width ? config.width * config.width : 100
  };
}

// createSquare({ colour: "red", width: 20 }); // ❌ 오류: 'colour' 속성은 존재하지 않음
```

회피 방법은 세 가지가 있다.

1️⃣ 타입 단언 사용

```ts
createSquare({ width: 20, opacity: 0.5 } as SquareConfig);
```

2️⃣ 문자열 인덱스 시그니처 추가

```ts
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

3️⃣ 변수에 먼저 할당

```ts
let options = { colour: "red", width: 20 };
createSquare(options); // OK
```

## 🧬 타입 확장 (Extending Types)

`extends`를 사용하여 기존 타입을 확장할 수 있다.

```ts
interface BasicAddress {
  street: string;
  city: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}
```

## 🔗 교차 타입 (Intersection Types)

여러 타입을 `&` 연산자로 결합할 수도 있다.

```ts
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

const cc: ColorfulCircle = {
  color: "blue",
  radius: 42
};
```

## 📦 제네릭 객체 타입 (Generic Object Types)

```ts
interface Box<Type> {
  contents: Type;
}

let box: Box<string> = { contents: "Hello" };
```

## 🥗 읽기 전용 배열 (ReadonlyArray)

```ts
function readValues(values: readonly string[]) {
  // values.push("new"); // ❌ 오류: 읽기 전용 배열
}
```

`readonly string[]`는 `ReadonlyArray<string>`의 축약형이다.

## 🧾 튜플 타입 (Tuple Types)

```ts
type StringNumberPair = [string, number];

const pair: StringNumberPair = ["hello", 42];
```

튜플은 고정된 길이와 타입 순서를 가진 배열이다.

```ts
function logPair([str, num]: [string, number]) {
  console.log(str, num);
}
```

옵션 요소나 rest 요소도 사용할 수 있다.

```ts
type Flexible = [string, number?];
type RestTuple = [string, ...number[]];
```

## ✅ 마무리

객체 타입은 TypeScript에서 구조화된 데이터를 정의하고 다룰 때 강력한 도구이다. `interface`, `type`, 선택적 속성, 읽기 전용, 인덱스 시그니처 등 다양한 문법을 적절히 조합하면 견고하고 예측 가능한 코드를 작성할 수 있다.

---

👉 **Tip:** TypeScript의 타입 시스템은 "정적 계약서"라고 생각하면 된다. 코드를 작성할 때 오류를 방지하고, 협업 시 의도를 명확하게 공유할 수 있도록 돕는다.
