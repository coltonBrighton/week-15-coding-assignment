import addPNG from "./assets/more.png"
import { Container, Form, InputGroup, Button } from "react-bootstrap";

// adding type for addTask function
type Props = {
    addTask: () => void;
};

export default function AddTaskBar({ addTask }: Props) {
  return (
    <div className="d-flex">
      <Container className="my-5 justify-content-center">
          <InputGroup>
            <Form.Control
                placeholder="Input New Task"
            />
            <Button 
                variant="secondary" 
                onClick={ addTask }
            >
                <img src={ addPNG } alt="add" />
            </Button>
          </InputGroup>
      </Container>
    </div>
  )
}