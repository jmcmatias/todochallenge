import { TaskStyle } from "./Task-style";

const Task = (props) => {
  return <TaskStyle>{props.task.content}</TaskStyle>;
};

export default Task;
