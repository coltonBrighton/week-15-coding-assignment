import deletePNG from "./assets/delete.png";
import editPNG from "./assets/edit.png";
import { Col, Stack, Card, Form, Button} from "react-bootstrap"

type Task = {
  id: number,
  task: string
}
// giving my props textColor, newWidth, bgColor their respective types
type Props = {
  textColor: string;
  newWidth: number;
  bgColor: string;
  taskArray: Task[];
  addTask: () => void;
  deleteTask: (taskId: number) => void;
  editTask: (taskId: number) => void;
  markComplete: (taskId: number) => void;
};

// use destructuring to grab textColor, newWidth and bgColor then set their type to Props
export default function TasksToDo({
  textColor,
  newWidth,
  bgColor,
  deleteTask,
  taskArray,
  editTask,
  markComplete
}: Props) {
  console.log("TasksToDo", taskArray)
  return (
    <Col style={{ backgroundColor: bgColor }}>
      <h4 className="display-5 text-center my-5">Tasks To Do:</h4>
      <Stack gap={3}>
        {taskArray.map((task, index) => (
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
                  label={ <span>{task.task}</span> }
                  onClick={ () => markComplete(task.id) }
                />
              </Form>
              <Button 
                variant="outline-light"
                onClick={() => editTask(task.id)}
                >
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