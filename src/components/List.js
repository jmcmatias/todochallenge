import { useTaskListContext } from "../providers/TasksProvider";
import { TaskList, TitleStyle, ListMap } from "./List-style";
import Task from "./Task";

const List = (props) => {
  const { tasksToShow, } = useTaskListContext();


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
        <Sorted sorted={props.sorted} />
      </TitleStyle>
      <ListMap>
        {tasksToShow.map((task) => (
          <Task
            key={task.id}
            task={task}
            taskStatus={task.completed}
            onStatusChange={handleStatusChange}
            onContentChange={handleContentChange}
            onDelete={handleOnDelete}
          />
        ))}
      </ListMap>
    </TaskList>
  );
};

const Sorted = ({ sorted }) => {
  if (sorted) return <div title="Sort alphabetically">Tasks</div>;
  else return <div title="Sort by id">Tasks ↓</div>;
};

export default List;
