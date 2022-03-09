import { Wrapper } from "./Lander-style";
import { useState } from "react";
import List from "./List";
import testTasks from "../testTasks";
import Simpleform from "./Simpleform";
const Lander = () => {
  const [tasks, setTasks] = useState(testTasks);

  const addNewTask = (content) => {
    console.log("Value from Simpleform:", content);

    const newTask = {
      id: tasks.length,
      type: "Task",
      content: content,
      date: new Date().toISOString(),
      completed: false,
    };

    setTasks(tasks.concat(newTask));
  };

  return (
    <Wrapper>
      This is Lander
      <Simpleform
        innerText={""}
        placeholder={"Type Your To-Do task here"}
        buttonName={"Create"}
        inputValue={addNewTask}
      />
      <List tasksList={tasks} />
    </Wrapper>
  );
};

export default Lander;
