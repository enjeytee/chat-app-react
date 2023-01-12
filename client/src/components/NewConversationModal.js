import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

const NewConversationModal = ({ closeModal }) => {
  const { contacts } = useContacts();
  const { createConversation } = useConversations();
  const [ selectedContactIds, setSelectedContactIds ] = useState([]);
  const handleCheckboxChange = (contactId) => {
    setSelectedContactIds(prev => {
      if (prev.includes(contactId)) {
        return prev.filter(p => {
          return contactId === p
        })
      } else {
        return [...prev, contactId]
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  };
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check 
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button 
            type="submit" 
            className="me-2 mt-2"
          >
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};
export default NewConversationModal;
