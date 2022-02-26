import React from 'react'
import './styles.css'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addToList:(e: React.FormEvent)=> void;
}

const InputField: React.FC<Props> = ({todo, setTodo, addToList}) => {
    return(
        <form className='input' onSubmit={addToList}>
            <input type="input" placeholder="Enter a task" value={todo} onChange={(e) => setTodo(e.target.value)} className='input_box'></input>
            <button className='input_submit'>Go</button>
        </form>
    )
}

export default InputField