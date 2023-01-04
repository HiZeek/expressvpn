// import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { useEffect, useState } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Modal = (props: any) => {
    const [isBrowser, setIsBrowser] = useState(false);
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleClose = (e: any) => {
        e.preventDefault();
        props.onClose();
    }

    let portalElement = document.getElementById("overlays") as HTMLElement;

    const modalContent = props.show ? (
        <div className="fixed top-0 left-0 w-full z-40 h-screen bg-back" onClick={props.onClose}>
            <div className="fixed overflow-auto z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-[32px]">
                <div className="pb-10 cursor-pointer flex flex-col items-end" onClick={handleClose}>
                    <CloseOutlinedIcon />
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    ) : null;

    if(isBrowser) {
        return ReactDOM.createPortal(modalContent, portalElement)
    } else {
        return null
    }
    
}

export default Modal