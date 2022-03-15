import {useSelector} from "react-redux";
import TuitListItem from "./TuitListItem";

const selectAllTuits = (state) => state.tuits;

const TuitList = () => {
    const tuits = useSelector(selectAllTuits);
    return(
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitListItem tuit={tuit}/>
                )
            }
        </ul>
    )
};

export default TuitList;
