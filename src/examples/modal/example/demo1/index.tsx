import * as React from "react";
import {useState} from "react";
import Modal from "../../../../components/modal";

const ModalDemo1 = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                click
            </button>
            <Modal visible={visible}>
                哈哈
            </Modal>
        </div>
    );
};

export default ModalDemo1;