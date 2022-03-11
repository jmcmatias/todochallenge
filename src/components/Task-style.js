import styled from "styled-components";

const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;

  margin-top: 0.3em;
  padding: 1em 0em 1em 1em;
  list-style-type: none;
  background-color: #c3cbdc;
  background-image: linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%);
  box-shadow: 2px 2px 3px 0px gray;
`;

const TaskStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 1.5em;
  padding: 0em 0.5em 0em 0.5em;
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
    color: #5ca0f2;
    cursor: pointer;
  }
`;

export { TaskStyle, Item, TaskStatus, Options, Link };
