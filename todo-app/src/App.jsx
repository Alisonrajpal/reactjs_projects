import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
function App() {
  //const todos = [
  // { input: "Hello Add your first todo!", complete: true },
  //{ input: "Get the gorieces", complete: false },
  // { input: "Learn how to web design", complete: false },
  //{ input: "say hi to gran gran", complete: true },
  //];

  const [todos, setTodos] = useState([
    { input: "Hello Add your first todo!", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("Open");
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handelSaveData(newTodoList);
  }
  function handelEditTodo(index) {
    //update
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handelSaveData(newTodoList);
  }

  function handelDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handelSaveData(newTodoList);
  }

  function handelSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }
  useEffect(() => {
    /*Gaurd clause */
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }

    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db, todos);
  }, []);
  return (
    <div>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handelEditTodo={handelEditTodo}
        handelDeleteTodo={handelDeleteTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput handelAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
