import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './index.scss';
import IconExample from './examples/Icon';
import ModalExample from './examples/Modal';
import ButtonExample from './examples/Button';
import GridExample from './examples/Grid';
import SwitchExample from './examples/Switch';
import InputExample from './examples/Input';
import CheckboxExample from './examples/Checkbox';
import RadioExample from './examples/Radio';
import RateExample from './examples/Rate';
import SpinExample from './examples/Spin';
import CarouselExample from './examples/Carousel';

ReactDOM.render(
    <Router>
        <div>
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
                        <li>
                            <NavLink to="/checkbox">选择框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/radio">单选框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/rate">评分</NavLink>
                        </li>
                        <li>
                            <NavLink to="/carousel">走马灯</NavLink>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Routes>
                        <Route path="/icon" element={<IconExample />} />
                        <Route path="/button" element={<ButtonExample />} />
                        <Route path="/modal" element={<ModalExample />} />
                        <Route path="/grid" element={<GridExample />} />
                        <Route path="/switch" element={<SwitchExample />} />
                        <Route path="/spin" element={<SpinExample />} />
                        <Route path="/input" element={<InputExample />} />
                        <Route path="/checkbox" element={<CheckboxExample />} />
                        <Route path="/radio" element={<RadioExample />} />
                        <Route path="/rate" element={<RateExample />} />
                        <Route path="/carousel" element={<CarouselExample />} />
                    </Routes>
                </main>
            </div>
        </div>
    </Router>,
    document.querySelector('#root'),
);