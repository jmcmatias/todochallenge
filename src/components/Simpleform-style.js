import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: row;
  padding: 0.5em;
`;

const Input = styled.input`
  background: #f5f7f6;
  border: none;
  width: 100%;
  &:focus{
    outline: none;
    box-shadow: inset 0px 0px 3px #5ca0f2;
    -webkit-box-shadow: inset 0px 0px 3px #5ca0f2;
    -moz-box-shadow: inset 0px 0px 3px #5ca0f2;
  }
`;

const Button = styled.button`
  padding: 0.5em;
  border: none;
  background-color: #5ca0f2;
  color:#000;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, #f5f7f6, #5ca0f2);
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
