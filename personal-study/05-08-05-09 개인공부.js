/* 
let a = -2;

if (a < 0) {
  console.log("a는 음수입니다.")''
}
console.log("안녕하세요!");


let a = -12;

if (a < 0) {
  console.log("a는 음수입니다.");
  console.log("안녕하세요!");
}
if (a > 0) {
  console.log("a는 양수입니다.");
  console.log("안녕하세요!");  
}


let num = 7;

if (num % 2 === 0) {
  console.log(`${num}는 짝수입니다.`);
} else {
  console.log(`${num}는 홀수입니다.`);
}


let jumsu = 85;

if (jumsu >= 90) {
  console.log("A학점 입니다.");
} else if (jumsu >= 80) {
  console.log("B학점 입니다.");
} else if (jumsu >= 70) {
  console.log("C학점 입니다.");
} else {
  console.log("F학점 입니다.");
}

let grade = 'B';

switch (grade) {
  case 'A':
    console.log("훌륭합니다");
    break;
  case 'B':
    console.log("좋습니다");
    break;
  case 'C':
    console.log("보통입니다");
    break;
  default:
    console.log("노력합시다");
}

let score = 'B';

switch (score) {
  case 'A':
    console.log("Excellent!");
  case 'B':
    console.log("Good job!");
    break;
  case 'C':
    console.log("You passed.");
  default:
    console.log("Keep trying!");
}

let jumsu = 85;
let grade;

switch (true) {
  case jumsu >= 90:
    grade = "A";
    break;
  case jumsu >= 80:
    grade = "B";
    break;
  case jumsu >= 70:
    grade = "C";
    break;
  default:
    grade = "F";
    break;
}
console.log(grade);

let age = 18;
let access = age >= 18 ? "입장 가능" : "입장 불가";
console.log(access);


if (userisLoggedIn) {
  if (userrole === "admin") {
    console.log("관리자 페이지로 이동");
  }
}

          
for (let a = 1; a <= 3; a++) {
  console.log(`a = ${a}`);
}



for (let a = 1; a <= 10; a = a +2) {
  console.log(`a = ${a}`);
}


for (let a = 1; a <= 100; a++) {
  if (a % 2 === 0) {
    console.log(`a = ${a}`);
  }
}


let a = 1;

while (a <= 3) {
  console.log(`a = ${a}`);
  a++;
}


let a = 1;

while (a <= 10) {
  if (a % 2 === 0) {
    console.log(`a = ${a}`);
  }
  a++;
}

let a = 1;

do {
  console.log(`a = ${a}`);
  a++;
} while (a <= 3);


let a = 5;

do {
  console.log(`최초 실행: a = ${a}`);
} while (a < 0);


for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
*/

for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i= ${i}, j=${j}`);
  }
}

i = 1 j = 1
i = 1 j = 2
i = 1 j = 3
i = 2 j = 1
i = 2 j = 2
i = 2 j = 3
