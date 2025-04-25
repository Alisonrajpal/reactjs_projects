import { useState } from "react";

function TodoInput(props) {
  const { handelAddTodo } = props;
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          /*Guard clause */
          if (!inputValue) {
            return;
          }
          handelAddTodo(inputValue);
          /* clear input value after added*/
          setInputValue("");
        }}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
export default TodoInput;
