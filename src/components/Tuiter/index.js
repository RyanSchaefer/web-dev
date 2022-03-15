import React from "react";
import who from "../../reducers/who";
import {createStore, combineReducers} from "redux";
import tuits from "../../reducers/tuits";
import NavigationSidebar from "./NavigationSidebar";
import { Outlet } from 'react-router-dom';
import {Provider} from "react-redux";
import WhoToFollowList from "./WhoToFollowList";

const reducer = combineReducers({tuits: tuits, who})
const store = createStore(reducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Outlet/>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );

};

export default Tuiter;
