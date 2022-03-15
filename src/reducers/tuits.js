import posts from './data/tuits.json';

const tuits = (state = posts, action) => {
    switch (action.type) {
        case 'create-tuit':
            const tuit = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tuit,
                "avatar-image": "../../../images/react-blue.png",
                "logo-image": "../../../images/react-blue.png",
                "stats": {
                    "comments": 123,
                    "retuits": 234,
                    "likes": 345
                },
            };
            return ([
                    tuit,
                    ...state,
                ]
            );
        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });

        default:
            return(state);
    }

};

export default tuits;
