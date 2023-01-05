import Modal from "../ui/Modal";
import MultiStepForm from "./MultiStepForm";

const ModalOutput = (props: any) => {
  return (
    <Modal show={props.show} onClose={props.onClose}>
      <MultiStepForm />
    </Modal>
  );
};

export default ModalOutput;
