// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7); // [1, 2, 3, 4, 5, 6, 7]

// console.log(arr1); // [1, 2, 3, 4, 5, 6, 7]
// console.log(newLength); // 7, 배열의 새로운 길이


// 2. pop
// 배열의 맨 뒤에서 요소를 제거하고 그 요소를 반환하는 메서드
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); // [1, 2], 마지막 요소(3)가 제거됨

// console.log(poppedItem); // 3
// console.log(arr2);


// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift(); // [2, 3], 첫 번째 요소(1)가 제거됨

// console.log(shiftedItem, arr3); 


// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); // [0, 1, 2, 3], 0이 맨 앞에 추가됨

// 
// console.log(newLength2, arr4); // 4, 배열의 새로운 길이 

// shift와 unshift 느리게 동작해서 위의 1,2번을 사용하는 게 좋다.


// 5. splice
// 배열의 특정 위치에 요소를 추가하거나 제거하는 메서드
let arr5 = [1, 2, 3, 4, 5];
let sliceed = arr5.slice(2, 5) // 5번이라 적어야 마이너스1을해서 4까지 잘라낸다라고 이해(꼭 플러스 1 필수)
let sliceed2 = arr5.slice(2);
let sliceed3 = arr5.slice(-1);


// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7)
// console.log(concatedArr);


// 5가지 요소 순회 및 탐색 메서드
// 1. for Each
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let Arr1 = [1, 2, 3];
Arr1.forEach( function (item, idx, Arr1) {
  // console.log(idx, item * 2);
});

let doubledArr = [];

Arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

//  console.log(doubledArr);


// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let Arr2 = [1, 2, 3];
let isInclude = Arr2.includes(30);

// console.log(isInclude);


// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let Arr3 = [2, 2, 3];
let index = Arr3.indexOf(22); // 없는 거찾아달라 그러면 -1 반환함

// console.log(index);

let objectArr = [
  {name : "김도연"},
  {name : "콩이두부"},
];

// console.log(objectArr.indexOf({ name : "김도연"}));

// indexOf로는 배열에서 특정 객체값이 존재하는지는 찾아낼 수가 없다.

// console.log(
//   objectArr.findIndex(
//   (item) => item.name === "김도연"
// )
// ); // 복잡한 객체 타입의 값을 찾을 땐 파인드인덱스~~


// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스를 반환하는 메서드
let Arr4 = [1, 2, 3];
const findexIndex = Arr4.findIndex(
  (item) => item % 2 !== 0
);

// console.log(findexIndex); // 결국 배열의 인덱스를 반환함


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let Arr5 = [
  { name : "김도연"},
  { name : "콩이두부"},
];

const finded = Arr5.find(
  (item) => item.name === "김도연"
);

// console.log(finded);


// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let Crr1 = [
  { name: "김도연", hobby: "꽁이랑 놀기"},
  { name: "김소연", hobby: "꽁이랑 놀기"},
  { name: "김서연", hobby: "꽁이랑 놀기2"},
];

const playPeople = Crr1.filter((item) => {
  if (item.hobby === "꽁이랑 놀기")
     return true;
});

console.log(playPeople);


// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let Crr2 = [1, 2, 3];
const mapResult1 = Crr2.map((item, idx, Crr2) => {
  return item * 2;
});

let names = Crr1.map((item) => item.name);
console.log(names);


//3. Sor
//










// Quiz 1. 배열 분할 및 결합하기
// 목표 : 배열을 반으로 나눈 다음, 순서를 바꿔 다시 결합해야 합니다.
// 다음 요구사항에 따라 함수 splitAndCombine을 완성하세요
// 함수 splitAndCombine은 매개변수로 제공된 배열 arr을 반으로 나눈 다음, 분할된 배열을 순서를 바꿔 결합합니다.

// 요구사항:
// 1. 반으로 나누기
// - arr1: 0~3번 인덱스까지 분할, 결과는 [0,1,2,3]이 되어야 함
// - arr2: 4~7번 인덱스까지 분할, 결과는 [4,5,6,7]이 되어야 함

