import SidebarForm from "./SidebarForm";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

// type for bgColor prop which will change the background color
type Props = {
  bgColor: string;
  isOpen: boolean;
  collapse: () => void;
  addTask: () => void;
};
// using destructuring to pull in bgColor and give it the type of Props
export default function Sidebar({ bgColor, isOpen, collapse, addTask}: Props) {
  // Sidebar component contains a SidebarForm component
  return (
    <Col md={isOpen ? 4 : 1} className="p-0 bg-success" >
      <Stack direction="horizontal">
        <div
          className="g-0 text-light w-100"
          style={{ backgroundColor: bgColor }}
        >
          {isOpen && <SidebarForm addTask={ addTask } />}
        </div>
        <div>
          <Button
            className="vh-100 rounded-0"
            onClick={collapse}
            variant="success"
          >
            {isOpen ? "<" : ">"}
          </Button>
        </div>
      </Stack>
    </Col>
  );
}
