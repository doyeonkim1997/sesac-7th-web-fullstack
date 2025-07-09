/**
 * TypeScript for JavaScript Programmers
 * https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
 * 
 * TypeScript는 JavaScript를 기반으로 한 언어입니다.
 * 기존 JavaScript 기능은 그대로 다 사용하면서, 타입을 추가해서 코드를 더 안전하게 만들어 줍니다.
 *
 * 예를 들어, JavaScript에는 문자열(string), 숫자(number) 같은 기본 자료형이 있지만,
 * 값을 어떻게 쓸지 정확히 검사하지는 않습니다. TypeScript는 이걸 검사해줍니다.
 *
 * 즉, 원래 잘 돌아가던 JavaScript 코드는 TypeScript 코드로도 그대로 쓸 수 있습니다.
 * 다만 TypeScript를 쓰면 예상치 못한 실수를 미리 잡아줘서 버그를 줄일 수 있습니다.
 *
 * 이 자료에서는 TypeScript의 "타입" 개념을 쉽게 설명합니다.
 */

/**
 * Types by Inference (자동으로 알아서 정해주는 타입)
 *
 * TypeScript는 JavaScript를 잘 알고 있어서,
 * 변수에 값을 넣으면 그 값을 보고 타입을 알아서 정해줍니다.
 */

let helloWorld = "Hello World"; 
// TypeScript는 이 변수를 문자열(string)이라고 알아서 인식합니다.

/**
 * 그래서 직접 "string"이라고 적지 않아도 됩니다.
 * 
 * 예: let helloWorld: string
 *
 * 참고로 VS Code에서 JavaScript 코드를 작성할 때 자동완성 기능이 잘 되는 이유는,
 * 내부적으로 TypeScript가 같이 쓰이기 때문입니다.
 */

/**
 * Defining Types (타입 직접 적기)
 *
 * 복잡한 코드나 규칙이 많은 경우에는 TypeScript가 타입을 잘 못 맞출 수도 있습니다.
 * 이런 경우에 우리가 직접 "이 변수는 이런 모양(구조)이다"라고 알려줄 수 있습니다.
 */

const user = {
  name: "Hayes",
  id: 0,
};
// 이 객체에는 name과 id라는 값이 들어 있습니다.

// 이런 "모양"을 미리 정해 놓는 걸 "인터페이스(interface)"라고 부릅니다.
interface User {
  name: string;
  id: number;
}

// 이제 이 규칙(User)에 맞게 객체를 만들겠다고 선언할 수 있습니다.
const user2: User = {
  name: "Hayes",
  id: 0,
};

// 규칙과 다르면 에러가 납니다.
const user3: User = {
  username: "Hayes", // name이 아니라 username이라서 에러
  id: 0,
};

/**
 * JavaScript에서 "클래스"라는 기능을 쓰듯이,
 * TypeScript에서도 클래스에 규칙을 적용할 수 있습니다.
 */

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user4: User = new UserAccount("Murphy", 1);

/**
 * 함수의 입력값(매개변수)이나 반환값에도 규칙을 정할 수 있습니다.
 */

function deleteUser(user: User) {
  // ...
}

function getAdminUser(): User {
  return { name: "Admin", id: 0 };
}

/**
 * JavaScript 기본 자료형
 * - boolean (참/거짓)
 * - bigint (아주 큰 숫자)
 * - null (값이 없음)
 * - number (숫자)
 * - string (문자열)
 * - symbol (고유한 값)
 * - undefined (정의되지 않음)
 *
 * TypeScript는 추가로
 * - any: 아무 값이나 가능
 * - unknown: 타입을 반드시 나중에 정해야 함
 * - never: 절대 일어나지 않는 값
 * - void: 반환값이 없는 함수
 * 등을 제공합니다.
 *
 * 규칙을 만들 때 interface랑 type 두 가지 방법이 있습니다.
 * 보통 interface를 먼저 쓰고, 특별한 경우에 type을 씁니다.
 */

/**
 * Composing Types (타입 합치기)
 *
 * TypeScript는 간단한 규칙들을 조합해서 더 복잡한 규칙을 만들 수 있습니다.
 * 대표적으로 "여러 타입 중 하나"를 선택할 때 유니언(union)을 씁니다.
 * 그리고 "제너릭(generic)"을 사용해서 타입을 더 유연하게 만듭니다.
 */

/**
 * Unions (여러 타입 중 하나)
 *
 * 예를 들어 true 또는 false만 허용하는 타입을 만들 수 있습니다.
 */

type MyBool = true | false;

// 예: 문자열 값이 특정 몇 개 중 하나만 되게 하기
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// 문자열이나 문자열 배열을 받을 수 있는 함수
function getLength(obj: string | string[]) {
  return obj.length;
}

// typeof를 써서 타입을 구분할 수 있습니다.
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

/**
 * Generics (제너릭)
 *
 * 제너릭은 "타입을 변수처럼" 다루는 방법입니다.
 * 예: Array<string>은 "문자열로 이루어진 배열"을 의미합니다.
 */

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// 직접 만든 예시
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// 예시 선언 (구체적 구현 X)
declare const backpack: Backpack<string>;

const object = backpack.get();
// backpack.add(23); // 에러: 숫자는 string 타입에 넣을 수 없음

/**
 * Structural Type System (모양 기반 타입 검사)
 *
 * TypeScript의 중요한 원칙 중 하나는 "모양(구조)이 같으면 같은 타입으로 본다"는 것입니다.
 * 흔히 "덕 타이핑(duck typing)"이라고도 부릅니다.
 */

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point); // 12, 26 출력

// 속성이 더 많아도 OK
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // 12, 26 출력

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // 33, 3 출력

const color = { hex: "#187ABF" };
// logPoint(color); // 에러: x와 y가 없음

/**
 * 클래스도 같은 원리로 타입 검사를 통과합니다.
 */

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // 13, 56 출력

/**
 * 정리
 * - TypeScript는 JavaScript의 기능을 그대로 쓰면서 타입 검사를 더할 수 있습니다.
 * - 자동 타입 추론, 직접 규칙 작성, 유니언, 제너릭, 구조 기반 검사 덕분에
 *   더 안전하고 예측 가능한 코드를 작성할 수 있습니다.
 */
