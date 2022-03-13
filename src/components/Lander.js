// Lander Component
import { Wrapper, Block, Hidecompleted, Dots } from "./Lander-style";
import { useState } from "react";
import List from "./List";
import Simpleform from "./Simpleform";
import Header from "./Header";
import { useTaskListContext } from "../providers/TasksProvider";

const Lander = () => {
  const { addNewTask } = useTaskListContext();

  //const [tasks, setTasks] = useState([]);


  const handleAddNewTask = (content) => {
    addNewTask(content);
  };

  /*
  


  const handleOnDelete = (id) => {
    const tempTasks = tasks.filter((task) => task.id != id); // creates a copy of tasks except the one with the id received
    setTasks(tempTasks);
  };

  // Hide Complete task Logic

  const handleHideCompleted = (e) => {
    setShowall(!showAll);
  };

  const taskList = showAll
    ? tasks
    : tasks.filter((task) => task.completed === false);

  // Sort Logic
  const handleSort = () => {
    setSorted(!sorted);
    if (sorted)
      setTasks(tasks.sort((a, b) => a.content.localeCompare(b.content)));
    else setTasks(tasks.sort((a, b) => a.id - b.id));
  };
*/
  // Render
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
    
          <List
          //tasksList={taskList}
          //onStatusChange={handleTaskStatusChange}
          //onContentChange={handleContentChange}
          //onDelete={handleOnDelete}
          //onSort={handleSort}
          //sorted={sorted}
          />
       
        <Dots></Dots>
      </Block>
      <Hidecompleted>
        Hide completed
        <input type="checkbox"></input>
      </Hidecompleted>
    </Wrapper>
  );
};

const TasksHidden = ({ tasks, showAll }) => {
  if (!showAll) {
    if (tasks.filter((task) => task.completed === true).length > 0) {
      const tasksCompleted = tasks.filter(
        (task) => task.completed === true
      ).length;
      return "•• " + tasksCompleted + " tasks completed ••";
    }
  }
  return "";
};

export default Lander;
