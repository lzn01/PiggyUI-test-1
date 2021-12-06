import * as React from "react";
import {FC} from "react";
import "./methods/importAll";
import "./index.scss";

interface IconProps {
    name: string;
}

const Icon: FC<IconProps> = (props) => {
    const {name} = props;
    return (
        <svg className={"piggyui-icon"}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    );
};

export default Icon;