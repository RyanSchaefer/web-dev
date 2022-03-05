import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json"
import React from "react";
const WhoToFollowList = () => {
    return (
            <ul className="list-group">
                {who.map(i => <WhoToFollowListItem props={i}/>)}
            </ul>
); }
export default WhoToFollowList;