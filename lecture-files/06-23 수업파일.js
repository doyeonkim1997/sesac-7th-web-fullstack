// 필요한 파일들을 가지고 오는 부분
// App.js에 3개의 컴포넌트를 만들고 할아버지, 엄마, 자식 컴포넌트를 만들어보고 서로 연결시키기
// 할아버지 -> 엄마 -> 자식
// 자식 컴포넌트에만 div 태그

/**
 * props는 객체 형태의 데이터
 * JavaScript의 구조분해할당을 활용
*/


/**
 * Prop Drilling
 * [부모] -> [자식] -> [손자] -> [증손자] ...
 * Prop Drilling의 문제점
 * 중간 컴포넌트들이 사용하지 않는 props를 계속 전달해야 함
 * 코드가 복잡해지고 유지보수가 어려워짐
 * 컴포넌트 간 의존성이 높아짐
 * 
 * 해결방안
 * Redux, Context API 또는 상태 관리 라이브러리 사용
 * 예를 들어, React의 Context API를 사용하면 전역 상태를 관리할 수 있어
 * 중간 컴포넌트들을 거치지 않고도 필요한 데이터에 접근할 수 있습니다.
 */

/**
 * 👉 state
 * state란 컴포넌트의 상태를 관리하는 객체이다.
 * 컴포넌트의 상태는 컴포넌트가 렌더링될 때마다 변경될 수 있으며,
 * state가 변경되면 컴포넌트가 다시 렌더링된다.
 */

/**
 * 👉 불변성
 * 불변성이란 메모리에 있는 값을 직접 변경하지 않는 것을 말한다.
 * 새로운 값을 만들어서 기존 값을 대체하는 방식
 * 
 * 불변성이 있는 데이터
 * 숫자 / 문자열 / 불리언 / null / undefined
 * 
 * 불변성이 없는 데이터
 * 객체 / 배열 / 함수
 *
 * state는 변화를 메모리의 주소 판단
 * 주소가 같다면, 새로 렌더링 안함
 * 주소가 다르면, 새로 렌더링 함
 *
 */

/**
 * 👉 컴포넌트란
 * React에서 핵심 빌딩 블록으로, UI 요소를 표현하는 최소한의 단위
 * 화면에 특정 부분이 어떻게 생겼는지 정하는 선언체라고 할 수 있음
 * JSX로 UI 구조를 선언하면, React가 실제 화면에 맞게 렌더링함
 * 
 * 👉컴포넌트 사용 이유
 * 1. 재사용성
 *   - 컴포넌트를 재사용하여 코드 중복을 줄이고 유지보수를 용이하게 함
 * 2. 모듈화
 *  - UI를 작은 단위로 나누어 관리할 수 있어 코드의 가독성과 유지보수성을 높임
 * 3. 상태 관리
 *  - 컴포넌트의 상태를 관리하여 UI를 동적으로 업데이트할 수 있음
 *  - 상태가 변경되면 해당 컴포넌트가 다시 렌더링됨
 * 4. 독립적
 *  - 각 컴포넌트는 독립적으로 동작하며, 다른 컴포넌트와의 의존성을 최소화함
 */

/**
 * 명령형 vs 선언형 프로그래밍
 * 
 *👉 명령형 프로그래밍
 * 어떻게 동작하는지 명시적으로 기술하는 방식
 * DOM 조작, 이벤트 핸들링 등을 직접 구현
 * 
 * 👉 선언형 프로그래밍
 * 무엇을 원하는지 기술하는 방식
 * React에서는 UI를 어떻게 렌더링할지 선언적으로 기술
 * 1. 요소를 찾기
 * const element = document.getElementById("root");
 * 2. 요소 생성
 * const newElement = document.createElement("h1");
 * 3. 텍스트 생성
 * heading.textContent = "안녕하세요";
 * 4. 스타일 설정
 * heading.style.color = "blue"
 * heading.style.fontSize = "24px";
 * 5. DOM에 추가
 * element.appendChild(newElement);
 * 
 * 👉 선언형 프로그래밍
 * const App = () => {
 *   return (
 *     <div>
 *       <h1 style={{ color: "blue", fontSize: "24px" }}>안녕하세요</h1>
 *     </div>
 *   );
 * };
 * ReactDOM.render(<App />, document.getElementById("root"));
 * - 무엇을 만드는지에 대해 집중
 * - React가 DOM 조작을 처리
 * - 복잡한 DOM 조작을 빠르게 할 수 있음
 * - JSX로 데이터랑 화면 구조를 한 파일에서 관리하여 유지보수 향상
 */

