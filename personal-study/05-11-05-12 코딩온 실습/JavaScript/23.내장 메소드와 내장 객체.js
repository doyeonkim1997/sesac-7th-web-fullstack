let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(i + 1);
}

/* 합 구하기 */
// 1. for문
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
  sum1 = sum1 + arr[i];
}

// 2. for of문
let sum2 = 0;
for (let num of arr) {
  sum2 = sum2 + num;
}

// 3. forEach문
let sum3 = 0;
arr.forEach((el) => {
  sum3 = sum3 + el;
});
// 위의 forEach와 동일하게 동작합니다.
// arr.forEach((el) => (sum3 += el));

console.log(sum1, sum2, sum3); //5050

/

let fruits1 = [
  '사과',
  '딸기',
  '파인애플',
  '수박',
  '참외',
  '오렌지',
  '자두',
  '망고',
];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

/* 1. for 문 이용 */
let same = [];
let diff = [];
for (let i = 0; i < fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same.push(fruits1[i]);
  } else {
    diff.push(fruits1[i]);
  }
}
console.log(same);
console.log(diff);

/* 2. filter 와 includes 이용 */
let same2 = fruits1.filter((fr) => fruits2.includes(fr));
let diff2 = fruits1.filter((fr) => !fruits2.includes(fr));

console.log(same2);
console.log(diff2);

/

/* Date 객체의 getDay() 이용
getDay(): 요일별로 0 ~ 6(일 ~ 토) 으로 숫자 반환
*/
// 1. switch문 이용
switch (now.getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('평일');
    break;
  case 0:
  case 6:
    console.log('주말');
    break;
  default:
    console.log('알수없음');
    break;
}

// 2-1. if문: if 와 else if 로 모든 경우 일일이 확인
if (now.getDay() === 0) {
  console.log('주말');
} else if (now.getDay() === 1) {
  console.log('평일');
} else if (now.getDay() === 2) {
  console.log('평일');
} else if (now.getDay() === 3) {
  console.log('평일');
} else if (now.getDay() === 4) {
  console.log('평일');
} else if (now.getDay() === 5) {
  console.log('평일');
} else if (now.getDay() === 6) {
  console.log('주말');
}

// 2-2. if문: if 와 else 이용
if (now.getDay() === 5 || now.getDay() === 1 || now.getDay() === 2 || now.getDay() === 3 || now.getDay() === 4) {
  console.log('평일');
} else {
  console.log('주말');
}

// 3. 삼항연산자 이용
const todayStatus = now.getDay() === 0 || now.getDay() === 6 ? '주말' : '평일';
console.log(todayStatus);

/

console.log(Math.floor(Math.random() * 11));
