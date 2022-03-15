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
            taskStatus={task.completed} />
        ))}
      </ListMap>
    </TaskList>
  );
};

const Sorted = ({ sorted }) => {
  switch (sorted) {
    case 0:
      return <div title="Sort alphabetically A-Z">Tasks</div>;
    case 1:
      return <div title="Sort alphabetically Z-A">Tasks ↓</div>;
    case 2:
      return <div title="Sort by Date Created">Tasks ↑</div>;
    default:
      return <div title="Sort alphabetically A-Z">Tasks</div>;

  }
};

export default List;
