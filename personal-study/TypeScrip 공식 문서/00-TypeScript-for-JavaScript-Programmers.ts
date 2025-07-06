/**
 * TypeScript for JavaScript Programmers
 *
 * TypeScript는 JavaScript와 독특한 관계를 가집니다.
 * TypeScript는 JavaScript의 모든 기능을 제공하면서, 그 위에 타입 시스템을 추가한 언어입니다.
 *
 * 예를 들어, JavaScript는 string, number 같은 원시 타입(primitive)을 제공합니다.
 * 하지만 일관되게 타입을 할당했는지 확인하지는 않습니다. TypeScript는 이 부분을 검증해 줍니다.
 *
 * 즉, 기존에 잘 동작하는 JavaScript 코드는 TypeScript 코드이기도 합니다.
 * TypeScript의 주요 장점은 예상치 못한 동작을 찾아내어 버그 가능성을 줄여주는 것입니다.
 *
 * 이 튜토리얼은 TypeScript의 타입 시스템을 중심으로 간략히 소개합니다.
 */

/**
 * Types by Inference (추론된 타입)
 *
 * TypeScript는 JavaScript를 이해하고, 많은 경우 타입을 자동으로 생성합니다.
 * 예를 들어, 변수를 선언하고 특정 값으로 할당하면 그 값을 기준으로 타입을 추론합니다.
 */

let helloWorld = "Hello World";
// TypeScript는 helloWorld를 string 타입으로 추론합니다.

/**
 * TypeScript는 JavaScript의 동작 방식을 기반으로 타입 시스템을 만들기 때문에,
 * 타입을 명시적으로 작성하지 않아도 동작합니다.
 * 
 * 예: let helloWorld: string
 *
 * VS Code에서 JavaScript를 작성할 때 자동완성이 되는 이유도 내부적으로 TypeScript가 사용되기 때문입니다.
 */

/**
 * Defining Types (타입 정의)
 *
 * JavaScript에는 다양한 디자인 패턴이 있지만, 일부 패턴(예: 동적 프로그래밍)은 타입 추론을 어렵게 합니다.
 * 이런 경우, TypeScript는 타입을 명시적으로 작성할 수 있는 문법을 제공합니다.
 */

const user = {
  name: "Hayes",
  id: 0,
};
// 위 객체는 name과 id라는 속성을 포함하고 있습니다.

// 인터페이스를 사용하여 객체 형태를 명확히 정의할 수 있습니다.
interface User {
  name: string;
  id: number;
}

// 인터페이스 타입으로 객체 선언
const user2: User = {
  name: "Hayes",
  id: 0,
};

// 인터페이스와 다른 객체를 선언하면 오류가 발생합니다.
const user3: User = {
  username: "Hayes",
  id: 0,
  // 오류: 'username' 속성은 'User' 타입에 존재하지 않습니다.
};

/**
 * JavaScript가 클래스와 OOP를 지원하듯, TypeScript도 동일합니다.
 * 인터페이스는 클래스와 함께 사용할 수 있습니다.
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
 * 함수의 매개변수나 반환값에도 인터페이스를 사용할 수 있습니다.
 */

function deleteUser(user: User) {
  // ...
}

function getAdminUser(): User {
  return { name: "Admin", id: 0 };
}

/**
 * JavaScript의 기본 primitive 타입
 * boolean, bigint, null, number, string, symbol, undefined
 * 
 * TypeScript는 추가적으로
 * - any: 아무 타입이나 허용
 * - unknown: 타입을 명확히 선언하도록 강제
 * - never: 절대 발생할 수 없는 타입
 * - void: 반환값이 없거나 return 없는 함수
 * 등을 제공합니다.
 *
 * 타입을 만들 때 interface와 type 두 가지 방법이 있습니다.
 * interface를 선호하며, type은 특정 기능이 필요할 때 사용합니다.
 */

/**
 * Composing Types (타입 조합)
 *
 * TypeScript에서는 간단한 타입을 조합해서 복잡한 타입을 만들 수 있습니다.
 * 대표적으로 union과 generics가 있습니다.
 */

/**
 * Unions (유니언 타입)
 *
 * 유니언 타입은 여러 타입 중 하나가 될 수 있음을 의미합니다.
 */

type MyBool = true | false;

// 예시: 문자열 리터럴 집합
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// 문자열 또는 배열을 받는 함수
function getLength(obj: string | string[]) {
  return obj.length;
}

// typeof로 타입 좁히기
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

/**
 * Generics (제너릭)
 *
 * 제너릭은 타입을 변수처럼 사용할 수 있게 해줍니다.
 * 예: Array<string> 은 문자열 배열을 의미합니다.
 */

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// 사용자 정의 제너릭 예시
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// 선언만 하는 예시 (실제 구현 X)
declare const backpack: Backpack<string>;

const object = backpack.get();
// backpack.add(23); // 오류: number는 string에 할당할 수 없습니다.

/**
 * Structural Type System (구조적 타입 시스템)
 *
 * TypeScript의 핵심 원칙 중 하나는 "값의 구조(모양)를 기반으로 타입을 확인한다"는 점입니다.
 * 흔히 "덕 타이핑(duck typing)" 또는 "구조적 타이핑"이라 부릅니다.
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

// 추가 속성이 있어도 가능
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // 12, 26 출력

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // 33, 3 출력

const color = { hex: "#187ABF" };
// logPoint(color); // 오류: x, y 속성이 없음

/**
 * 클래스도 같은 원리로 구조 체크를 통과합니다.
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
 * 요약
 * - TypeScript는 JavaScript의 모든 기능을 포함하면서 타입 시스템을 추가로 제공합니다.
 * - 타입 추론, 명시적 타입 정의, 제너릭, 유니언, 구조적 타입 시스템 등을 통해 더 안전하고 견고한 코드를 작성할 수 있습니다.
 */
