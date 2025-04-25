import React from "react";
import TodoCard from "./TodoCard";
export default function TodoList(props) {
  const { todos, selectedTab } = props;

  const filterTodoList =
    selectedTab === "All"
      ? todos
      : selectedTab === "completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            {...props}
            todoIndex={todoIndex}
            todo={todo}
          />
        );
      })}
    </>
  );
}
