

// string 타입
let username: string = "alice";
let message: string = `Hello, ${username}!`;

// 자체적으로 입력을 안해도 이건 스트링이다 하고 // 타입스크립트가 인식한다.


// number 타입
let age: number = 30;
let pi: number = 3.14;


// boolean 타입
let isActive: boolean = true;
let isLoggedIn: boolean = false;


// null, undefined 타입
let emptyValue: null = null; // null 타입
let notAssigned: undefined = undefined; // undefined 타입


// any 타입
let data: any = 123;
data = "문자열 도 가능";
data = true; // any 타입은 어떤 타입도 허용

// unknown 타입
let unknownData: unknown = 123;
if (typeof unknownData === "string") {
    console.log(unknownData.toUpperCase()); // unknown 타입은 타입 체크 후 사용해야 함
}

// void 타입
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello, TypeScript!");


// never
// 절대 반환 하지 않는 함수에 사용
function throwError(message: string): never {
    throw new Error(message); // 이 함수는 절대 정상적으로 반환되지 않음
}   

// object 타입
let user: object = {
    name: "Alice",
    age: 30,
    isActive: true
};