import React from 'react';

const NavigationSidebar = ({
    active = 'explore'
}) => {
    return(
<div>
            <div className="list-group">
                <div className="list-group-item">
                    <i className="fab fa-twitter"/>
                </div>
                <a className={`list-group-item ${active === 'home' ? 'active': ''}`} href="home.html">
                    <i className="fas fa-home"/>
                    <p className="d-xxl-inline d-xl-inline d-none">Home</p>
                </a>
                <a className={`list-group-item ${active === 'explore' ? 'active': ''}`} href="explore.html">
                    <i className="fas fa-hashtag"/>
                    <p className="d-xxl-inline d-xl-inline d-none">Explore</p>
                </a>
                <a className={`list-group-item ${active === 'notifications' ? 'active': ''}`} href="notifications.html">
                    <i className="fas fa-bell"/>
                    <p className="d-xxl-inline d-xl-inline d-none">Notifications</p>
                </a>
                <a className={`list-group-item ${active === 'messages' ? 'active': ''}`} href="messages.html">
                    <i className="fas fa-envelope"/>
                    <p className="d-xxl-inline d-xl-inline d-none">Messages</p>
                </a>
                <a className={`list-group-item ${active === 'bookmarks' ? 'active': ''}`} href="bookmarks.html">
                    <i className="fas fa-bookmark"/>
                    <p className="d-xxl-inline d-xl-inline d-none">Bookmarks</p>
                </a>
                <a className={`list-group-item ${active === 'lists' ? 'active': ''}`} href="lists.html">
                    <i className="fas fa-list"/>
                    <p className="d-xxl-inline d-xl-inline d-none">Lists</p>
                </a>
                <a className={`list-group-item ${active === 'profile' ? 'active': ''}`} href="profile.html">
                    <i className="fas fa-user"/>
                    <p className="d-xxl-inline d-xl-inline d-none">Profile</p>
                </a>
                <a className={`list-group-item ${active === 'more' ? 'active': ''}`} href="more.html">
                    <i className="fas fa-ellipsis-h"/>
                    <p className="d-xxl-inline d-xl-inline d-none">More</p>
                </a>
            </div>
            <button className="btn btn-primary wd-button m-1">tweet</button>
</div>);
}
export default NavigationSidebar;
