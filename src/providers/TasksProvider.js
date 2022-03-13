import { createContext, useContext, useState } from "react";
import testTasks from "../testTasks";

const TasksContext = createContext();

const startingTasks = testTasks.slice();

const TasksProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(testTasks);

  const contextValue = {
    taskList,
  };

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTaskListContext = () => useContext(TasksContext);

export default TasksProvider;
