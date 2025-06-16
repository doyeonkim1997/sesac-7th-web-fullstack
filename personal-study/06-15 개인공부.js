/*
let random = Math.random();
if (random < 0.5) {
  console.log("The number is less than 0.5");
} else {
  console.log("숫자가 0.5보다 같거나 큽니다.");
}
console.log("랜덤 숫자:", random);

const age = -89;

if (age < 5) {
  console.log("You are a toddler.");
} else if (age < 13) {
  console.log("You are a child.");
} else if (age < 20) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}

function getColor(phrase) {
  //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
  if (phrase === 'stop') {
    console.log('red');
  } else if (phrase === 'slow') {
    console.log('yellow');
  } else if (phrase === 'go') {
    console.log('green');
  } else {
    console.log('purple');
  }
}
*/

const password = prompt('비밀번호를 입력하세요.');

if (password.length >= 8) {
  console.log('비밀번호는 강력합니다.');
} else {
  console.log('비밀번호는 약합니다. 최소 8자 이상이어야 합니다.');
}