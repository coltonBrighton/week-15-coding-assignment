import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { taskArray } from "./TEST_DATA";

export default function addTask() {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Check // prettier-ignore
            id="yup"
            label={taskArray[3].task}
          />
        </Form>
      </Card.Body>
    </Card>
  );
}
