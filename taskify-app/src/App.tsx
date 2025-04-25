import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const tabs = ["All", "Open", "Complete"];
  const todos = [
    { input: "Hello", complete: true },
    { input: "buy bread", complete: true },
  ];

  return (
    <>
      <Header todos={todos} />
      <Tabs tabs={tabs} />
      <TodoList todos={todos} />
      <TodoInput />
    </>
  );
}

export default App;
