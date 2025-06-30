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

console.log(
  objectArr.indexOf({ name : "김도연"})
);

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