/**
 * 👉 Rendering
 * 렌더링
 * 렌더링은 컴포넌트가 현재 props와 state를 기반으로
 * 화면에 표시되는 내용을 결정하는 과정이다.
 * 
 * 1. 앱이 처음 실행될 때
 * 2. state가 변경
 * 3. props가 변경
 * 4. 부모 컴포넌트가 리렌더링될 때
 * 
 * 👉 React 렌더링 vs 브라우저 렌더링
 * 
 * - React 렌더링
 * 1. 컴포넌트 함수 호출
 *  props와 state를 기반으로 JSX 생성
 * 2. Virtual DOM 비교
 *  이전 결과와 새 결과 차이점 찾기
 * 3. 실제 DOM 업데이트
 *  변경된 부분만 실제 DOM에 반영
 * 
 * - 브라우저 렌더링
 * 1. 스타일 계산
 *  CSS 스타일 적용
 * 2. 레이아웃 계산
 *  요소의 위치와 크기 계산
 * 3. 페인팅
 *  실제 화면에 요소 그리기
 * 
 * 
 * 가상 돔이 동작하는 방식
 * [STEP 1: 초기화]
 * 1. 화면이 갱신되기 전 구조가 담겨있는 가상 DOM 객체
 * 2. 화면 갱신 후 보여야할 가상 DOM 객체
 *
 * [STEP 2: diffing]
 * 1. 어느 부분에서 변화가 일어났는지 빠르게 파악
 * 2. 변화가 일어난 부분만 실제 DOM에 반영
 *
 * [STEP 3: 재조정]
 * 1. 실제 DOM에 변화가 일어난 부분만 업데이트
 * 2. 가상 DOM과 실제 DOM의 차이를 비교하여 최소한의 변경
 * Batch 업데이트
 */

import { use, useState } from "react";


const App = () => {

  return (
    <div>
      <h1>렌더링 예제</h1>
      <Counter />
    </div>
  )
}
function Counter() {
  console.log("Counter 컴포넌트가 렌더링되었습니다.");

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>카운트 : {count} </h2>
      <button onClick={increment}>카운트 증가</button>
    </div>
  )

}
// 왜 웹 콘솔로그에 2개씩 찍힐까?


// 📌 불변성 


/*
const App = () => {
  const [items, setItems] = useState([1, 2, 3])

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  const removeItem = () => {
    setItems(items.filter((_, index) => index !== items.length - 1));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}

            <button onClick={removeItem} >제거</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem} >아이템 추가</button>
    </div>
  )
}
*/



/*
const App = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    console.log(inputValue);
  }
  console.log(value);
  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={value} />
    </div>
  )
}
*/


// 📌 이벤트 핸들링 실습 1

/*
const App = () => {

  const [state, setState] = useState("Hello World");

  const handlerCount = () => {
    setState(
      state === "Hello World" ? "Goodbye World!" : "Hello World")

  }
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={handlerCount}>클릭</button>
    </div>
  )
};
*/


// 📌 이벤트 핸들링 실습 2

/*
const App = () => {

  const [state, setState] = useState("검정색 글씨");


  const getColor = () => {
    if (state === "파란색 글씨") return "blue";
    if (state === "초록색 글씨") return "green";
    return "black";
  };
  return (
    <div>
      <h2 style={{ color: getColor() }}>{state}</h2>

      <button onClick={() => setState("파란색 글씨")}>파란색 변경</button>
      <button onClick={() => setState("초록색 글씨")}>초록색 변경</button>
    </div >
  )
};
*/


// 📌 이벤트 핸들링 실습 3

/*
const App = () => {
  const [isVisible, setIsVisible] = useState(true);


  return (
    <>
      <div>
        {isVisible && <h2>안녕하세요</h2>}
        {!isVisible && <p></p>}
      </div>
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "사라져라" : "보여라"}
        </button>

      </div>
    </>
  );
};
*/



