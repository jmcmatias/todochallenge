import { createContext, useContext, useState } from "react";
import testTasks from "../testTasks";

const TasksContext = createContext();

const startingTasks = testTasks;

const TasksProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(startingTasks);
  const [showAll, setShowall] = useState(true);
  const [sorted, setSorted] = useState(0);

  // New Task Logic
  const addNewTask = (content) => {
    const setId = () => (taskList.length > 0 ? maxTaskId(taskList) + 1 : 0);
    const maxTaskId = (tks) =>
      Math.max.apply(
        null,
        tks.map((t) => t.id)
      );
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

  const taskContentChange = (task, newContent) => {
    task.content = newContent;
    saveTask(task);
  };

  const saveTask = (task) => {
    const tempTasks = taskList.slice(); // creates a copy of tasks
    tempTasks[tempTasks.indexOf(task)] = task; // Saves Task
    setTaskList(tempTasks);
  };

  // Delete Logic
  const deleteTask = (id) => {
    const tempTasks = taskList.filter((task) => task.id !== id); // creates a copy of tasks except the one with the id received
    setTaskList(tempTasks);
  };

  // Hide Complete task Logic

  const hideCompleted = (e) => {
    setShowall(!showAll);
  };

  const tasksToShow = showAll
    ? taskList
    : taskList.filter((task) => task.completed === false);

  // Sort Logic
  const alphaSort = () => {
    let sorting = sorted + 1;
    setSorted(sorting);
    if (sorting > 2) setSorted(0);
    switch (sorted) {
      case 0:
        setTaskList(
          taskList.sort((a, b) => a.content.localeCompare(b.content))
        );
        break;
      case 1:
        setTaskList(
          taskList.sort((a, b) => b.content.localeCompare(a.content))
        );
        break;
      case 2:
        setTaskList(taskList.sort((a, b) => a.date.localeCompare(b.date)));
        break;
      default:
        setTaskList(taskList.sort((a, b) => a.date.localeCompare(b.date)));
        break;
    }
  };

  const contextValue = {
    taskList,
    tasksToShow,
    showAll,
    sorted,
    addNewTask,
    taskStatusChange,
    taskContentChange,
    deleteTask,
    hideCompleted,
    alphaSort,
  };

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTaskListContext = () => useContext(TasksContext);

export default TasksProvider;
