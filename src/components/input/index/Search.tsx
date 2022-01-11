import * as React from "react";
import type {ChangeEventHandler, FC} from "react";
import type {SearchProps} from "../../../types/input";
import "../index.scss";
import Input from "./Input";
import classes from "../../../common/methods/classes";
import Icon from "../../icon";
import {useState} from "react";

const componentName = "search";

const Search: FC<SearchProps> =
    ({
         className,
         defaultValue = "",
         enterButton = false,
         onChange,
         onPressEnter,
         onSearch,
         ...rest
     }) => {
        const [searchValue, setSearchValue] = useState(defaultValue);

        const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
            if (onChange) {
                onChange(e);
            }
            setSearchValue(e.target.value);
        };

        const searchHandler = () => {
            if (onSearch) {
                onSearch(searchValue);
            }
        };

        return (
            <Input
                className={classes(componentName, "", [className], {
                    "enter-button": !!enterButton
                })}
                addonAfter={
                    enterButton &&
                    <div
                        className={classes(componentName, "enter-button")}
                        onClick={searchHandler}
                    >
                        {
                            typeof enterButton === "boolean"
                                ? <Icon name={"wechat"} size={20}/>
                                : enterButton
                        }
                    </div>
                }
                suffix={
                    !enterButton &&
                    <Icon
                        name={"wechat"}
                        onClick={searchHandler}
                        size={18}
                        style={{cursor: "pointer"}}
                    />
                }
                onChange={changeHandler}
                onPressEnter={searchHandler}
                value={searchValue}
                {...rest}
            />
        );
    };
export default Search;