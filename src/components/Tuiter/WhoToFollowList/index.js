import WhoToFollowListItem from "./WhoToFollowListItem.js";
import {useSelector} from "react-redux";
import React from "react";
const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
            <ul className="list-group">
                {who.map(i => <WhoToFollowListItem props={i}/>)}
            </ul>
    );
}
export default WhoToFollowList;