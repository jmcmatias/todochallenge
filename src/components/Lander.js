import { Wrapper, Block, Hidecompleted } from "./Lander-style";
import { useEffect, useState } from "react";
import List from "./List";
import testTasks from "../testTasks";
import Simpleform from "./Simpleform";
const Lander = () => {
  const [tasks, setTasks] = useState(testTasks);
  const [showAll, setShowall] = useState(true);

  const handleAddNewTask = (content) => {
    const newTask = {
      id: tasks.length,
      type: "Task",
      content: content,
      date: new Date().toISOString(),
      completed: false,
    };
    if (content) {
      setTasks(tasks.concat(newTask)); // Insert new task
    }
  };

  const handleTaskStatusChange = (task) => {
    task.completed = !task.completed;
    const tempTasks = tasks.slice(); // creates a copy of tasks
    tempTasks[tempTasks.indexOf(task)] = task; // Changes task status
    setTasks(tempTasks);
  };

  const handleHideCompleted = (e) => {
    setShowall(!showAll);
  };

  const taskList = showAll ? tasks : tasks.filter((task) => task.completed === false)

  return (
    <Wrapper>
      This is Lander
      <Block>
        <Simpleform
          innerText={""}
          placeholder={"Type Your To-Do task here"}
          buttonName={"Create"}
          inputValue={handleAddNewTask}
        />
      </Block>
      <Block>
        <List
          tasksList={taskList}
          onStatusChange={handleTaskStatusChange}
        />
        <Hidecompleted>
          
          Hide completed
          <input type="checkbox" onChange={handleHideCompleted}></input>
        </Hidecompleted>
      </Block>
    </Wrapper>
  );
};

export default Lander;
