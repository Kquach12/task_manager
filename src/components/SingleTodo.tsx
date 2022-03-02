import React, { useState, useRef, useEffect } from 'react'
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

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id:number) =>{
        setTodoArray(todoArray.map((todo)=>
            todo.id == id ? {...todo, isDone: !todo.isDone} : todo))
    }

    const handleDelete = (id: number) =>{
        setTodoArray(todoArray.filter((todo) =>{
            return todo.id !== id 
        }))
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault()

        setTodoArray(todoArray.map((todo)=>(
            todo.id===id?{...todo,todo:editTodo}:todo
        )))
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    return(
        <div >
            <form className="todos_single" onSubmit={(e)=>handleEdit(e, todo.id)}>
                {
                    edit ? (
                        <input type="text" ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className='todos_single-text'/>
                    ):(
                        todo.isDone?
                        (
                            <s className='todos_single-text'>{todo.todo}</s>
                        ):(
                            <span className='todos_single-text'>{todo.todo}</span>
                        )
                    )  
                }
                <div>
                    <span className="icon" onClick={()=>{
                        if(!edit && !todo.isDone){
                            setEdit(!edit)
                        }
                    }}>
                        <AiFillEdit/>
                    </span>
                    <span className="icon" onClick={() =>handleDelete(todo.id)}><AiFillDelete/></span>
                    <span className="icon" onClick={()=>handleDone(todo.id)}><MdDone/></span>
                </div>
            </form>
        </div>
    )
}

export default SingleTodo