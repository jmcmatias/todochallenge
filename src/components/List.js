import { TaskList, TitleStyle } from "./List-style";
import Task from "./Task";

const List = (props) => {
  const handleStatusChange = (task) => {
    props.onStatusChange(task);
  };

  const handleContentChange = (task, newContent) => {
    props.onContentChange(task, newContent);
  };

  const handleOnDelete = (id) => {
    console.log("List", id);
    props.onDelete(id);
  };

  return (
    <TaskList>
      <TitleStyle onClick={props.onSort}>
        <Sorted sorted = {props.sorted}/>
      </TitleStyle>
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

const Sorted = ({sorted}) => {
  if(sorted)
    return <div title="Sort alphabetically">Task</div>
  else return <div title="Sort by id">Task↓</div>  
}

export default List;
