
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import deletePNG from "./assets/delete.png";
import editPNG from "./assets/edit.png";

// giving my props textColor, newWidth, bgColor their respective types
type Props = {
  textColor: string;
  newWidth: number;
  bgColor: string;
  taskArray: [{
    id: number,
    task: string
  }]
  addTask: () => void;
  deleteTask: (taskId: number) => void;
};
// use destructuring to grab textColor, newWidth and bgColor then set their type to Props
export default function TasksToDo({
  textColor,
  newWidth,
  bgColor,
  deleteTask,
  taskArray
}: Props) {
  console.log("TasksToDo", taskArray)
  return (
    <Col md className="p-0 vh-100" style={{ backgroundColor: bgColor }}>
      <h4 className="my-3 mx-3">To Do:</h4>
      <Stack>
        {taskArray.map((task, index) => (
          <Card
          key={index}
          className="shadow-md mx-auto mb-3"
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
                  label={ task.task }
                />
              </Form>
              <Button variant="outline-light">
                <img src={editPNG} alt="Edit" />
              </Button>
              <Button 
                variant="outline-light"
                onClick={() => deleteTask(task.id)} // Pass the index to deleteTask
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
