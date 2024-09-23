import { createContext, useState } from "react";

const TextContext = createContext();
const TextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: "funny",
            isDone: false
        },
        {
            id: 2,
            task: "hahaha",
            isDone: false
        },
        {
            id: 3,
            task: "heheheh",
            isDone: false
        }
    ])
    const addHandler = (text) => {
        setTasks([...tasks, text])

    }
    const removeText = (a) => {

        console.log(a)
        setTasks(tasks.filter((task) => task.id !== a))
    }
    const doneHandler = (el) => {
        setTasks(tasks.map((task) => task.id == el ? { ...task, isDone: !task.isDone } : task))
    }
    const dataLists = { tasks, addHandler, setTasks, removeText, doneHandler }
    return (
        <TextContext.Provider value={dataLists}>
            {children}
        </TextContext.Provider>
    )
}

export { TextContext, TextProvider }