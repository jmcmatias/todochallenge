import styled from "styled-components";

const TaskList = styled.ul`
  border-radius: 10px;
  padding: 0.5em;
  margin: 0.5em;
  background blue;
`;

const TitleStyle = styled.button`
 font-size: 1.5em;
 background: none;
  border: none;
  &:hover {
    color: yellow;
    cursor: pointer;
`;
export { TaskList, TitleStyle };
