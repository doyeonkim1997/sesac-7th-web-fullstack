// 비동기

// 자바스크립트는 "동기" 적으로 코드를 실행함 (순서대로 위에서부터 아래로)
// 자바스크립트에는 쓰레드가 1개밖에 없어 멀티스레드 방식으로 해결 불가능
// 그래서 자바스크립트는 비동기 방식으로 해결함

// "비동기"란 동기적이지 않다는 뜻, 순서대로 실행하지 않음

// // console.log("1");

// setTimeout(() => {
//   // console.log(2);
// }, 3000); // 3초 뒤 2 출력
// // 원하는 코드를 특정 시간이 지난 이후에 비동기적으로 실행시켜주는 기능을 갖고 있음


// // console.log("3.");


// 첫번쨰로 콘솔1 출력,
// 두 번째로 셋타임아웃 호출
// 비동기적 작동때문에 3초 타이머만 실행시켜놓고
// 바로 다음 라인으로 콘솔3을 출력해서 
// 1->3->2(타이머 작동된 후 실행)


// 어떻게 저 위의 실행을 동시에 작업할 수 있는 것인가? 는 아님
// 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs에서 실행됨
// 셋타임 아웃이라는 코드 발견 -> 웹 브라우저의 APIs에게 이거 실행해줘! 라고 위탁 요청(콜백 함수도 같이 넘겨줌 2)
// 3은 2의 비동기 작업을 기다리지않고 바로 실행함



// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000); // 3초 뒤에 실행
// }

// add(1, 2, (value) => {
//   //  console.log(value);
// });

// 함수 구조 분석
// add 함수는 세 개의 매개변수를 받습니다:
//   - a, b: 더할 두 숫자
//   - callback: 결과를 처리할 콜백 함수
// 함수 내부에서 setTimeout을 사용하여 의도적으로 지연을 만들어 비동기 상황을 시뮬레이션합니다.
// 실제로는 네트워크 요청이나 파일 읽기 같은 시간이 걸리는 작업을 대표합니다.

// 실행 흐름:
// 1. add(1, 2, (value) => { console.log(value); })가 호출됩니다
// 2. setTimeout이 실행되어 3초 후에 실행될 작업을 예약합니다
// 3. 즉시 함수가 종료되고 다음 코드로 진행됩니다 (논블로킹)
// 4. 3초 후 예약된 작업이 실행되어 a + b를 계산하고 callback(sum)을 호출합니다
// 5. 전달받은 화살표 함수 (value) => { console.log(value); }가 실행되어 결과값 3이 출력됩니다



// 음식을 주문하는 상황
// function orderFood(callback) {
//   setTimeout(() => {
//     const food = "커피";
//     callback(food);
//   }, 3000);
// }

// // 음식 식히는 시간
// function cooldownFood(food, callback) {
//   setTimeout(() => {
//     const cooldownedFood = `식은 ${food}`;
//     callback(cooldownedFood);
//   }, 2000);
// }


// 음식 냉동하기

// function freezFood(food, callback) {
//   setInterval(() => {
//   const freezFood = `냉동된 ${food}`;
//   callback(freezFood);
//   }, 1500);
// }


// orderFood((food) => {
//   // console.log(food);

//   cooldownFood(food, (cooldownedFood) => {
//     // console.log(cooldownedFood);

//     freezFood(cooldownedFood, (freezFood) => {
//       // console.log(freezFood);
//     });
//   });
// });

// 3초 동안 음식이 나옴
// 2초 동안 음식이 식음
// 1.5초 동안 음식이 냉동됨

// 인덴트 // 콜백지옥
// 위의 코드는 콜백지옥이라고 불리는 상황을 만들어냄
// 콜백지옥은 코드가 중첩되어 가독성이 떨어지고 유지보수가 어려워지는 상황을 말함



// Promise
// 비동기 작업을 감싸는 객체
// 대기, 성공, 실패 3개의 상태를 가짐

// 유트브 영상 로딩 중 - 대기
// 영상 로딩 완료 - 해결
// 시청 가능한 상태 - 성공
// 영랑 로딩 거부 - 실패

// function add10(num){
//   const promise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     if(typeof num === "number") {
//       resolve(num + 10);
//    } else {
//      reject("num은 숫자가 아닙니다");
//     }
//   }, 2000);
// });

//   return promise;


