import styled from "styled-components";
import { color1 } from "../App-style";
const TaskList = styled.ul`
  padding: 0.5em;
  background: #e6f2ff;
`;

const TitleStyle = styled.button`
 font-size: 1.5em;
 background: none;
  border: none;
  &:hover {
    color: ${color1};
    cursor: pointer;
  }
`;
export { TaskList, TitleStyle };
