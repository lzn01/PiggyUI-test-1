import * as React from "react";
import * as ReactDOM from "react-dom";
import {HashRouter as Router, Route, NavLink} from "react-router-dom";
import "./index.scss";
import IconExample from "./examples/icon";
import ModalExample from "./examples/modal";
import ButtonExample from "./examples/button";
import GridExample from "./examples/grid";
import SwitchExample from "./examples/switch";
import SpinExample from "./examples/spin";
import InputExample from "./examples/input";

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
                            <NavLink to="/modal">对话框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/grid">布局</NavLink>
                        </li>
                        <li>
                            <NavLink to="/switch">开关</NavLink>
                        </li>
                        <li>
                            <NavLink to="/spin">加载中</NavLink>
                        </li>
                        <li>
                            <NavLink to="/input">输入</NavLink>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/modal" component={ModalExample}/>
                    <Route path="/grid" component={GridExample}/>
                    <Route path="/switch" component={SwitchExample}/>
                    <Route path="/spin" component={SpinExample}/>
                    <Route path="/input" component={InputExample}/>
                </main>
            </div>
        </div>
    </Router>,
    document.querySelector("#root")
);