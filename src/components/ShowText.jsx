import { useContext } from "react"
import { TextContext } from "../Context/ContextProvide"
import useCategory from "../store/useCategory"

const ShowText = ({ text: { id, task, isDone } }) => {
    //const { doneHandler } = useContext(TextContext)
    const { removeHandler, doneHandler } = useCategory()

    const handleChange = (id) => {
        doneHandler(id)
    }

    return (
        <div>
            <div className="flex w-80 bg-white justify-between p-2 mt-5 mx-auto">
                <input
                    type="checkbox"
                    checked={isDone}
                    className="size-4"
                    onChange={() => handleChange(id)} />
                <p className={isDone ? "line-through" : ""}>{task}</p>
                <button className=" text-[12px] font-medium px-3 bg-red-400 rounded-xl" onClick={() => removeHandler(id)}>delet</button>
            </div>
        </div>
    )
}

export default ShowText
