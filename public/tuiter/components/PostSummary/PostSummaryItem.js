const PostSummaryItem = (props) => {
    return (
        `<div class="list-group-item d-flex flex-row">
                <span class="d-inline-flex flex-column align-items-start flex-grow-1">
                    <p class="p-0 m-0 text-secondary">${props.topic}</p>
                    <p class="p-0 m-0 d-inline"><b>${props.userName}</b> <i class="fa fa-check-circle"></i><span class="text-secondary"> - ${props.time}</span></p>
                    <p class="p-0 m-0 text-start"><b>${props.title}</b></p>
                </span>
                <span class="d-inline-flex align-items-center">
                    <img src="${props.image}" class="wd-article-picture">
                </span>
            </div>`
    )
};

export default PostSummaryItem;