// 2. 순서를 바꿔 결합하기
// - arr2뒤에 arr1을 결합, 결과는 [4,5,6,7,0,1,2,3]이 되어야 함

// 3. 반환하기

// - 결합이 완료된 배열을 반환합니다.


function splitAndCombine(arr) {
  const first = arr.slice(0, 4); 
  const second = arr.slice(4, 8); 
  return second.concat(first);
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
// console.log(result);


// 출력 결과 :
// [4,5,6,7,0,1,2,3]







// Quiz 2. 클릭 이벤트 로그 처리하기
// 목표: 배열 형태의 이벤트 로그(기록)중 "클릭" 이벤트만 특별한 형태로 출력해야 합니다.

// 다음 요구사항을 만족하는 printClickEventLogs 함수를 완성하세요
// 1. 매개변수 logs로 이벤트 로그 배열을 전달받습니다.
// 2. 이벤트 로그들 중 type이 "click"에 해당하는 로그만 특별한 형태로 출력합니다
// - 형태: ${이벤트아이디}: ${이벤트발생시각}
// 3. 이벤트 발생 시각은 toLocaleString 메서드를 사용해 알아보기 쉽게 출력하세요

function printClickEventLogs(logs) {
  logs.forEach((log) => {
    if (log.type === "click") {
      const date = new Date(log.date);
      console.log(`click: ${date.toLocaleString()}`);
    }
  });
}


printClickEventLogs([
  {
    type: "click",
    date: "2023-01-01T12:00:00Z",
  },
  {
    type: "hover",
    date: "2023-01-01T12:10:00Z",
  },
  {
    type: "scroll",
    date: "2023-01-01T12:15:00Z",
  },
  {
    type: "click",
    date: "2023-01-01T12:20:00Z",
  },
]);

// 출력 결과
// click :: 2023. 1. 1. 오후 9:00:00
// click :: 2023. 1. 1. 오후 9:20:00




function getDiscountedMenus(menus) {
  return menus.map((menu) => {
    return {
      ...menu,
      discountedPrice: menu.price - 500,
    };
  });
}
const discountedMenus = getDiscountedMenus([
  { itemId: 1, name: "아메리카노", price: 3000 },
  { itemId: 2, name: "라떼", price: 3500 },
  { itemId: 3, name: "초콜릿 케이크", price: 5000 },
  { itemId: 4, name: "크로와상", price: 2800 },
]);

//  console.log(discountedMenus);
// 출력 결과 :
// { itemId: 1, name: '아메리카노', price: 3000, discountedPrice: 2500 },
// { itemId: 2, name: '라떼', price: 3500, discountedPrice: 3000 },
// { itemId: 3, name: '초콜릿 케이크', price: 5000, discountedPrice: 4500 },
// { itemId: 4, name: '크로와상', price: 2800, discountedPrice: 2300 }






function getSortedBooks(books) {
  return books.sort((a, b) => {
    return b.published.getTime() - a.published.getTime();
  });
}

const sortedBooks = getSortedBooks([
  {
    title: "한입 리액트",
    published: new Date("2023. 04. 06"),
  },
  {
    title: "웹 프론트엔드 첫 걸음",
    published: new Date("2024. 04. 30"),
  },
  {
    title: "이펙티브 타입스크립트",
    published: new Date("2021. 06. 27"),
  },
  {
    title: "클린코드",
    published: new Date("2013. 12. 24"),
  },
]);

console.log(sortedBooks);
// 출력 결과 :
// { title: '웹 프론트엔드 첫 걸음', published: 2024-04-29T15:00:00.000Z},
// { title: '한입 리액트', published: 2023-04-05T15:00:00.000Z },
// { title: '이펙티브 타입스크립트', published: 2021-06-26T15:00:00.000Z},
// { title: '클린코드', published: 2013-12-23T15:00:00.000Z }