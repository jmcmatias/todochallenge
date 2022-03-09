import { Wrapper } from "./Lander-style";
import { useState } from "react";
import List from "./List";
import testTasks from "../testTasks";
import Simpleform from "./Simpleform";
const Lander = () => {
  const [tasks, setTasks] = useState(testTasks);

  const valueReceived = (value) => {
      console.log("Value from Simpleform:",value)
  }

  return (
    <Wrapper>
      This is Lander
      <Simpleform
        placeholder={"Type Your To-Do task here"}
        buttonName="Create"
        inputValue={valueReceived}
      />
      <List tasksList={tasks} />
    </Wrapper>
  );
};

export default Lander;
