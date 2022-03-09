import { Wrapper, Block } from "./Lander-style";
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
    if (content) setTasks(tasks.concat(newTask));
  };

  return (
    <Wrapper>
      This is Lander
      <Block>
        <Simpleform
          innerText={""}
          placeholder={"Type Your To-Do task here"}
          buttonName={"Create"}
          inputValue={addNewTask}
        />
      </Block>
      <Block>
      <List tasksList={tasks} />
      </Block>
    </Wrapper>
  );
};

export default Lander;
