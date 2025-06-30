import Header from '../../components/ui/Header.jsx';

function TodoPage() {
  const handleUserInfoClick = () => {
    console.log('유저 정보 클릭됨!');
  };

  const handleLogout = () => {
    console.log('로그아웃 클릭됨!');
    // 실제 로그아웃 로직 추가
  };

  return (
    <>
      <Header onUserInfoClick={handleUserInfoClick} onLogout={handleLogout} />
      <div className="container">
        <div id="todoList" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {/* 여기에 할 일 카드 들어감 */}
        </div>
      </div>
    </>
  );
}

export default TodoPage;
