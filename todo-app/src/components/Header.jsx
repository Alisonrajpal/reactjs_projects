import React from "react";

function Header(props) {
  const { todos } = props;
  /*Length of todos*/
  const todosLength = todos.length;

/* Pural or singular Task*/
  const isTasksPlural = todos.length != 1;
  
/* conditional to see if task or task */
  const tasksOrTask = isTasksPlural ? "tasks" : "task";
  return (
    <header>
      <h1 className="text-gradient">
        You Have {todosLength} open {tasksOrTask}.
      </h1>
    </header>
  );
}
export default Header;
