import { TaskList } from "./List-style";
import Task from "./Task";

const List = (props) => {
  return (
    <TaskList>
      This is List
      {props.tasksList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </TaskList>
  );
};

export default List;
