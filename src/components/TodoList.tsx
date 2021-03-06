import React from 'react'
import './styles.css'
import {Todo} from '../model'
import SingleTodo from './SingleTodo'

interface Props{
    todoArray: Todo[];
    setTodoArray: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todoArray, setTodoArray}) => {
    return(
        <div className="todos">
            {todoArray.map( todo =>(
                <SingleTodo todo={todo} key={todo.id} todoArray={todoArray} setTodoArray={setTodoArray}/>
            ) )}
        </div>
    )
}

export default TodoList