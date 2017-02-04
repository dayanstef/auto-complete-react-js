import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import Countries from "./app/screens/Countries";
import "./assets/styles.css";

ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={Countries}/>
    </Router>,
    document.getElementById('container')
);
