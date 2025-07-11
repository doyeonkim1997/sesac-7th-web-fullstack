
# ✨ 제네릭 (Generics)

TypeScript에서 **제네릭**은 재사용 가능한 컴포넌트를 만들 때 정말 유용한 개념이에요. 간단히 말하면, 한 가지 타입에 한정하지 않고 다양한 타입에서 동작하도록 만드는 거죠!

---

## 🏷️ 제네릭의 Hello World

가장 간단한 예제로 `identity` 함수를 봅시다. 이 함수는 받은 값을 그대로 반환하는 함수예요.

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}

let output1 = identity<string>("hello");
// output1의 타입은 string

let output2 = identity(123);
// output2의 타입은 number (타입 추론)
```

> 💬 **설명**: `<Type>`은 타입 매개변수라고 불리고, 함수 안에서 타입을 동적으로 받아와 사용할 수 있게 해줘요!

---

## 🛠️ 제네릭 타입 변수 활용하기

제네릭 타입 변수를 사용할 때는 주의할 점이 있어요. 예를 들어 아래처럼 `length` 속성을 접근하려 하면 오류가 나요.

```ts
function loggingIdentity<Type>(arg: Type): Type {
  // console.log(arg.length); ❌ 오류 발생!
  return arg;
}
```

왜냐면, Type이 어떤 타입인지 정확히 알 수 없기 때문에 `.length` 속성이 있다고 보장할 수 없어요.

만약 배열로만 제한하고 싶다면, 이렇게 타입을 배열로 선언하면 됩니다!

```ts
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length); // ✅ 배열이라 length 사용 가능!
  return arg;
}
```

> 💬 **포인트**: `Type[]`는 `Array<Type>`와 동일한 의미예요.

---

## ✍️ 제네릭 타입 (Generic Types)

함수를 변수에 담아 사용할 수도 있고, 인터페이스로 타입을 표현할 수도 있어요.

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Type>(arg: Type) => Type = identity;
```

### 인터페이스로 작성하기

```ts
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

let myIdentity: GenericIdentityFn = identity;
```

### 인터페이스에 타입 매개변수 선언하기

```ts
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

> 💬 **설명**: 인터페이스에 `<Type>`를 직접 넣으면, 사용할 때 타입을 명시해야 해요.

---

## 🏛️ 제네릭 클래스 (Generic Classes)

제네릭은 클래스에도 쓸 수 있어요!

```ts
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (a, b) => a + b;
```

> 💬 **주의**: 클래스의 정적 멤버에서는 타입 매개변수를 사용할 수 없어요!

---

## 🚧 제네릭 제약조건 (Constraints)

모든 타입을 허용하지 않고, 특정 조건을 만족하는 타입만 쓰도록 제한할 수도 있어요.

```ts
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // ✅ 이제 length 접근 가능!
  return arg;
}
```

> 💬 **포인트**: `extends`를 사용해서 제약조건을 걸 수 있어요.

---

## 🔑 타입 매개변수 제약조건 안에서 사용하기

```ts
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

const obj = { a: 1, b: 2, c: 3 };

getProperty(obj, "a"); // ✅
getProperty(obj, "m"); // ❌ 오류!
```

---

## 🦁 클래스 타입 사용하기

```ts
class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper = { hasMask: true };
}

class Lion extends Animal {
  keeper = { nametag: "King" };
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

console.log(createInstance(Lion).keeper.nametag);
console.log(createInstance(Bee).keeper.hasMask);
```

---

## ✅ 요약

- 제네릭을 사용하면 **코드를 더 유연하고 재사용 가능하게** 만들 수 있어요.
- 타입 안전성을 지키면서도, 다양한 타입에서 동작하도록 작성할 수 있다는 점이 큰 장점이에요!

---

👩‍💻 **파일 작성 완료!** 필요하면 각 섹션별 추가 설명이나 더 많은 예제도 넣어줄게요! 알려주세요 😄
