import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./redux-examples";

const Index = () => {
    return(
        <>
            <h1>Labs</h1>
            <ReduxExamples/>

            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/explore">
                Tuiter Explore
            </Link> |
            <Link to="/tuiter">
                Tuiter Home
            </Link>
        </>
    )
};

export default Index;
