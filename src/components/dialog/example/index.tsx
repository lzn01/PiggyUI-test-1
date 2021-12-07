import * as React from "react";
import Dialog from "../index";
import {useState} from "react";

export default () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => setVisible(!visible)}/>
            <Dialog visible={visible}/>
        </div>
    );
}