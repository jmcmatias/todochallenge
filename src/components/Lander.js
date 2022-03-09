import { Wrapper } from "./Lander-style";
import { useState } from "react";
import List from "./List";
import testTasks from "../testTasks";
import Simpleform from "./Simpleform";
const Lander = () => {
  const [tasks, setTasks] = useState(testTasks);

  return (
    <Wrapper>
      This is Lander
      <Simpleform/>
      <List tasksList={tasks} />
    </Wrapper>
  );
};

export default Lander;
