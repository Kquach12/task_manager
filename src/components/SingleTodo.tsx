import React from 'react'
import './styles.css'
import {Todo} from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'


interface Props {
    todo: Todo
    todoArray: Todo[]
    setTodoArray: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todoArray, setTodoArray}:Props) => {
    return(
        <div >
            <form className="todos_single">
                <span className='todos_single-text'>{todo.todo}</span>
                <div>
                    <span className="icon"><AiFillEdit/></span>
                    <span className="icon"><AiFillDelete/></span>
                    <span className="icon"><MdDone/></span>
                </div>
            </form>
        </div>
    )
}

export default SingleTodo