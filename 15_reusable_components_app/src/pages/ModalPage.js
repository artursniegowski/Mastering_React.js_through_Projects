import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage () {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>
                I Accept
            </Button>
        </div>
    );
    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Don't forget to acknowledge this message!
            </p>
        </Modal>
    );

    return (
        <div>
            <Button
             onClick={handleClick} 
             primary
            >
                Open
            </Button>
            { showModal && modal }
            <p className="my-8">
                This is just random text that you can read.
            </p>
        </div>
    );
};

export default ModalPage;