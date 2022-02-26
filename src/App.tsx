import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todoList, setTodoList] = useState<Todo[]>([])

  const addToList = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo){
      let todoTask: Todo = {
        id: Date.now(),
        todo,
        isDone: false
      }
      setTodoList([...todoList, todoTask])
      setTodo("")
    }
    console.log(todoList)
  }

  console.log(todo); 

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} addToList={addToList}/>
    </div>
  );
}

export default App;
