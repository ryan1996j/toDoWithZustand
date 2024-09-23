
import useCategory from "../store/useCategory"

const Total = () => {
    const { datas } = useCategory();
    return (
        <div>
            {<p>Total:{datas.length}
                Done:{datas.filter((el) => el.isDone).length}
            </p>

            }
        </div>
    )
}

export default Total
