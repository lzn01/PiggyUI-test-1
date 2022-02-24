import * as React from "react";
import Textarea from "../../../components/Input/Textarea";

const InputDemo2 = () => {
    return (
        <>
            <Textarea rows={1}/>
            <Textarea autosize rows={5} cols={30}/>
        </>
    );
};
export default InputDemo2;