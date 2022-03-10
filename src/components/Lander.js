import { Wrapper, Block } from "./Lander-style";
import { useState } from "react";
import List from "./List";
import testTasks from "../testTasks";
import Simpleform from "./Simpleform";
const Lander = () => {
  const [tasks, setTasks] = useState(testTasks);

  const handleAddNewTask = (content) => {
    //console.log("Value from Simpleform:", content);

    const newTask = {
      id: tasks.length,
      type: "Task",
      content: content,
      date: new Date().toISOString(),
      completed: false,
    };
    if (content) setTasks(tasks.concat(newTask));   // Insert new stask
  };

  const handleTaskStatusChange = (task) =>{
    task.completed=!task.completed
    const tempTasks = tasks.slice()                 // creates a copy of tasks
    tempTasks[tempTasks.indexOf(task)]=task         // Changes task status
    setTasks(tempTasks)
  }

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
        <List tasksList={tasks} onStatusChange={handleTaskStatusChange}/>
      </Block>
    </Wrapper>
  );
};

export default Lander;
