import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () => {
    return (
        <div className="row mt-2 w-100">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2 ms-auto">
            <NavigationSidebar/>
        </div>
        <ExploreComponent/>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 me-auto">
            <WhoToFollowList/>
        </div>
        </div>
    );
};

export default ExploreScreen;
