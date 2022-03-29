import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import * as service from '../../../services/tuits-service';
import TuitListItem from "./TuitListItem";
import {createTuit, deleteTuit, findAllTuits, updateTuit} from "../../../actions/tuits-actions";

const selectAllTuits = (state) => state.tuits;

const TuitList = () => {
    const tuits = useSelector(selectAllTuits);
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({tweet: 'New tuit', stats: {likes: 0}});
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
                            <i className="fas fa-crosshairs float-end"
                               onClick={() => deleteTuit(
                                   dispatch, tuit)}/>
                            <div>
                                Likes: {tuit.stats.likes}
                                <i onClick={() => updateTuit(dispatch, {
    ...tuit,
    stats: {
        ...tuit.stats,
        likes: tuit.stats.likes + 1
    }
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
            tweet: e.target.value
        })}/>
        </>
    )
};

export default TuitList;
