import { useState } from "react"
import useCategory from "../store/useCategory";

const CreateText = () => {
    const [text, setText] = useState('');


    // const { addHandler } = useContext(TextContext)
    const { addHandler } = useCategory();


    const changeHandler = (e) => {
        setText(e.target.value)
    }
    const updateHandler = () => {
        const newTodo = {
            id: Date.now(),
            task: text,
            isDone: false
        }
        text != '' && addHandler(newTodo)

        setText("")



    }

    return (
        <div className="w-full mx-auto  text-center">
            <input type="text" value={text} placeholder="Enter something" onChange={changeHandler} />
            <button onClick={updateHandler} className="px-3 bg-red-300 ml-3 ">Add</button>
        </div>
    )
}

export default CreateText
