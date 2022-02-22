import NavigationSidebar from "./NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "./WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2 w-100">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 ms-auto">
            ${NavigationSidebar()}
        </div>
            ${ExploreComponent()}
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 me-auto">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
