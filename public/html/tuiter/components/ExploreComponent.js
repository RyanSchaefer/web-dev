import PostSummaryList from "./PostSummary/PostSummaryList.js";

const ExploreComponent = () => {
    return (`
<div class="col-xl-6 col-xxl-5 col-lg-7 col-md-8 col-8 text-center me-xl-0 me-xxl-0 me-lg-0 me-md-auto me-sm-auto">
            <div class="row">
            <div class="input-group pb-2">
            <span class="input-group-prepend">
                <button class="btn wd-search-icon border border-end-0">
                    <i class="fa fa-search"></i>
                </button>
            </span>
            <input id="search-bar" placeholder="Search Twitter" class="form-control wd-search-bar rounded-pill border-start-0"/>
            <span class="d-flex align-items-center px-3">
                <i class="fa fa-cog d-inline"></i>
            </span>
            </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
            <div class="nav-item">
                <a class="nav-link active">For you</a>
            </div>
            <div class="nav-item">
                <a class="nav-link">Trending</a>
            </div>
            <div class="nav-item">
                <a class="nav-link">News</a>
            </div>
            <div class="nav-item">
                <a class="nav-link">Sports</a>
            </div>
            <div class="nav-item d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none d-none">
                <a class="nav-link">Entertainment</a>
            </div>
           </ul>   
            <div>
                <img src="images/starship.jpg" class="img-fluid">
                <h1 class="position-absolute zindex-bring-to-front wd-picture-heading px-3"><b>SpaceX's Starship</b></h1>
            </div>
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;

