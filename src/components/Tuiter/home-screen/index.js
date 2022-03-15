import React from "react";
import PostSummaryList from "../PostSummaryItem/PostSummaryList";
import TuitList from "../TuitList";
import WhatsHappening from "../whats-happening";

const HomeScreen = () => {
    return(
        <>
            <WhatsHappening/>
            <TuitList/>
            <PostSummaryList title="What's happening"/>
        </>
    )
}

export default HomeScreen;
