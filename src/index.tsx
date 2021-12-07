import * as React from "react";
import * as ReactDOM from "react-dom";
import {HashRouter as Router, Route, NavLink} from "react-router-dom";
import IconExample from "./components/icon/example";

ReactDOM.render(
    <Router>
        <div>
            {/*<header>*/}
            {/*    <div className="logo">*/}
            {/*        FUI*/}
            {/*    </div>*/}

            {/*</header>*/}
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/button">Button</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">对话框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">布局</NavLink>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={IconExample}/>
                </main>
            </div>
        </div>
    </Router>,
    document.querySelector("#root")
);