// const p = add10(0);
// p.then((result) => {
//   console.log("결과:", result); // 결과: 10

//   const newP = add10(result);
//     console.log(result); // 새로운 결과: 20
//   });
//   return newP;
// }).then((result) => {
//   console.log("새로운 결과:", result); // 새로운 결과: 20 
// });

// then 메서드
// -> 그 후에
// 프로미스의 비동기 작업이 성공적으로 완료되면 then 메서드가 호출됨


// Promise chaining
// 프로미스는 체이닝이 가능하여 여러 비동기 작업을 순차적으로 처리할 수 있음
// then 메서드를 사용하여 다음 작업을 연결할 수 있음  
// promise.then((value) => {
//   // console.log(value);
// }).catch((error) => {
//   // console.error(error);
// });


// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "홍길동",
        age: 30,
      });
    }, 2000);
  });
}
// console.log(getData()); // 

// async를 붙이면 간단하게 비동기 함수로 바꿔줌

// await 
// async 함수 내부에서만 사용할 수 있는 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const result = await getData();
  // console.log(result);
}

printData();



// 너무 어렵다 이해하기 어렵다 이거 어떻게 이해해야하는 걸까 ??????????





// Quiz 1. 우승자는? 광고 시청하고 오시겠습니다!
// 목표 : 우승자를 긴장감 있게 발표하기 위해 시간을 끌어줄 비동기 함수가 필요합니다
// 다음 요구사항을 만족하는 delay 함수를 구현하세요

// 1. 매개변수 ms로 밀리세컨즈 초를 제공받습니다.
// 2. 제공받은 ms만큼 대기했다가 resolve를 호출해 비동기 작업을 완료합니다.

// 힌트: Promise를 반환하는 함수는 비동기 함수가 됩니다.
// 힌트: setTimeout을 이용하면 특정 ms 만큼 기다렸다가 코드를 실행할 수 있습니다.

function delay(ms) {
  setTimeout (() => {
    console.log(`대기 시간 ${ms}ms가 끝났습니다.`);
  }, ms);
  Promise.resolve();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function main() {
  console.log("3초 후 결과를 공개하겠습니다!");
  await delay(3000);
  console.log("승자는 이정환!");
}

main();
// 출력 결과 :
// 3초 후 결과를 공개하겠습니다!
// 승자는 이정환!





// Quiz 2. 주문 접수 -> 처리 -> 취소 하기
// 목표: Promise 체이닝을 이용해 여러개의 비동기 함수를 연달아 실행시켜야 합니다.

//다음 요구사항을 만족하는 코드를 작성하세요
// 다음 3개의 비동기 함수를 순서대로 연달아 실행시키세요 (함수를 수정해서는 안됩니다)
// - receiveOrder: 주문을 받는 함수, 첫번째로 호출되어야 합니다.
// - processOrder: 1번에서 받은 주문을 처리하는 함수, 두번째로 호출되어야 합니다.
// - cancelOrder: 2번에서 처리가 완료된 주문을 취소하는 함수, 세번째로 호출되어야 합니다.

// - 예외 상황을 방지하는 에러 핸들링 코드가 필요합니다.
// - 비동기 작업에서 오류가 발생할 경우 console.error() 메서드를 호출해 에러 메세지를 출력합니다.

/* 1. 주문하는 기능 (수정 X) */
function receiveOrder() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("주문 접수가 완료되었습니다.");
      resolve("주문번호: 123");
    }, 2000)
  );
}

/* 2. 주문을 처리하는 기능 (수정 X) */
function processOrder(orderId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`[${orderId}] 주문이 처리 되었습니다.`);
      resolve(orderId);
    }, 2000)
  );
}

/* 3. 주문을 취소하는 기능 (수정 X) */
function cancelOrder(orderId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`[${orderId}] 주문이 취소되었습니다`);
      resolve();
    }, 1500)
  );
}

// 비동기 함수들을 순차적으로 실행하는 코드
receiveOrder()
  .then((orderId) => {
    return processOrder(orderId);
  })
  .then((orderId) => {
    return cancelOrder(orderId);
  })
  .catch((error) => {
    console.error("오류 발생:", error);
  });

// 출력 결과 :
// 주문 접수가 완료되었습니다.
// [주문번호: 123] 주문이 처리 되었습니다.
// [주문번호: 123] 주문이 취소되었습니다