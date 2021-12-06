import * as React from "react";
import {FC} from "react";

interface IconProps {
    name: string;
}

const Icon: FC<IconProps> = (props) => {
    const {name} = props;
    return (
        <span>{name}</span>
    );
};

export default Icon;