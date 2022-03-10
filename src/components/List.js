import { TaskList } from "./List-style";
import Task from "./Task";

const List = (props) => {

  const handleStatusChange = (task) => {
    props.onStatusChange(task)
  }

  return (
    <TaskList>
      This is List
      {props.tasksList.map((task) => (
        <Task 
        key={task.id} 
        task={task}
        taskStatus={task.completed}
        onStatusChange={handleStatusChange}
         />
      ))}
    </TaskList>
  );
};

export default List;
