import './App.css';
import TodoItemCreator from "./components/TodoItemCreator";
import {filteredTodoListState} from "./todoAtoms";
import TodoItem from "./components/TodoItem";
import {useRecoilValue} from "recoil";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";
import CurrentUserInfo from "./components/CurrentUserInfo";
import {Suspense} from "react";

function App() {
  const filteredTodoList = useRecoilValue(filteredTodoListState);

  return (
    <div style={{textAlign: 'center', padding: 16, width: 'fit-content', margin: "auto"}}>
      <Suspense fallback={<div>loading...</div>}>
        <CurrentUserInfo/>
      </Suspense>
      
      <br/>

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
