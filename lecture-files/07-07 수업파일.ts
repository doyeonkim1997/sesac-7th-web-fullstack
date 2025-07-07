/**
 * 1) boolean
*/

function checkUserStatus(isActive: boolean): string {
  return isActive ? "사용자가 로그인 되어 있습니다." : "사용자가 로그인 되어 있지 않습니다.";
}
const currentUserLoggedIn: boolean = true;
console.log(checkUserStatus(currentUserLoggedIn));

const guestUserLoggedIn: boolean = false;
console.log(checkUserStatus(guestUserLoggedIn));


/**
 * 2) number
*/

function calculateDiscountPrice(originalPrice: number, discountRate: number): number {
  return originalPrice * (1 - discountRate);
}
const productPrice: number = 12500.5;
const discount: number = 0.15;
const finalPrice = calculateDiscountPrice(productPrice, discount);
console.log(`원가 ${productPrice}원에서 ${discount * 100}% 할인된 가격: ${finalPrice.toFixed(2)}원`);

const hexValue: number = 0xFF;
console.log(hexValue);


/**
 * 3) string
 */

function generateWelcomeMessage(userName: string, appName: string): string {
  return `안녕하세요, ${userName}님! ${appName}에 오신 것을 환영합니다.`;
}
const user: string = "홍길동";
const app: string = "TypeScript시작";
console.log(generateWelcomeMessage(user, app));


/**
 * 4) Array
 */

function calculateAverage(grades: number[]): number {
  if (grades.length === 0) return 0;
  let sum: number = 0;
  for (const grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
}
const studentGrades: number[] = [88, 92, 75, 95, 80];
console.log(`학생 평균 점수: ${calculateAverage(studentGrades).toFixed(2)}점`);

const fruits: string[] = ["사과", "바나나", "오렌지"];
fruits.push("포도");
console.log(fruits);


/**
 * 5) Tuple
 */
const userInfo: [string, number, boolean] = ["이순신", 35, true];
console.log(`이름: ${userInfo[0]}, 나이: ${userInfo[1]}, 활성: ${userInfo[2]}`);

/**
 * 6) enum
 */

enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  User = "USER",
}
enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
const today: DayOfWeek = DayOfWeek.Monday;
console.log(`현재 요일: ${DayOfWeek[today]} (${today})`);


/**
 * 7) const & readonly
 */

const PI: number = 3.14;
console.log(`원주율: ${PI}`);

const colors: string[] = ["red", "green", "blue"];
colors.push("yellow");
console.log(colors);

class Product {
  readonly productId: string;
  productName: string;
  price: number;

  constructor(id: string, name: string, price: number) {
    this.productId = id;
    this.productName = name;
    this.price = price;
  }
}
const laptop = new Product("LAPTOP001", "최신형 노트북", 1500000);
console.log(`제품명: ${laptop.productName}`);
laptop.productName = "고급형 노트북";
console.log(`변경된 제품명: ${laptop.productName}`);


/**
 * 8) any
 */

let flexibleValue: any;
flexibleValue = 42;
console.log(flexibleValue);
flexibleValue = "Hello!";
console.log(flexibleValue);
flexibleValue = { name: "Alice", age: 30 };
console.log(flexibleValue);


/**
 * 9) union
 */

function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(`문자열 ID: ${id}`);
  } else {
    console.log(`숫자 ID: ${id}`);
  }
}
printId("spartan123");
printId(789012);


/**
 * 10) interface
 */

interface ProductInfo {
  id: string;
  name: string;
  price: number;
  description?: string;
  readonly createdAt: Date;
}
const keyboard: ProductInfo = {
  id: "KEYBOARD001",
  name: "기계식 키보드",
  price: 80000,
  createdAt: new Date(),
  description: "타이핑이 편한 키보드",
};

interface StringArray {
  [index: number]: string;
}
const myArray: StringArray = ["Hello", "World"];
console.log(myArray[0]);

interface Dictionary {
  [key: string]: string;
}
const myDictionary: Dictionary = {
  name: "홍길동",
  city: "서울",
};
console.log(myDictionary["name"]);
myDictionary["country"] = "대한민국";


/**
 * 11) 함수 타입 인터페이스
 */
interface SearchFunction {
  (source: string, subString: string): boolean;
}
const mySearch: SearchFunction = function (src, sub) {
  return src.includes(sub);
};
console.log(mySearch("Hello, TypeScript!", "TypeScript"));

/**
 * 12) 타입 가드
 */

class Car {
  drive() {
    console.log("자동차가 주행 중입니다.");
  }
}
class Bicycle {
  pedal() {
    console.log("자전거가 페달을 밟고 있습니다.");
  }
}
function moveVehicle(vehicle: Car | Bicycle): void {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.pedal();
  }
}


/**
 * 13) 사용자 정의 타입 가드
 */

interface Fish {
  swim(): void;
}
interface Bird {
  fly(): void;
}
function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}
function move(animal: Fish | Bird): void {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}


/**
 * 14) 인터페이스 상속
 */

interface Shape {
  color: string;
}
interface Circle extends Shape {
  radius: number;
}
interface ColoredCircleWithBorder extends Circle {
  borderColor: string;
}
const myCircle: ColoredCircleWithBorder = {
  color: "blue",
  radius: 10,
  borderColor: "black",
};


/**
 * 15) 타입 별칭
 * 타입 별칭은 기존 타입에 새로운 이름을 부여하는 데 사용
 * type 키워드를 사용하여 정의하며, 인터페이스와 달리 객체 타입뿐만 아니라
 * 원시 타입, 유니온, 튜플 등 다양한 타입을 정의할 수 있습니다.
 * 
 * 모든 타입에 적용 가능
 * 복잡한 타입 단순화
 * 타입 조합
 * 선언적 병합 불가
 */

type Age = number;
type UserName = string;


const userAge: Age = 30;
const greeting: UserName = "안녕하세요";
console.log(`사용자 나이: ${userAge}, 인사말: ${greeting}`);


/**
 * 15-2) 유니온 타입에 별칭 부여
 */

type ResultStatus = "success" | "failure";
type IdOrName = number | string;

function showStatus(status: ResultStatus): void {
  console.log(`처리 상태: ${status}`);
}

showStatus("success");
// showStatus("pending"); // ❌ 오류: "pending"은 ResultStatus 타입에 없음


/**
 * 15-3) 객체 타입에 별칭 부여 (인터페이스와 유사)
 */

type Coords = {
  x: number;
  y: number;
};

const point: Coords = {
  x: 10,
  y: 20,
};
console.log(`좌표: (${point.x}, ${point.y})`);


/**
 * 15-4) 타입 조합
 */

// 5. 타입 조합
type PersonInfo = {
  name: string;
  age: number;
};

type EmployeeInfo = PersonInfo & {
  employeeId: string;
  department: string;
};

const employee: EmployeeInfo = {
  name: "김영희",
  age: 28,
  employeeId: "EMP-001",
  department: "개발"
};

console.log(employee);


/**
 * interface vs type 차이점
 * 1. interface: 객체 타입 전용, 선언적 병합 가능
 * 2. type: 모든 타입에 사용 가능 (원시값, 유니온 등)
 * 3. interface는 확장성이 좋고, type은 조합이 자유로움
 */

type Subjects = "Math" | "Science" | "History";

type Grade = {
  [key in Subjects]: number;
}