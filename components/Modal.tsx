// import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { useEffect, useState } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

// const Backdrop = (props: any) => {
//   return <div className="fixed w-full z-40 h-screen bg-black" onClick={props.onClose} />;
// };

// const ModalOverlay = (props: any) => {
//   return (
//     <div className="fixed overflow-auto phone:h-screen z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//       <div>{props.children}</div>
//     </div>
//   );
// };

// const portalElement = document.getElementById("overlays");

// const Modal = (props: any) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(
//         <Backdrop onClose={props.onClose} />,
//         portalElement
//       )}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Modal;

const Modal = (props: any) => {
    const [isBrowser, setIsBrowser] = useState(false);
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleClose = (e: any) => {
        e.preventDefault();
        props.onClose();
    }

    const portalElement = document.getElementById("overlays");

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
    
//   return (
//     <div>Modal</div>
//   )
}

export default Modal