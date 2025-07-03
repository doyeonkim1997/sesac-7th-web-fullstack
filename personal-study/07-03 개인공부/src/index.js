

// 🥰 node.js
// 자바스크립트의 실행 환경(구동기)이다.
// Node.js는 자바스크립트가 가진 태생적인 한계를 넘어설 수 있게 해주었고 그 결과 Nodejs를 이용해서 자바스크립트로 여러가지를 만들게 되었다.

// LTS (Long Term Support) 장기적으로 지원되는 버전이라는 뜻, 오랜 기간 동안 안정적으로 지원되기 때문에 대다수의 기업에서도 LTS 버전을 사용하고 있다.


// 기능을 한 파일에 다 구현하면 수정해야하는 곳이 어디인지 매번 찾아야하기 때문에 효율이 굉장히 매우 떨어지게됨
// 래서 보통은 여러가지 기능을 구현해야한다면 기능별로 나누어서 구현함

// 회원 관리 기능 -> user.js = 유저 모듈
// 장바구니 기능 - > cart.js = 장바구니 모듈
// 결제 기능 -> payment.js = 결제 모듈

// 🐸 자바스크립트의 모듈 시스템
// Common JS
// ES 모듈 


// 🍧 라이브러리란?
// 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것


// node.modules 폴더는 설치하 라이브러리가 실제로 저장되는 곳
// package-lock.json 버전이나 정보를 package.json보다 더 정확하고 엄밀하게 저장하는 파일



// ❤️모듈 폴더를 지웠을 때, Package.json에 있는 의존성 정보들을 바탕으로 다시 설치할 수 있다.
// ❤️ npm install 명령어를 실행하면 package.json에 있는 의존성 정보들을 바탕으로 node_modules 폴더를 다시 생성하고 필요한 라이브러리들을 설치한다.



import mul from "./math.js"; // 중괄호 없이
//import { add, sub } from "./math.js"; // ES 모듈 방식, 파일 확장자명까지 같이 적어줘야됨

// const moduleData = require("./math");
// const { add, sub } = require("./math");

// console.log(add(1, 2)); //
//console.log(sub(1, 2)); // -1
//console.log(mul(2, 3));


import randomColor from "randomcolor"; // 경로X 이름만 표기하면 불러와짐

const color = randomColor(); // randomColor() 함수를 호출해서 색상을 생성
console.log(color); // 생성된 색상을 콘솔에 출력






// 🌍 React는 Meta가 개발한 오픈소스 JavaScript 라이브러리
// 대구모 웹 서비스의 UI를 더 편하게 개발하기 이해 만들어진 기술
// 🥭 사용 대기업 -> 넷플릭스, 페이스북, 인스타그램, 노션

// 특징
// 1. 컴포넌트를 기반으로 UI를 표현한다
// 2. 화면 업데이트 구현이 쉽다
// 3. 화면 업데이트가 빠르게 처리된다

// 모든 내용을 완벽히 이해할 필요는 없다
// 대략적으로 훑어보듯이 들을 것


// 리액트 - 선언형 프로그래밍 : 목적만 깔끔하게 명시, 코드가 간결함
// 자바스크립트 - 명령형 프로그래밍 : 모든 과정을 하나 하나 다 설명, 코드가 길고 복잡함