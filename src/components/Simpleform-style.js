import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: row;
  padding: 0.5em;
`;

const Input = styled.input`
  background: #fefe;
  border: thin;
  border-radius: 3px;
  width: 100%;
`;

const Button = styled.button`
  background: orange;
  border-radius: 5px;
  padding: 0.5em;
  margin-left: 0.2em;
`;

export { Input, FormStyle, Button };
