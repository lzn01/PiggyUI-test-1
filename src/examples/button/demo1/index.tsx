import * as React from "react";
import Button from "../../../components/button";

const ButtonDemo1 = () => {
    return (
        <Button
            disabled
            ghost
            kind={'success'}
        >
            按钮
        </Button>
    );
};

export default ButtonDemo1;