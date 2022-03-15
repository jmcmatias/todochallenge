import styled from "styled-components";
import { color1 } from "../App-style";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Applogo = styled.img`
  width: 150px;
  height: auto;
  filter: drop-shadow(2px 2px 2px ${color1});
  -webkit-filter: drop-shadow(2px 2px 2px ${color1});
`;
export { Applogo, HeaderStyle };
