import {
  TaskStyle,
  Contentwrapper,
  Item,
  TaskStatus,
  Options,
  Link,
} from "./Task-style";
import Simpleform from "./Simpleform";
import { useState } from "react";
import { useTaskListContext } from "../providers/TasksProvider";

const Task = (props) => {
  const { taskStatusChange, taskContentChange, deleteTask } = useTaskListContext()
  const [editing, setEditing] = useState(false);


  const handleStatusChange = () => {
    taskStatusChange(props.task);
  };

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleDelete = () => {
    deleteTask(props.task.id);
  };

  const handleSubmit = (newContent) => {
    taskContentChange(props.task, newContent);
    setEditing(!editing);
  };

  return (
    <Item>
      <TaskStyle>
        <Checkbox taskStatus={props.taskStatus} onChange={handleStatusChange} />
        <Contentwrapper>
          <Content
            editing={editing}
            task={props.task}
            inputValue={handleSubmit}
          />
        </Contentwrapper>
        <Options>
          <Option optionName={"Edit"} onClick={handleEdit} />
          |
          <Option optionName={"Delete"} onClick={handleDelete} />
        </Options>
      </TaskStyle>
    </Item>
  );
};

const Checkbox = (props) => {
  return (
    <TaskStatus
      type="checkbox"
      checked={props.taskStatus}
      onChange={props.onChange}
    ></TaskStatus>
  );
};

const Option = (props) => {
  return <Link onClick={props.onClick}>{props.optionName}</Link>;
};
const Content = (props) => {
  if (!props.editing) {
    return <>{props.task.content}</>;
  } else {
    return (
      <Simpleform
        innerText={props.task.content}
        buttonName={"save"}
        inputValue={props.inputValue}
      />
    );
  }
};

export default Task;
