class Coffee3 {
  coffeeType: string;
  shots: number;
  constructor(public type: string, public shots: number) {
    this.coffeeType = type;
    this.shots = shots;

  }


  describe() {
    console.log(`커피 이름: ${this.coffeeType}, 샷: ${this.shots}`);
  }
}

const temp3 = new Coffee3('아메리카노', 10);

const temp2 = new Coffee3('카페라떼', 12);

/**
 * 생성자 (Constructor)
 * 
 * - 역할: 클래스의 인스턴스를 생성하고 초기화
 * - 특징:
 *   1. 클래스당 단 하나만 정의 가능
 *   2. constructor 키워드로 선언
 *   3. 인스턴스 생성 시 자동 호출
 * 
 * - 주요 용도:
 *   1. 객체 속성 초기화
 *   2. 인스턴스 생성 시 필요한 초기 설정
 *   3. 의존성 주입
 */

/**
 * 접근 제한자
 * 
 * TypeScript에서는 public, private, protected 키워드를 사용하여 접근 제한자를 정의
 * 1) public: 클래스 외부에서 접근 가능 (기본값)
 * 2) private: 클래스 내부에서만 접근 가능
 * 3) protected: 클래스 내부와 상속받은 클래스에서 접근 가능
 * 
 * 접근 제한자의 주요 이점:
 * - 캡슐화 구현
 * - 코드의 안정성과 유지보수성 향상
 * - 내부 구현 은닉
 * - 보안성 강화
 */

class BankAccount {
  private balance: number;  // 계좌 잔액을 저장하는 private 멤버 변수

  constructor(startingBalance: number) {
    this.balance = startingBalance;  // 생성자에서 초기 잔액 설정
  }

  public getBalance(): number {
    return this.balance;  // 현재 잔액 반환
  }

  public deposit(amount: number) {
    if (amount > 0) this.balance += amount;  // 입금 금액이 0보다 크면 잔액에 더함
  }
}

// balance는 외부에서 직접 접근하지 못하도록 private으로 선언됨.
// 생성자(constructor)에서 초기 잔액을 받아 balance에 할당.
// getBalance() 메서드로 현재 잔액 조회 가능.
// deposit() 메서드로 입금할 수 있는데, 0보다 큰 금액만 더함.


const test = new BankAccount(1000);  // BankAccount 클래스의 인스턴스 생성
test.deposit(500);  // 500원 입금
console.log(test.getBalance());  // 현재 잔액 출력: 1500


/**
 * 상속
 * - 코드 재사용을 위한 핵심 기능
 * - 상속은 객체 지향 프로그래밍에서 클래스 간의 관계를 정의하는 중요한 개념
 * - 상속을 통해 기존 클래스의 속성과 메서드를 물려받아 새로운 클래스를 정의
 * - 상속에 있어서 똑같은 코드를 계속 반복적으로 작성할 필요 없음
 * - 아래 예제를 보면 Vehicle 클래스를 상속받아 ElectricCar와 Car 클래스를 정의
 * 
 */

class Vehicle {
  move() {
    console.log('이동 중...');
  }
}

class ElectricCar extends Vehicle {
  move() {
    console.log('조용히 이동 중...');
  }
}

class Car extends Vehicle {
  move() {
    console.log('시끄럽게 이동 중...');
  }
}

const tesla = new ElectricCar();
tesla.move();


/**
 * 슈퍼 타입 / 서브 타입
 * 1) 서브타입
 *    두 개의 타입 A와 B가 있고 B가 A의 서브타입이면 A가 필요한 곳에는 어디든 B를 안전하게 사용할 수 있다.
 *
 * 2) 슈퍼타입
 *    두 개의 타입 A와 B가 있고 B가 A의 슈퍼타입이면 B가 필요한 곳에는 어디든 A를 안전하게 사용할 수 있다.
 * 
 * 
 * 서브 타입 -> 슈퍼 타입으로 변환 ; upcasting(implicit casting)
 * 슈퍼 타입 -> 서브 타입으로 변환 : downcasting(explicit casting)
 */


class Dog extends Animal {
  name: string;
  constructor(inputName: string) {
    super();
    this.name = inputName;
  }
}

// downcast
let animal: Animal;
animal = new Dog('또순이');

let realDog: Dog = animal;

// animal.eat();

// upcasting
// let dog: Dog = new Dog('또순이');
// let animal: Animal = dog;

// animal.eat();



/**
 * 추상 클래스
 * 
 * 추상 클래스는 클래스와는 다르게 인스턴스화를 할 수 없는 클래스
 * 추상 클래스의 목적은 상속을 통해 자식 클래스에서 메서드를 제각각 구현하도록 강제를 하는 용도
 * 추상 클래스도 최소한의 기본 메서드는 정의를 할 수 있음
 * 핵심 기능의 구현은 전부 자식 클래스에게 위임
 */

