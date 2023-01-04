import Modal from "./Modal";

const ModalOutput = (props: any) => {
  return (
    <Modal show={props.show} onClose={props.onClose}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta minima
        vitae, illum id assumenda accusamus laboriosam consequuntur odio
        delectus praesentium dolore doloremque ipsam maiores et! Tenetur
        laboriosam a, ratione nisi dignissimos, voluptatem consequatur minima
        fugiat, impedit atque dicta accusamus blanditiis.
      </p>
    </Modal>
  );
};

export default ModalOutput;
