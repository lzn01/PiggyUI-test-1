import * as React from "react";
import {useState} from "react";
import Modal from "../../../components/modal";

const ModalDemo1 = () => {
    const [visible, setVisible] = useState(false);
    const onCancel = (e: React.MouseEvent) => {
        console.log(e);
        setVisible(false);
    };

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                click
            </button>
            <Modal
                visible={visible}
                onCancel={onCancel}
                title={'哈哈'}
            >
                哈哈
            </Modal>
        </div>
    );
};
export default ModalDemo1;