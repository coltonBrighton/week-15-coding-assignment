import { completedTaskArray } from "./TEST_DATA";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

// giving my props textColor, newWidth, bgColor their respective types
type Props = {
  newWidth: number;
  textColor: string;
  bgColor: string;
};

// use destructuring to grab textColor, newWidth and bgColor then set their type to Props
export default function CompletedTasks({
  newWidth,
  textColor,
  bgColor,
}: Props) {
  return (
    <Col md className="p-0 vh-100" style={{ backgroundColor: bgColor }}>
        <h4 className="my-3 mx-3 text-light">Completed Tasks:</h4>
        <Stack gap={3}>
          <Card
            className="shadow-md mx-auto"
            style={{ width: newWidth + "rem" }}
          >
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Check.Input type="checkbox" checked />
                  <Form.Check.Label
                    className="text-decoration-line-through mx-2"
                    style={{ textDecorationColor: textColor }}
                  >
                    {completedTaskArray[0].task}
                  </Form.Check.Label>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
          <Card
            className="shadow-md mx-auto"
            style={{ width: newWidth + "rem" }}
          >
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Check.Input type="checkbox" checked />
                  <Form.Check.Label
                    className="text-decoration-line-through mx-2"
                    style={{ textDecorationColor: textColor }}
                  >
                    {completedTaskArray[1].task}
                  </Form.Check.Label>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Stack>
    </Col>
  );
}
