import { Button, Form, Modal } from "react-bootstrap";
import { useRef } from "react";
import { useContacts } from "../contexts/ContactsProvider";

const NewContactModal = ({ closeModal }) => {
  const { createContact } = useContacts();
  const handleSubmit = (e) => {
    e.preventDefault();
    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  };
  const idRef = useRef();
  const nameRef = useRef();

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button 
            type="submit" 
            className="me-2 mr-2"
          >
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};
export default NewContactModal;
