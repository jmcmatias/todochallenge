import styled from "styled-components";
import { color1 } from "../App-style";

const TaskList = styled.ul`
  padding: 0.5em;
  background: #e6f2ff;
`;

const ListMap = styled.div`
  padding:1em;
  height:fit-content;
  max-height:600px;
  overflow:auto;
  ::-webkit-scrollbar {
    display: none;
}
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

export { TaskList, TitleStyle, ListMap };
