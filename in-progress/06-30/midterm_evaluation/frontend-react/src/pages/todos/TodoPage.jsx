import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header.jsx';
import { useNavigate } from 'react-router-dom';
import { todos as initialTodos } from '../../utils/data.js';

function TodoPage({ currentUser, onLogout }) {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(initialTodos);
  }, [currentUser]);

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  return (
    <div className="bg-light">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2>할 일 목록</h2>
            <p className="text-muted mb-0">
              {/* 총 {todos.length}개 중 {todos.filter(todo => todo.isCompleted).length}개 완료 */}
            </p>
          </div>
          <div className="d-flex gap-2">
            {/* 추가 버튼이나 필터 버튼 여기에 */}
          </div>
        </div>

        <TodoList todos={todos} currentFilter={currentFilter} />
      </div>
    </div>
  );
}

export default TodoPage;
