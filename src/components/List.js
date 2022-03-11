import { TaskList } from "./List-style";
import Task from "./Task";

const List = (props) => {

  const handleStatusChange = (task) => {
    props.onStatusChange(task)
  }

  const handleContentChange = (task,newContent) => {
    props.onContentChange(task,newContent)
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
        onContentChange={handleContentChange}
         />
      ))}
    </TaskList>
  );
};

export default List;
