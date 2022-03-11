import { TaskList } from "./List-style";
import Task from "./Task";

const List = (props) => {

  const handleStatusChange = (task) => {
    props.onStatusChange(task)
  }

  const handleContentChange = (task,newContent) => {
    props.onContentChange(task,newContent)
  }

  const handleOnDelete = (id) => {
    console.log("List",id)
    props.onDelete(id)
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
        onDelete={handleOnDelete}
         />
      ))}
    </TaskList>
  );
};

export default List;
