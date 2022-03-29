const NavigationSidebar = () => {
    return(`
<div>
            <div class="list-group">
                <div class="list-group-item">
                    <i class="fab fa-twitter"></i>
                </div>
                <a class="list-group-item" href="home.html">
                    <i class="fas fa-home"></i>
                    <p class="d-xxl-inline d-xl-inline d-none">Home</p>
                </a>
                <a class="list-group-item list-group-item-primary" href="explore.html">
                    <i class="fas fa-hashtag"></i>
                    <p class="d-xxl-inline d-xl-inline d-none">Explore</p>
                </a>
                <a class="list-group-item" href="notifications.html">
                    <i class="fas fa-bell"></i>
                    <p class="d-xxl-inline d-xl-inline d-none">Notifications</p>
                </a>
                <a class="list-group-item" href="messages.html">
                    <i class="fas fa-envelope"></i>
                    <p class="d-xxl-inline d-xl-inline d-none">Messages</p>
                </a>
                <a class="list-group-item" href="bookmarks.html">
                    <i class="fas fa-bookmark"></i>
                    <p class="d-xxl-inline d-xl-inline d-none">Bookmarks</p>
                </a>
                <a class="list-group-item" href="lists.html">
                    <i class="fas fa-list"></i>
                    <p class="d-xxl-inline d-xl-inline d-none">Lists</p>
                </a>
                <a class="list-group-item" href="profile.html">
                    <i class="fas fa-user"></i>
                    <p class="d-xxl-inline d-xl-inline d-none">Profile</p>
                </a>
                <a class="list-group-item" href="more.html">
                    <i class="fas fa-ellipsis-h"></i>
                    <p class="d-xxl-inline d-xl-inline d-none">More</p>
                </a>
            </div>
            <button class="btn btn-primary wd-button m-1">tweet</button>
</div>`);
}
export default NavigationSidebar;
