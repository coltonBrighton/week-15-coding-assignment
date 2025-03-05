import { useState } from "react";
import { taskArray } from "./TEST_DATA";
import CompletedTasks from "./CompletedTasks";
import Navbar from "./Navbars";
import Sidebar from "./Sidebar";
import TasksToDo from "./TasksToDo";
import Row from "react-bootstrap/Row";
import Footer from "./Footer";

type eventType= {
  preventDefault: any;
  type: string
  payload?: any
}

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  // collapse sidebar
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  // making a width prop for card sizes
  const width = 18;

    // Use useState to manage taskArray state
    const [tasks, setTasks] = useState(taskArray);
    // Delete task function
    const deleteTask = (taskId: number) => {
      // Filter out the task with the given taskId
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks)
    }

    const addTask = (e: eventType) => {
      // Filter out the task with the given taskId

      const newTask = {
        id:Math.random(),
        task: "blah"
      }
      e.preventDefault();
      const updatedTask = [
        ...tasks,
       newTask
      ]
     
      setTasks(updatedTask)
    }
  // create application using compenents Navbar, Sidebar, TasksToDo, and CompletedTasks.
  return (
    <div>
      <Navbar />
      <Row>
        <Sidebar 
          bgColor="teal" 
          isOpen={ isOpen } 
          addTask={ addTask }
          collapse={ toggleCollapse }
        />
        <TasksToDo 
          newWidth={width} 
          textColor="blue" 
          bgColor="pink"  
          deleteTask={ deleteTask }
          taskArray={ tasks }
        />
        <CompletedTasks 
          newWidth={ width } 
          textColor="grey" 
          bgColor="maroon"
        />
      </Row>
      <Footer bgColor="green" />
    </div>
  );
}
