import * as React from "react";
import Col from "../../../components/grid/Col";

const GridDemo1 = () => {
    return (
        <Col xs={1} sm={{span: 1}} xl={{span: 32, offset: 2}}/>
    );
};
export default GridDemo1;