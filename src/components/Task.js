import { TaskStyle, Item, TaskStatus } from "./Task-style";

const Task = (props) => {

  const handleStatusChange = () => {
    props.onStatusChange(props.task)
  }

  return (
    <Item>
      <Checkbox taskStatus={props.taskStatus} onChange={handleStatusChange}></Checkbox>
     <TaskStyle>{props.task.content}</TaskStyle>
    </Item>
    )
};

const Checkbox = (props) => {
  return(
    <TaskStatus type="checkbox" checked={props.taskStatus} onChange={props.onChange}></TaskStatus>
  )
}

export default Task;
