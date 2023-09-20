import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal ({ onClose, children, actionBar }) {
    // make sure we cant scrole on the page if modal element is created
    useEffect(()=>{
        document.body.classList.add('overflow-hidden');
        // cleanup function whenever our model is about to be removed
        return () => {document.body.classList.remove('overflow-hidden')};
    },[]); 
    
    // this way we can inject our JSX in specific place
    // so it will be added where the class modal-container exists
    // which we added in our html
    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
};

export default Modal;