/*
const App = () => {
  const [name, setName] = useState("김도연");
  const [count, setCount] = useState(0);

  const handlerCount = () => {
    setName(
      name === "김도연" ? "김콩이" : "김도연")

  }
  return (
    <div>
      <div>{name}</div>
      <div>{count}</div>

      <button onClick={handlerCount}>이름 변경</button>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <button onClick={() => setCount(count - 1)}>카운트 감소</button>
      <button onClick={() => setCount(0)}>카운트 초기화</button>
    </div>
  )
};
*/


// 📌 state 실습 1

/*
class Classstate extends React.Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <div>{this.state.count}</div>

        <button onClick={() => this.setState({ count: this.state.count + 2 })}>카운트 2 증가</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>카운트 1 감소</button>
      </div>
    )
  }

*/

// 📌 state 실습 2

/*
const App = () => {
  const [count, setCount] = useState(0);
  // setCount는 상태를 업데이트하는 함수
  // count는 현재 상태의 값
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 2);
  };

  return (
    <div>
      <div>{count}</div>

      <button onClick={increase}>카운트 1 증가</button>
      <button onClick={decrease}>카운트 2 감소</button>
    </div>
  )
};
*/


/*
const App = () => {
  const [name, setName] = useState("김도연");
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [todos, setTodos] = useState([
    '리액트 공부하기', '컴포넌트 만들기', '상태 관리하기', '리덕스 배우기'
  ]);
 
  return (
    <>
      <div>
        {name}
        {count}
        {isVisible && <p>보이는 텍스트</p>}
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={() => setName("김콩이")}>이름 변경</button>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      </div>
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>토글</button>
      </div>
      <div>
        <button onClick={() =>
          setTodos([...todos, '새로운 할 일'])}>할 일 추가</button>
      </div>
    </>
  );
};
*/








/*
const App = () => {
  return (
    <div>
      <Layout>
        <h1>홈페이지</h1>
        <p>
          메인 콘텐츠
        </p>
      </Layout>
    </div>
  )
}
function Layout({ children }) {
  return (
    <div>
      <header>공통 헤더</header>
      <main>{children}</main>
      <footer>공통 푸터</footer>
    </div>
  );
}
 
// 레이아웃 컴포넌트는 공통 헤더와 푸터를 포함하고,
// children 프로퍼티를 통해 메인 콘텐츠를 받아서 렌더링한다.
*/


/*
const App = () => {
  return <div>{<GrandFather />}</div>;
}
 
function Child({ mothName }) {
  return <div>{mothName}</div>;
}
 
function Mother() {
  const name = "새싹";
  return <Child mothName={name} />;
}
function GrandFather() {
  return <Mother />;
}
*/

/*
function App() {
  const name = "콩이";
  const animal = "강아지";
 
  return (
    <div>
      <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>{name}는 {animal}입니다.</h2>
    </div>
  );
}
*/

/*
function App() {
  const result = 3 + 5 === 9 ? "정답입니다!" : "오답입니다!!";
 
  return (
    <div>
      <h2>{result}</h2>
    </div>
  );
}
*/

/*
function App() {
  const a = 3;
  const b = 5;
 
  return (
    <div>
      {a > b && <h2>{a}는 {b}보다 큽니다.</h2>}
      {a < b && <h2>{a}는 {b}보다 작습니다.</h2>}
    </div>
  );
}
*/

/*
function App() {
  return (
    <div>
      <h2>Hello World</h2>
      아이디: <input type="text" /><br />
      비밀번호: <input type="password" /><br />
    </div>
  )
}
*/

/*
function FoodComponent(props) {
  console.log(props); // 콘솔 확인용
 
  return (
    <div>
      저는 <span style={{ color: "red" }}>{props.food}</span>을(를) 좋아합니다.
    </div>
  );
}
 
function App() {
  return (
    <div>
      <FoodComponent food="커피" />
    </div>
  );
}
*/

/*
const FunctionComponent = (props) => {
  return (
    <div>
      <h1>{props.sales}</h1>
      <h2>책 정보</h2>
      <p>제목: {props.title}</p>
      <p>저자: {props.author}</p>
      <p>판매가: {props.price}원</p>
      <p>구분: {props.type}</p>
    </div>
  );
};
 
function App() {
  return (
    <div>
      <FunctionComponent
        sales="이번주 베스트셀러"
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      />
    </div>
  );
}
*/


export default App;
