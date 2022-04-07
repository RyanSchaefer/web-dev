import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import TuitListItem from "./TuitListItem";
import {createTuit, deleteTuit, findAllTuits, updateTuit} from "../../../actions/tuits-actions";

const selectAllTuits = (state) => state.tuits;

const TuitList = () => {
    const tuits = useSelector(selectAllTuits);
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit', likes: 0, postedBy: {username: "me"}});
    useEffect(() =>
            findAllTuits(dispatch),
        []);
    return(
        <>
            <ul className="list-group">
                {
                    tuits.map(tuit =>
                        <>
                            <TuitListItem tuit={tuit}/>
                            <div>
                                Likes: {tuit.likes}
                                <i onClick={() => updateTuit(dispatch, {
    ...tuit,
    likes: tuit.likes + 1
})} className="far fa-thumbs-up ms-2"/>
                            </div>
                        </>
                    )
                }
            </ul>
            <button onClick={() =>
                createTuit(dispatch, newTuit)}
                    className="btn btn-primary float-end">
                Tuit
            </button>
            <textarea className="form-control w-75"
    onChange={(e) =>
        setNewTuit({
            ...newTuit,
            tuit: e.target.value
        })}/>
        </>
    )
};

export default TuitList;
