import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todoArray, setTodoArray] = useState<Todo[]>([])

  const addToList = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo){
      let todoTask: Todo = {
        id: Date.now(),
        todo,
        isDone: false
      }
      setTodoArray([...todoArray, todoTask])
      setTodo("")
    }
    console.log(todoArray)
  }

  console.log(todo); 

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} addToList={addToList}/>
      <TodoList todoArray = {todoArray} setTodoArray={setTodoArray}/>
    </div>
  );
}

export default App;
