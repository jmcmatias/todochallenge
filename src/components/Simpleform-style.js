import styled from "styled-components";
import { color1, color2, insetShadow } from "../App-style";

const FormStyle = styled.form`
  display: flex;
  flex-direction: row;
  margin: 1em 0em 1em 0em;
`;

const Input = styled.input`
  background: ${color2};
  border: none;
  width: 100%;
  padding: 5px;
  font-size:1em;
  &:focus {
    outline: none;
    box-shadow: ${insetShadow};
    -webkit-box-shadow: ${insetShadow};
    -moz-box-shadow: ${insetShadow};
  }
`;

const Button = styled.button`
  padding: 0.5em;
  border: none;
  background-color: ${color1};
  color:#000;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, ${color2}, ${color1});
    background-size: 400% 400%;

    -webkit-animation: buttonHover 3s ease infinite;
    -moz-animation: buttonHover 3s ease infinite;
    animation: buttonHover 3s ease infinite;
  }

  @-webkit-keyframes buttonHover {
    100%{background-position:0% 50%}
    50%{background-position:100% 50%}
    0%{background-position:0% 50%}
  } 
  @-moz-keyframes buttonHover {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @keyframes buttonHover {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
   
  }
`;

export { Input, FormStyle, Button };
