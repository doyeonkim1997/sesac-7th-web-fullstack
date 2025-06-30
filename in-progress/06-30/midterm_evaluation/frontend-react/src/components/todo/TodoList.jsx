

import React from 'react'

function TodoList({ todos, currentFilter }) {
  const getFilteredTodos = (filter) => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.isCompleted);
      case 'incomplete':
        return todos.filter(todo => !todo.isCompleted);
      default:
        return todos;
    }
  }

  const filteredTodos = getFilteredTodos(currentFilter);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4" id="todoList">
      {
        filteredTodos.map(todo => (
          <div key={todo.id} className="col">
            <TodoCard
              todo={todo}
            />
          </div>
        ))
      }
    </div>
  );
}

export default TodoList;
