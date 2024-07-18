import './App.css';
import TodoItemCreator from "./components/TodoItemCreator";
import {todoListState} from "./TodoAtoms";
import TodoItem from "./components/TodoItem";
import {useRecoilValue} from "recoil";

function App() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="App">
      <TodoItemCreator/>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem}/>
      ))}
    </div>
  );
}

export default App;
