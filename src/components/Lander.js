// Lander Component
import { Wrapper, Block, Hidecompleted, Dots } from "./Lander-style";
import { useState } from "react";
import List from "./List";
import TasksProvider from "../providers/TasksProvider";
import Simpleform from "./Simpleform";
import Header from "./Header"

const Lander = () => {
 
  //const [tasks, setTasks] = useState([]);
  const [showAll, setShowall] = useState(true);
  const [sorted, setSorted] = useState(true);

/*
   // New Task Logic
  const handleAddNewTask = (content) => {
    const setId = () => (tasks.length > 0 ? maxTaskId(tasks) + 1 : 0);
    const newTask = {
      id: setId(),
      type: "Task",
      content: content,
      date: new Date().toISOString(),
      completed: false,
    };
    if (content) {
      setTasks(tasks.concat(newTask)); // Insert new task
    }
  };

  const maxTaskId = (tasks) =>
    Math.max.apply(
      null,
      tasks.map((task) => task.id)
    );

  // Tasks editing logic
  const handleTaskStatusChange = (task) => {
    task.completed = !task.completed;
    saveTask(task);
  };

  const handleContentChange = (task, newContent) => {
    task.content = newContent;
    saveTask(task);
  };

  const saveTask = (task) => {
    const tempTasks = tasks.slice(); // creates a copy of tasks
    tempTasks[tempTasks.indexOf(task)] = task; // Saves Task
    setTasks(tempTasks);
  };

  const handleOnDelete = (id) => {
    const tempTasks = tasks.filter((task) => task.id != id); // creates a copy of tasks except the one with the id received
    setTasks(tempTasks);
  };

  // Hide Complete task Logic

  const handleHideCompleted = (e) => {
    setShowall(!showAll);
  };

  const taskList = showAll
    ? tasks
    : tasks.filter((task) => task.completed === false);

  // Sort Logic
  const handleSort = () => {
    setSorted(!sorted);
    if (sorted)
      setTasks(tasks.sort((a, b) => a.content.localeCompare(b.content)));
    else setTasks(tasks.sort((a, b) => a.id - b.id));
  };
*/
  // Render
  return (
    <Wrapper>
      <Header/>
      <Block>
        <Simpleform
          innerText={""}
          placeholder={"Type Your To-Do task here"}
          s
          buttonName={"Create"}
          //inputValue={handleAddNewTask}
        />
      </Block>
      <Block>
        <TasksProvider>
        <List
          //tasksList={taskList}
          //onStatusChange={handleTaskStatusChange}
          //onContentChange={handleContentChange}
          //onDelete={handleOnDelete}
          //onSort={handleSort}
          //sorted={sorted}
        />
        </TasksProvider>
        <Dots>
            </Dots>
      </Block>
      <Hidecompleted>
        Hide completed
        <input type="checkbox" ></input>
      </Hidecompleted>
    </Wrapper>
  );
};

const TasksHidden = ({ tasks, showAll }) => {
  if (!showAll) {
    if (tasks.filter((task) => task.completed === true).length > 0) {
      const tasksCompleted = tasks.filter(
        (task) => task.completed === true
      ).length;
      return "•• " + tasksCompleted + " tasks completed ••";
    }
  }
  return "";
};

export default Lander;
