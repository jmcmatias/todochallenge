import styled from "styled-components";

const TaskList = styled.ul`
  padding: 0.5em;
  margin: 0.5em;
  background: #e6f2ff;
`;

const TitleStyle = styled.button`
 font-size: 1.5em;
 background: none;
  border: none;
  &:hover {
    color: #5ca0f2;
    cursor: pointer;
  }
`;
export { TaskList, TitleStyle };
