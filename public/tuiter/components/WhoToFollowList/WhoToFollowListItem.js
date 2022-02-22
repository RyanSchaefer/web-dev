const WhoToFollowListItem = (props) => {
    return (
        `<div class="list-group-item">
                <span class="d-flex align-items-center">
                    <img class="wd-picture" src="${props.avatarIcon}"/>
                    <span class="d-inline-flex flex-column px-3 wd-high-z-index">
                        <p class="p-0 m-0"><b>${props.userName}</b> <i class="fa fa-check-circle"></i></p>
                        <p class="p-0 m-0">@${props.handle}</p>
                    </span>
                    <button class="btn btn-primary rounded-pill ms-auto position-absolute end-0 mx-3">
                        Follow
                    </button>
                </span>
            </div>`
    )
}

export default WhoToFollowListItem;