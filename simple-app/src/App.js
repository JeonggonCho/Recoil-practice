import './App.css';
import {atom, selector} from "recoil";
import TextInput from "./components/TextInput";
import CharacterCount from "./components/CharacterCount";

export const textState = atom({
  key: 'textState',
  default: '',
});

export const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  }
});

function App() {
  return (
    <div style={{padding: 16}}>
      <TextInput/>
      <CharacterCount/>
    </div>
  );
}

export default App;
