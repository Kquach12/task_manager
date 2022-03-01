import React from 'react'
import './styles.css'
import {Todo} from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import TodoList from './TodoList'


interface Props {
    todo: Todo
    todoArray: Todo[]
    setTodoArray: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todoArray, setTodoArray}:Props) => {

    const handleDone = (id:number) =>{
        setTodoArray(todoArray.map((todo)=>
            todo.id == id ? {...todo, isDone: !todo.isDone} : todo))
    }

    return(
        <div >
            <form className="todos_single">
                {
                    todo.isDone?(
                        <s className='todos_single-text'>{todo.todo}</s>
                        )
                        : (
                        <span className='todos_single-text'>{todo.todo}</span>
                        )
                }
                <div>
                    <span className="icon"><AiFillEdit/></span>
                    <span className="icon"><AiFillDelete/></span>
                    <span className="icon" onClick={()=>handleDone(todo.id)}><MdDone/></span>
                </div>
            </form>
        </div>
    )
}

export default SingleTodo