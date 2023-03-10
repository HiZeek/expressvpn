import ReactDOM from "react-dom";
import { ReactElement, useEffect, useState } from "react";
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

    const modalContent = props.show ? (
        <div>
            <div className="fixed top-0 left-0 w-full z-40 h-screen bg-back" onClick={props.onClose} />
            <div className="fixed overflow-auto z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 md:p-10 rounded-[32px]">
                <div className="pb-10 flex flex-col items-end">
                    <CloseOutlinedIcon className="cursor-pointer" onClick={handleClose} />
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    ) : <></>;

    if(isBrowser) {
        return ReactDOM.createPortal(<>{modalContent}</>, document.querySelector("#overlays")!)
    } else {
        return null
    }
    
}

export default Modal

