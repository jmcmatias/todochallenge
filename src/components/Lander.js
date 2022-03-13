// Lander Component
import { Wrapper, Block, Hidecompleted, Dots } from "./Lander-style";
import List from "./List";
import Simpleform from "./Simpleform";
import Header from "./Header";
import { useTaskListContext } from "../providers/TasksProvider";

const Lander = () => {
  const { addNewTask, hideCompleted } = useTaskListContext();

  const handleAddNewTask = (content) => {
    addNewTask(content);
  };

  const handleHideCompletedTasks = () => {
    hideCompleted();
  };

  return (
    <Wrapper>
      <Header />
      <Block>
        <Simpleform
          innerText={""}
          placeholder={"Type Your To-Do task here"}
          buttonName={"Create"}
          inputValue={handleAddNewTask}
        />
      </Block>
      <Block>
        <List/>
        <Dots>
          <TasksHidden/>
        </Dots>
      </Block>
      <Hidecompleted>
        Hide completed
        <input type="checkbox" onChange={handleHideCompletedTasks}></input>
      </Hidecompleted>
    </Wrapper>
  );
};

const TasksHidden = () => {
  const {taskList, showAll} = useTaskListContext()
  if (!showAll) {
    if (taskList.filter((task) => task.completed === true).length > 0) {
      const tasksCompleted = taskList.filter(
        (task) => task.completed === true
      ).length;
      return "•• " + tasksCompleted + " tasks completed ••";
    }
  }
  return "";
};

export default Lander;
