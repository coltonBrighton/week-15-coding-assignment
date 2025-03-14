import { useState } from "react";
import { completedTaskArray, taskArray } from "./TEST_DATA";
import CompletedTasks from "./CompletedTasks";
import Navbar from "./Navbars";
import TasksToDo from "./TasksToDo";
import Row from "react-bootstrap/Row";
import Footer from "./Footer";
import AddTaskBar from "./AddTaskBar";

export default function App() {
  // Use useState to manage taskArray state
  const [tasks, setTasks] = useState<{ id: number; task: string, completed:boolean }[]>(taskArray);

  // Using useState to manage completedTaskArray state
  const [completeTask, setCompleteTask] = useState<{ id: number; task: string, completed:boolean}[]>(completedTaskArray)

  const width = 18;

  // Delete task function
  const deleteTask = (taskId: number) => {
    // Filter out the task with the given taskId
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // update state for updatedTasks
    setTasks(updatedTasks);
  };

  // addTask on button click
  const addTask = () => {
    // create new task and add it to the array in state
    const newTask = {
      id: Math.random(),
      task: "Vacuum Living Room",
    };
    // update state for tasks
    setTasks([...tasks, {...newTask, completed: false}]);
  };

  // editTask on button click
  const editTask = (taskId: number) => {
    // grab the tasks currently in state then use map to update the task
    setTasks(prevTasks => 
      prevTasks.map(task => (
        task.id !== taskId ? 
        task : {
        ...task,
        task: "Clean Fish Tank"
      }
    )));
  }
  
  // mark complete
  const markComplete = (taskId: number) => {
    // find task to move to completedTaskArray
    const taskToComplete = tasks.find((task) => task.id === taskId)
    if (taskToComplete) {
      // update the task to toglle completed state
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      //update tasks new state
      setTasks(updatedTasks)
      if (!taskToComplete.completed) {
        // remove completed task from tasksArray
        const updatedTaskList = updatedTasks.filter(task => task.id !== taskId);
        setTasks(updatedTaskList)
        setCompleteTask(prevCompletedTasks => [...prevCompletedTasks,  {...taskToComplete, completed: true }])
        // add task to completedTaskArray
        //update tasks new state
        setCompleteTask([...completeTask, {...taskToComplete, completed:true}])
      }
    }
  }

  // delete completed task
  const deleteCompletedTask = (taskId: number) => {
    // filter out task with given taskId
    const updateCompletedTasks = completeTask.filter((task) => task.id !== taskId);
    // update state
    setCompleteTask(updateCompletedTasks)
  }
  // got rid of Sidebar component in favor of an addTaskbar component
  return (
    <div>
      <Row className="bg-dark vw-100">
      <Navbar />
        <AddTaskBar
          addTask={ addTask }
        />
        <TasksToDo
          newWidth={width}
          textColor="blue"
          bgColor="pink"
          deleteTask={deleteTask}
          taskArray={ tasks }
          addTask={ addTask }
          editTask={ editTask }
          markComplete={ markComplete }
        />
        <CompletedTasks 
          newWidth={width} 
          textColor="grey" 
          bgColor="maroon" 
          deleteCompletedTask={ deleteCompletedTask }
          completedTaskArray= { completeTask }
        />
      </Row>
      <Footer bgColor="black" />
    </div>
  );
}
