import { TaskStyle, Item, TaskStatus, Options, Link } from "./Task-style";
import Simpleform from "./Simpleform";
import { useState } from "react";

const Task = (props) => {
 const [editing,setEditing]=useState(false)

  const handleStatusChange = () => {
    props.onStatusChange(props.task);
  };

const handleEdit = () => {
  setEditing(!editing)
}

const handleSubmit = (newContent) => {
  console.log("New Content",newContent)
  setEditing(!editing)
}


  return (
    <Item>
      <Checkbox
        taskStatus={props.taskStatus}
        onChange={handleStatusChange}
      ></Checkbox>
      <TaskStyle>
        <Content editing={editing} task={props.task} inputValue={handleSubmit}/>  
        <Options>
          <Option optionName={"Edit"} onClick={handleEdit}/>
          |
          <Option optionName={"Delete"} />
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
  if(!props.editing){
    return <>{props.task.content}</>  
  } else {
    return(
      <Simpleform innerText={props.task.content} buttonName={"save"} inputValue={props.inputValue}/>
    )
  }
}

export default Task;

