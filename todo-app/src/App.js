import './App.css';
import TodoItemCreator from "./components/TodoItemCreator";
import {filteredTodoListState} from "./TodoAtoms";
import TodoItem from "./components/TodoItem";
import {useRecoilValue} from "recoil";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";

function App() {
  const filteredTodoList = useRecoilValue(filteredTodoListState);

  return (
    <div style={{textAlign: 'center', padding: 16}}>
      <TodoListStats/>
      <TodoItemCreator/>
      <TodoListFilters/>
      {filteredTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem}/>
      ))}
    </div>
  );
}

export default App;