abstract class Media {
  constructor(public title : string) {

  }
  abstract play() : void;
}

class Song extends Media {

}


/**
 * 💡 인터페이스
 *  인터페이스는 객체가 가져야 하는 속성과 메서드를 정의
 *  인터페이스를 구현한 객체는 인터페이스를 반드시 준수해야 함! 규약과 같아서 어길 수가 없음!
 *  => 코드의 안정성을 높이고 유지 보수성을 향상시킬 수 있다
 * 
 * 
 * 
 * 구현부
 * 추상 클래스 : 클래스의 기본 구현으 제공
 * 인터페이스 : 객체의 구조만을 정의하고 기본 구현을 제공하지 않음
 * 
 * 동작 방식
 * 추상 클래스 : 단일 상속만 지원
 * 인터페이스 : 다중 상속을 지원
 * 
 * 구현 방식
 * 추상 클래스 : 추상 클래스를 상속받은 자식 클래스는 반드시 추상 함수를 구현
 * 인터페이스 : 인터페이스를 구현하는 클래스는 인터페이스에 정의된 모든 메서드를 전부 구현
 * 
 */

abstract class Media {
  constructor(public title: string) {
  }

  abstract play(): void;
}

class Song extends Media {
  play() {
    console.log(`${this.title} 재생 중...`);
  }
}



/**
 * SOLID 원칙
 * 
 * S: Single Responsibility Principle (SRP) - 단일 책임 원칙
 *   - 클래스는 하나의 책임만 가져야 하며, 변경이 필요할 때
 *   - 해당 책임을 완전히 캡슐화해야 함
 * 
 * I: Interface Segregation Principle (ISP) - 인터페이스 분리 원칙
 *   - 클라이언트는 자신이 사용하지 않는 메서드에 의존하지 않아야 함
 *   - 인터페이스는 작고 구체적으로 분리되어야 함
 * 
 * L: Liskov Substitution Principle (LSP) - 리스코프 치환 원칙
 *   - 서브타입은 슈퍼타입으로 대체 가능해야 함
 *   - 서브 클래스는 슈퍼 클래스의 기능을 완전히 대체할 수 있어야 함
 * 
 * O: Open/Closed Principle (OCP) - 개방/폐쇄 원칙
 *   - 소프트웨어 엔티티는 확장에 열려 있어야 하고, 수정에는 닫혀 있어야 함
 *   - 클래스의 기본 코드를 변경하지 않고도 기능을 확장 할 수 있어야 한다
 *   - 부모 클래스의 기본 코드 변경을 하지 않고 기능을 확장 가능함
 * 
 * D: Dependency Inversion Principle (DIP) - 의존 역전 원칙
 *   - 고수준 모듈은 저수준 모듈에 의존해서는 안 되며, 둘 다 추상화에 의존해야 함
 * 
 * 이 원칙들은 객체 지향 프로그래밍에서 코드의 유지 보수성과 확장성을 높이는 데 중요한 역할을 한다.
 *
 */

class UserService {
  constructor(private db: Database) {
  }

  getUser(id: number): User {
    // 사용자 조회 로직
    return this.db.findUser(id);
  }

  saveUser(user: User): void {
    // 사용자 저장 로직
    this.db.saveUser(user);
  }

}
  class EmailService {
  sendWelcomeEmail(user: User): void {
    // 이메일 전송 로직
    console.log(`Welcome email sent to ${user.email}`);
  }
}


// ⚡️ 참고 
// sendWelcomeEmail() 메서드는 UserService의 역할과는 맞지 않으니, 별도의 EmailService 또는 NotificationService로 분리하는 게 일반적인 설계 방식이다.
// 이렇게 분리하면 단일 책임 원칙(SRP) 을 지킬 수 있어 유지보수가 용이하다.


interface Notification {
  send(message: string): void;
}

class EmailNotifier implements Notification {
  send(msg: string) {
    console.log(`이메일 발송: ${msg}`);
  }
}

class SMSNotifier implements Notification {
  send(msg: string) {
    console.log(`SMS 발송: ${msg}`);
  }
}

function notify(userMsg: string, service: Notification) {
  service.send(userMsg);
}
// 💡 참고
// Notification 인터페이스를 통해 공통 인터페이스(규약) 를 정의하고,
// EmailNotifier, SMSNotifier 클래스는 그 규약을 구현(implements) 하고 있다.
//notify() 함수에서 인터페이스 타입을 받아 유연하게 사용할 수 있어, 의존성 분리에 좋다.


class Bird {
  fly(): void {
    console.log('새가 날아갑니다.');
  }
}


class Penguin extends Bird {
  fly(): void {
    throw new Error('펭귄은 날 수 없습니다.'); // 명백한 오류 발생
  }
}

// 그럼 어떻게 해야하나 

abstract class Bird {
  abstract move(): void;
}

