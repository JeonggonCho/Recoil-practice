import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {todoListState} from "../atoms/todoAtoms";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange}/>
      <button onClick={addItem}>Add</button>
    </div>
  );
};

let id = 0;

function getId() {
  return id++;
}

export default TodoItemCreator;
