import React, {useState} from "react";

const AddTodo = ({ onAdd }) => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log( text, 44)
        onAdd(text)
        setText('')
    }

    return(
        <>
        {/* {JSON.stringify(text)} */}
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a new todo..."
            />
            <button type="submit">Add Todo</button>
        </form>
        </>
    )

}

export default AddTodo