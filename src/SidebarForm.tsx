import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Container } from "react-bootstrap";

// Prop time BBG
type Props = {
  addTask: () => void;
};

export default function SidebarForm({ addTask }: Props) {
  return (
    <div className="mx-3 vh-100">
      <Container className="mx-3">
        <Form>
          <Form.Label className="mt-3">Add A New Task:</Form.Label>
          <FloatingLabel controlId="floatingInput" label="Input New Task">
            <Form.Control
              as="input"
              placeholder="Input New Task"
              className="mb-3"
            />
          </FloatingLabel>
          <div className="d-grid gap-2">
            <Button variant="outline-dark" type="submit" onClick={addTask}>
              Add Task
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
