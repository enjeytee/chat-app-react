import { Container, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { v4 as uuid } from "uuid";

const Login = ({ onIdSubmit }) => {
  const idRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };
  const createNewId = () => {
    onIdSubmit(uuid());
  };
  return (
    <Container className="align-items-center d-flex" style={{ height: "100vh" }}>
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="tex" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" className="me-2 mr-2">Login</Button>
        <Button variant="secondary" onClick={createNewId} className="mr-2">Create A New ID</Button>
      </Form>
    </Container>
  );
};
export default Login;
