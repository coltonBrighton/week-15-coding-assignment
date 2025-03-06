import deletePNG from "./assets/delete.png";
import { Col, Stack, Card, Form, Button } from "react-bootstrap";

// type for completedTask object in completedTaskArray
type completedTask = {
  id: number,
  task: string
}
// giving my prop deleteCompletedTask and completedTaskArray their respective type
type Props = {
  newWidth: number;
  textColor: string;
  bgColor: string;
  completedTaskArray: completedTask[];
  deleteCompletedTask: (taskId: number) => void;
};

// Updated application to include the completedTaskArray and the deleteCompletedTask function
// added delete button
export default function CompletedTasks({
  newWidth,
  textColor,
  bgColor,
  completedTaskArray,
  deleteCompletedTask,
}: Props) {
  return (
    <Col md className="vh-100" style={{ backgroundColor: bgColor }}>
        <h4 className="display-5 text-center my-5 text-light">Completed Tasks:</h4>
        <Stack gap={3}>
        {completedTaskArray.map((task, index) => (
          <Card
            key={index}
            className="mx-auto shadow border-0"
            style={{ width: newWidth + "rem" }}
        >
          <Card.Body className="bg-light">
            <Stack
              direction="horizontal"
              className="d-flex justify-content-center"
            >
              <Form className="w-100">
                <Form.Check
                  style={{ color: textColor }}
                  type="checkbox"
                  label={ <span className="text-decoration-line-through">{task.task}</span> }
                  checked
                />
              </Form>
              <Button 
                variant="outline-light"
                onClick={() => deleteCompletedTask(task.id)} // Pass the index to deleteTask
              >
                <img src={ deletePNG } alt="Delete" />
              </Button>
            </Stack>
          </Card.Body>
        </Card>
        ))}
        
      </Stack>
    </Col>
  );
}
