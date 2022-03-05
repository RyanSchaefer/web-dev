import React from "react";
import '../../../styling/explore.css';
import PostSummaryList from "../PostSummaryItem/PostSummaryList";

const ExploreComponent = () => {
    return (
<div className="col-xl-6 col-xxl-5 col-lg-7 col-md-8 col-8 text-center me-xl-0 me-xxl-0 me-lg-0 me-md-auto me-sm-auto">
            <div className="row">
            <div className="input-group pb-2">
            <span className="input-group-prepend">
                <button className="btn wd-search-icon border border-end-0">
                    <i className="fa fa-search"/>
                </button>
            </span>
            <input id="search-bar" placeholder="Search Twitter" className="form-control wd-search-bar rounded-pill border-start-0"/>
            <span className="d-flex align-items-center px-3">
                <i className="fa fa-cog d-inline"/>
            </span>
            </div>
           </div>
           <ul className="nav mb-2 nav-tabs">
            <div className="nav-item">
                <a className="nav-link active">For you</a>
            </div>
            <div className="nav-item">
                <a className="nav-link">Trending</a>
            </div>
            <div className="nav-item">
                <a className="nav-link">News</a>
            </div>
            <div className="nav-item">
                <a className="nav-link">Sports</a>
            </div>
            <div className="nav-item d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none d-none">
                <a className="nav-link">Entertainment</a>
            </div>
           </ul>   
            <div>
                <img src="./images/starship.jpg" className="img-fluid"/>
                <h3 className="position-absolute zindex-bring-to-front wd-picture-heading px-3"><b>SpaceX's Starship</b></h3>
            </div>
           <PostSummaryList/>
           </div>
    );
}
export default ExploreComponent;

