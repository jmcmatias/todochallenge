import { createContext, useContext, useState } from "react";
import testTasks from "../testTasks";

const TasksContext = createContext();

const startingTasks = testTasks;

const TasksProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(startingTasks);
  const [showAll, setShowall] = useState(true);
  const [sorted, setSorted] = useState(true);

  // New Task Logic
  const addNewTask = (content) => {
    const setId = () => (taskList.length > 0 ? maxTaskId(taskList) + 1 : 0);
    const maxTaskId = (tks) => Math.max.apply(null,tks.map((t) => t.id));
    const newTask = {
      id: setId(),
      type: "Task",
      content: content,
      date: new Date().toISOString(),
      completed: false,
    };
    if (content) {
      setTaskList(taskList.concat(newTask)); // Insert new task
    }
  };

 // Tasks editing logic
 const taskStatusChange = (task) => {
    task.completed = !task.completed;
    saveTask(task);
  };

  const contentChange = (task, newContent) => {
    task.content = newContent;
    saveTask(task);
  };

  const saveTask = (task) => {
    const tempTasks = taskList.slice(); // creates a copy of tasks
    tempTasks[tempTasks.indexOf(task)] = task; // Saves Task
    setTaskList(tempTasks);
  };
  

  const contextValue = {
    taskList,
    addNewTask,
    taskStatusChange,
    contentChange,
  };

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTaskListContext = () => useContext(TasksContext);

export default TasksProvider;
