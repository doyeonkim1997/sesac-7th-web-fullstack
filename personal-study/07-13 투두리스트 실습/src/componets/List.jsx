import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from 'react'

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterdData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().
        includes(search.toLocaleLowerCase())
    );
  };

  const filteredTodos = getFilterdData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input value={search} onChange={onChangeSearch} placeholder="할 일을 입력하세요" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />;
        })}
      </div>
    </div>
  );
};

export default List;