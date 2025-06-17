
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('비밀번호를 입력하세요: ', (password) => {
//   // 비밀번호 길이 검사
//   if (password.length >= 8) {
//     console.log('비밀번호는 강력합니다.');
//   } else {
//     console.log('비밀번호는 약합니다. 최소 8자 이상이어야 합니다.');
//   }

//   // 비밀번호 공백 검사
//   if (password.indexOf(' ') === -1) {
//     console.log('valid password');
//   } else {
//     console.log('비밀번호는 공백이 포함되어 있습니다. 공백을 제거하세요.');
//   }

//   rl.close(); // 입력 끝났으면 인터페이스 닫아줘야 함
// });

// // prompt는 웹 전용 함수라서 터미널에서 미작동함
// // readline은 Node.js에서 사용되는 함수로, 사용자 입력을 받을 수 있다.

// // num 값을 변경하여 "YOU GOT ME!"가 출력되도록 하세요
// const num = 102;  // 이 줄만 수정하세요 :)

// // 아래 코드는 수정하지 마세요
// if (num <= 100) {
//   if (num >= 50) {
//     console.log("HEY!");
//   }
// } else {
//   if (num < 103) {
//     if (num % 4 === 0) {
//       console.log("YOU GOT ME!");
//     }
//   }
// }


// const userInput = prompt("뭔가 누르세요");
// if (userInput) {
//   console.log("트루시");
// } else {
//   console.log("폴시");


// if (" ") {
//   console.log("트루시");
// } else {
//   console.log("폴시");
// }

// true && true // true
// true && false // false
// false && true // false
// false && false // false

// 진실(true)값은 무조건 두 값이 동일한 true truthy값이어야 true가 된다.

// const password = prompt("비밀번호를 입력하세요");
// if (password.length >= 8 && password.indexOf(' ') === -1) {
//   console.log("비밀번호는 강력합니다.");
//   // 왼쪽이 거짓이면(>= 8 &&) 오른쪽은 실행되지 않음
//   // 둘 다 참이어야 됨 

// } else {
//   console.log("비밀번호는 약합니다.");
// }

// true || true // true
// true || false // true
// false || true // true
// false || false // false

// 진실(true)값은 왼쪽이 참이면 오른쪽은 실행되지 않음
// 왼쪽이 거짓이면 오른쪽이 실행됨


// 0~5 무료
// 5~10 1000원
// 10~65 2000원
// 65세 이상 무료

const age = 4;
if (age < 5 || age >= 65) {
  // 0~5세 또는 65세 이상
  // ||는 or 연산자
  // 둘 중 하나만 참이어도 실행됨 
  console.log("무료입니다.");
} else if (age < 10) {
  console.log("1000원입니다.");
} else if (age < 65) {
  console.log("2000원입니다.");
}