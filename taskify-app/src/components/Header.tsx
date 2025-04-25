function Header(props) {
  const { todos } = props;
  const todolength = todos.length;
  const isTasksPluaral = todos.length !=1;
  const tasksOrTask = isTasksPluaral?"tasks":"task";
  return (
    <header>
      <h1 className="text-gradient">
        {" "}
        You have {todolength} open {tasksOrTask} on Taskify
      </h1>
    </header>
  );
}

export default Header;
