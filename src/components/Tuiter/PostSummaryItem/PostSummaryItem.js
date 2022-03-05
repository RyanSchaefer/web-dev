import React from "react";
import '../../../styling/explore.css'

const PostSummaryItem = ({props={
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "image": "./images/react.png"
}}) => {
    return (
        <div className="list-group-item d-flex flex-row">
                <span className="d-inline-flex flex-column align-items-start flex-grow-1">
                    <p className="p-0 m-0 text-secondary">{props.topic}</p>
                    <p className="p-0 m-0 d-inline"><b>{props.userName}</b> <i className="fa fa-check-circle"/><span className="text-secondary"> - {props.time}</span></p>
                    <p className="p-0 m-0 text-start"><b>{props.title}</b></p>
                </span>
                <span className="d-inline-flex align-items-center">
                    <img src={props.image} className="wd-article-picture"/>
                </span>
            </div>
    )
};

export default PostSummaryItem;