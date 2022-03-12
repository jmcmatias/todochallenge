import styled from "styled-components";
import { keyframes } from "styled-components";
import { color1, insetShadow } from "../App-style";

const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.3em;
  padding: 0.4em 0em 0.4em 0.4em;
  list-style-type: none;
  background-color: #c3cbdc;
  background-image: linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%);
  box-shadow: 2px 2px 3px 0px gray;
`;

const TaskStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 1em;
`;

const TaskStatus = styled.input`
  width: 2.5em;
  height: 2.5em;
  &:hover {
    box-shadow: ${insetShadow};
    -webkit-box-shadow: ${insetShadow};
    -moz-box-shadow: ${insetShadow};
    cursor: pointer;
  }
`;
const Contentwrapper=styled.div`
padding-left:0.3em;
width:65%;
word-wrap: break-word;
`;

const Options = styled.div`
  display:flex;
  margin-left: auto;
  
`;

const Link = styled.button`
  background: none;
  border: none;
  font-size: 1em;
  &:hover {
    color: ${color1};
    cursor: pointer;
  }
`;

export { TaskStyle, Item, TaskStatus,Contentwrapper, Options, Link };