class FlyingBird extends Bird {
  move() {
    console.log("펄럭펄럭~");
  }
}

class NonFlyingBird extends Bird {
  move() {
    console.log("뚜벅뚜벅!");
  }
}

class Penguin extends NonFlyingBird {}


// 🪶 **참고**
// `Bird` 클래스는 추상 클래스이며, `move()` 메서드를 추상 메서드로 정의.
// `FlyingBird`와 `NonFlyingBird`가 각각 상속받아 `move()`를 구체적으로 구현.
// `Penguin`은 `NonFlyingBird`를 상속받아, `move()`는 재정의하지 않아도 자동으로 `뚜벅뚜벅!` 사용.

interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

class SmartPrinter implements Printer, Scanner {
  print() {
    console.log("프린트 중...");
  }

  scan() {
    console.log("스캔 중...");
  }
}

//

interface MyStorage {
  save(data: string): void;
}

class MyLocalStorage implements MyStorage {
  save(data: string): void {
    console.log(`로컬에 저장: ${data}`);
  }
}

class MyCloudStorage implements MyStorage {
  save(data: string): void {
    console.log(`클라우드에 저장: ${data}`);
  }
}

class Database {
  constructor(private storage: MyStorage) {}

  saveData(data: string): void {
    this.storage.save(data);
  }
}

const myLocalStorage = new MyLocalStorage();
const myCloudStorage = new MyCloudStorage();

const myLocalDatabase = new Database(myLocalStorage);
const myCloudDatabase = new Database(myCloudStorage);

myLocalDatabase.saveData("로컬 데이터");
myCloudDatabase.saveData("클라우드 데이터");

// 💡 설명
// MyStorage 인터페이스는 save() 메서드를 정의.
// MyLocalStorage와 MyCloudStorage가 각각 구현(implements).
// Database는 저장소(MyStorage)를 주입받아, 어떤 저장소든 유연하게 사용 가능 (의존성 주입 개념).



/**
 * Enum과 객체 리터럴
 * - 공통점
 *  enm과 객체 리터럴은 모두 상수를 정의하고 그룹화하는 데 사용될 수 있다
 * 
 * - 차이점
 * 1) enum
 * enum은 상수 값들의 집합을 정의하는 데 사용되는 특별한 데이터 타입
 * 주로 관련된 상수들을 명확하게 그룹화하고 관리할 때 유용
 * 가독성 및 명확성 : 상수 값에 의미 있는 이름을 부여하여 코드의 가독성을 높인다
 * 컴파일 시 자동 매핑 : enum은 컴파일 시 자동으로 숫자 또는 문자열 값으로 매핑되어, 코드의 안정성을 높인다
 * 
 * 2) 객체 리터럴
 * 객체 리터럴은 키-값 쌍으로 구성된 데이터 구조로, 관련된 데이터를 그룹화하는 데 사용된다.
 * 유연성과 확장성 : 객체 리터럴은 필요에 따라 쉽게 속성을 추가하거나 수정할 수 있어 유연하다.
 */

// enum
enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  VIEWER = "VIEWER",
}

enum OrderStatus {
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

function handleUserAction(role: UserRole, order: OrderStatus): void {
  if (role === UserRole.ADMIN) {
    console.log("관리자 권한으로 작업을 수행합니다.");
  } else if (role === UserRole.EDITOR) {
    console.log("편집자 권한으로 작업을 수행합니다.");
  } else {
    console.log("일반 사용자 권한으로 작업을 수행합니다.");
  }

  switch (order) {
    case OrderStatus.PENDING:
      console.log("주문이 대기 중입니다.");
      break;
    case OrderStatus.COMPLETED:
      console.log("주문이 완료되었습니다.");
      break;
    default:
      console.log("주문 상태를 확인해주세요.");
  }
}

const currentUserRole: UserRole = UserRole.EDITOR;
const currentOrderStatus: OrderStatus = OrderStatus.PENDING;

handleUserAction(currentUserRole, currentOrderStatus);


// 💡 참고
// role은 UserRole enum 타입으로 사용.
// order는 OrderStatus enum 타입으로 사용.
// if ~ else와 switch를 같이 사용하여 각 조건에 따라 처리.



// 객체 리터럴
const appConfig = {
  appName: "My Awesome App",
  version: "1.0.0",
  apiEndpoints: {
    users: "/api/users",
    products: "/api/products",
  },
  isActive: true,
  maxUsers: 100,
};

const userProfile = {
  id: "user-123",
  username: "TypeScript_Master",
  email: "ts.master@example.com",
  roles: ["admin", "developer"],
  settings: {
    theme: "dark",
    notifications: true,
  },
  greet: function () {
    console.log(`안녕하세요, ${this.username}님!`);
  },
};

console.log(`앱 이름: ${appConfig.appName}, 버전: ${appConfig.version}`);
userProfile.greet();
