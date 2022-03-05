import PostSummaryItem from './PostSummaryItem.js';
import posts from './posts.json';
import React from "react";

const PostSummaryList = () => {
    return (
            <ul className="list-group">
            {posts.map(i => <PostSummaryItem props={i}/>)}
            </ul>
); }
export default PostSummaryList;