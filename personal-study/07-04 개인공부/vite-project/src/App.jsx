// import './App.css';
// import Header from './componets/Header';
// import Main from './componets/Main';
// import Footer from './componets/Footer';
// import Button from './componets/Button';
import Welcome from './componets/Welcome';

// 컴포넌트 첫글자는 대문자로 시작해야 합니다.
// 내부적으로 컴포넌트라고 인정해주지 않음


// 부모 (모든 뿌리 역할을 한다고 해서 루트라고 불림)
function App() {
  const user = {
    name: '홍길동',
    isMember: false,
  };

  return (
    <>
      <Welcome name={user.name} isMember={user.isMember} />
    </>
  );
}

export default App;
