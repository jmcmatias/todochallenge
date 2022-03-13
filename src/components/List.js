import { useTaskListContext } from "../providers/TasksProvider";
import { TaskList, TitleStyle, ListMap } from "./List-style";
import Task from "./Task";

const List = () => {
  const { tasksToShow, alphaSort, sorted } = useTaskListContext();

  return (
    <TaskList>
      <TitleStyle onClick={alphaSort}>
        <Sorted sorted={sorted} />
      </TitleStyle>
      <ListMap>
        {tasksToShow.map((task) => (
          <Task
            key={task.id}
            task={task}
            taskStatus={task.completed}
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
