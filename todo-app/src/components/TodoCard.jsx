import React from "react";

function TodoCard(props) {
  const { todo, handelDeleteTodo, todoIndex, handelEditTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => {
            handelEditTodo(todoIndex);
          }}
          disabled={todo.complete}>
          <h5>Done</h5>
        </button>
        <button
          onClick={() => {
            handelDeleteTodo(todoIndex);
          }}>
          <h5>Delete</h5>
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
