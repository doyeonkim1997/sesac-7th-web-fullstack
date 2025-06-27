// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
  name: "김도연 ",
  age: 45,
  hobby: "컴퓨터",
};

let {
  age: myAge,
  hobby,
  name,
  extra = "hello",
} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);




// 1. 배열 순회
//  let arr = [1, 2, 3];


// 1. 배열 인덱스 
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i])
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  // console.log(arr2[i])
}


// 1.2 for of 반복문
for (let item of arr) {
  // console.log(item);

}

// 2. 객체 순회 
let person = {
  name: "김도연",
  age: 20,
  job: "프론트엔드 개발자",
};

// 2-1 object.keys 내장 메서드
let keys = Object.keys(person); // ["name", "age", "job"]
// console.log(keys);

for (let key of keys) {
  const value = person[key]; // key에 해당하는 value를 가져옴
  // console.log(key, value); // key와 value를 출력
}

// 2-2 object.values 내장 메서드
let values = Object.values(person); // ["김도연", 20, "프론트엔드 개발자"]
// console.log(values);

for (let value of values) {
  // console.log(value);
}


// 2-3 for in 반복문
for (let key in person) {
  const value = person[key]; // key에 해당하는 value를 가져옴
  // console.log(key, value); // key와 value를 출력
}



//Quiz 1. 영화 리뷰 정보 출력하기 (feat. 하얼빈 & 위키드)
// 영화 리뷰 정보가 담긴 객체를 매개변수로 받아 출력하는 함수 printMovieReview를 완성하세요
//다음 요구사항을 만족하는 코드를 작성하세요

// 함수 printMovieReview는 구조 분해 할당을 통해 인수로 전달된 영화 정보 객체의 프로퍼티들을 각각 제공받습니다.
// 매개변수로 제공된 영화 정보들을 다음과 같이 출력합니다.
// - 영화 제목은 "제목 : {제목}" 형태로 출력합니다.
// - 영화 개봉 연도는 "개봉 : {개봉연도}" 형태로 출력합니다.
// - 첫 번째 리뷰어를 "첫 번째 리뷰어 : {이름}" 형태로 출력합니다.
// - 배열의 비 구조화 할당을 이용하세요

function printMovieReview() {
  // 코드를 입력하세요 ...
}

printMovieReview({
  title: "하얼빈",
  releaseYear: 2024,
  reviewers: ["박정민", "김효빈", "이정환"],
});

// 출력 결과 :
// 제목 : 하얼빈
// 개봉 : 2024
// 첫 번째 리뷰어 : 박정민

printMovieReview({
  title: "위키드",
  releaseYear: 2024,
  reviewers: [],
});

// 출력 결과 :
// 제목 : 위키드
// 개봉 : 2024
// 첫 번째 리뷰어 : 리뷰어 미정


function printMovieReview({ title, releaseYear, reviewers }) {
  console.log(`제목 : ${title}`);
  console.log(`개봉 : ${releaseYear}`);
  const [firstReviewer = "리뷰어 미정"] = reviewers; // 배열 비구조화 할당, 기본값 설정
  console.log(`첫 번째 리뷰어 : ${firstReviewer}`);
}


// Quiz 2. 평균 성적 출력하기
// 목표: 학생들의 평균 성적을 출력합니다.
// 다음 요구사항을 만족하는 함수 printAvgScore의 코드를 완성하세요
// - 매개변수 students로 객체 형태의 학생 데이터를 제공받습니다.
// - 반복문을 활용하여 모든 학생의 개별 성적 평균을 출력합니다.
// - "{이름}: {평균}" 형태로 출력합니다.

function printAvgScore(students) {
  for (let student in students) {
    const scores = students[student].scores;
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    console.log(`${student}: ${avg}`);
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});

// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58