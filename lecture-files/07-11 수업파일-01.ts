
/**
 * 제너릭
 * 프로그래밍을 하면서 다양한 데이터를 다루게 되는데, 이 데이터들을 안정적으로 처리하기 위해 타입이 나옴
 * 어떤 함수나 클래스가 여러 타입을 유연하게 받아들일 수 있어야 할 때 필요함
 */
// 객체 리터럴

function print(value : any) : {
  console.log(value);
  return value;
}


// any를 사용하면 모든 파입을 받을 수 있지만, 타입스크립트의 가장 큰 장점만 정적 타입 검사가 없어 짐
// 제너릭은 타입을 매개변수처럼 사용하는 문법
// 아무 타입이나 들어오고 아무 타입으로 나가니 IDE나 컴파일러가 도와줄 수 없기 때문에 등장
// 마치 함수의 인자처럼, 나중에 타입을 넘길 수 있는 유연한 방식

function identity<T>(value: T): T {
  console.log(value);
  return value;
}

// T는 타입 변수 (Type Variable)라고 불리며, 함수가 호출될 때 실제 타입으로 대체됨
// `identity<number>(42)`와 같이 호출하면 T는 number로 대체됨
// 이처럼 제너릭은 유연성(재사용성)과 타입 안정성을 모두 챙길 수 있는 방법

function identity<T> (value: T): T {
  return value;
}


/**
 * 유틸리티 타입
 * 타입스크립트의 유틸리티 타입은 기존 타입을 기반으로 새로운 타입을 쉽게 생성하고 변환할 수 있또록 돕는 강력한 기능
 * 이를 통해 코드의 재사용성을 높이고 타입 추론을 더욱 효과적으로 활용할 수 있습니다.
 * 
 * 1) Partial<T>
 * 타입 T의 모든 속성을 선택적으로 만든다
 * 즉 해당 타입의 객체를 생성할 때 일부 또는 모든 속성을 생략할 수 있게 해줌
 * 보통은 객체의 일부 속성만 업데이트하거나, 특정 필드가 아닌 경우 사용합니다.
 * 
 * 2) Required<T>
 * 3) Readonly<T>
 * 4) Record<K, T>
 * 5) Pick<T, K>

 */
interface Product {
  id: string;
  name: string;
  price: number;
  description?: string; // 선택적 속성
}

// 1) Partial<T>
function updateProduct(product: Product, fieldsToUpdate: Partial<Product>): Product {
  return { ...product, ...fieldsToUpdate };
}


const originalProduct: Product = {
  id: "123",
  name: "Laptop",
  price: 1000,
  description: "A high performance laptop"
};


const updateProduct1 = updateProduct(originalProduct, { name : "Gaming Laptop" });
console.log(updateProduct1);

const updateProduct2 = updateProduct(originalProduct, 
  { price : 1500, 
    description : "High performance gaming laptop"
  });


 // 2) Required<T>
 // T와 반대로 타입 T의 모든 속성을 필수적으로 만듦

interface UserProfile {
  username: string;
  email: string;
  phone? : string; // 선택적 속성
  address: string; // 선택적 속성
}

type CompleteUserProfile = Required<UserProfile>;

const newUser: CompleteUserProfile = {
  username: "john_doe",
  email: "john@example.com",
  phone: "123-456-7890",
  address: "123 Main St"
};

// const incompleteUser: UserProfile = {
//   username: "jane_doe",
//   email: "jane@example.com",
//   phone: "987-654-3210"
// };


// 3) Readonly<T>
// 타입 T의 모든 속성을 읽기 전용(immutable)으로 만듦
// 한번 할당된 속성 값은 변경할 수 없게 됨
interface Point {
  x: number;
  y: number;
}

const mutalbePoint: Point = { x: 10, y: 20 };
mutalbePoint.x = 30; // 가능
console.log(mutalbePoint);


type immutablePoint = Readonly<Point>;

const immutablePoint: immutablePoint = { x: 10, y: 20 };
// immutablePoint.x = 30; // 불가능, 오류 발생
console.log(immutablePoint);



// 4) Pick<T, K>
// Pick<T, K>는 타입 T에서 K에 해당하는 속성들만 선택하여 새로운 타입
// 여기서는 K는 T의 속성 이름들의 유니온 타입

interface Customer {
  id: string;
  firstName :  string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}
type CustomerName =Pick<Customer,"firstName" | "lastName">;
const customerInfo: CustomerName = {
  firstName:"Alice",
  lastName:"Smith",
}
console.log(customerInfo);//{firstName : 'Alice', lastName:'Smith'}



/**
 * 5) Omit<T, K>
 * Omit<T, K>는 Pick<T, K>와 반대로, 타입 T에서 K에 해당하는 속성들만 제외하여 새로운 타입을 만듦
 * 기존 타입에서 불필요한 속성을 제거하여 새로운 타입을 정의할 때 사용
 */

interface Employee {
  id: string;
  name: string;
  department: string;
  salary: number;
  hireDate: Date;
}

type PublicEmployeeInfo = Omit<Employee, "salary" | "hireDate">;

const publicInfo: PublicEmployeeInfo = {
  id: "EMP001",
  name: "Charlie Brown",
  department: "Marketing",
};

console.log(publicInfo);
