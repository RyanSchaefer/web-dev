import React from "react";
import '../../../styling/explore.css';
const WhoToFollowListItem = ({props={
    avatarIcon: 'images/NASA_logo.svg.png',
    userName: 'NASA',
    handle: 'NASA'
}}) => {
    return (
        <div className="list-group-item">
                <span className="d-flex align-items-center">
                    <img className="wd-picture" src={props.avatarIcon}/>
                    <span className="d-inline-flex flex-column px-3 wd-high-z-index">
                        <p className="p-0 m-0"><b>{props.userName}</b> <i className="fa fa-check-circle"/></p>
                        <p className="p-0 m-0">@{props.handle}</p>
                    </span>
                    <button className="btn btn-primary rounded-pill ms-auto position-absolute end-0 mx-3">
                        Follow
                    </button>
                </span>
            </div>
    )
}

export default WhoToFollowListItem;