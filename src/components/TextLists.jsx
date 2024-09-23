//import { useContext } from "react"
//import { TextContext } from "../Context/ContextProvide"
import ShowText from "./ShowText";
import Total from "./Total";
import useCategory from "../store/useCategory";

const TextLists = () => {
    // const { tasks } = useContext(TextContext);
    const { datas } = useCategory();

    return (
        <div>
            {datas.length !== 0 && <Total />}
            {datas.map((item) => (
                <ShowText key={item.id} text={item} />
            ))}
        </div>
    )
}

export default TextLists
