import styled from "styled-components";

const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
  background: green;
  border: solid;
  border-width: 1px;
  border-radius: 2px;
  padding: 1em 0em 1em 1em;
  list-style-type: none;
`;

const TaskStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 1.5em;
  padding: 0em 1em 0em 1em;
`;

const TaskStatus = styled.input`
  width: 2.5em;
  height: 2.5em;
`;
const Options = styled.div`
  margin-left: auto;
`;

const Link = styled.button`
  background: none;
  border: none;
  font-size: 0.7em;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

export { TaskStyle, Item, TaskStatus, Options, Link };
