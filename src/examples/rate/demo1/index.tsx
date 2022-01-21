import * as React from "react";
import Rate from "../../../components/rate/index/Rate";

const RateDemo1 = () => {
    return (
        <div style={{backgroundColor: "rgba(255,255,255,0.5)"}}>
            <Rate/>
            <Rate defaultValue={2}/>
            <Rate defaultValue={3} allowClear allowHalf/>
            <Rate value={4} allowHalf/>
            <Rate tips={"一百八十星"} disabled value={2}/>
        </div>
    );
};
export default RateDemo1;