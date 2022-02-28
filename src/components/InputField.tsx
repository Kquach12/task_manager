import React, {useRef} from 'react'
import './styles.css'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addToList:(e: React.FormEvent)=> void;
}

const InputField: React.FC<Props> = ({todo, setTodo, addToList}) => {
    
    const inputRef = useRef<HTMLInputElement>(null)
    
    return(
        <form className='input' onSubmit={(e) => {addToList(e); inputRef.current?.blur()}}>
            <input ref={inputRef} type="input" placeholder="Enter a task" value={todo} onChange={(e) => setTodo(e.target.value)} className='input_box'></input>
            <button className='input_submit'>Go</button>
        </form>
    )
}

export default InputField