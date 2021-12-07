import * as React from "react";
import {useState} from "react";
import Modal from "../../../../components/modal";

export default () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => setVisible(!visible)}/>
            <Modal visible={visible}/>
        </div>
    );
}