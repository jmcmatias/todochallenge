import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5em;
  max-width: 1024px;
  min-width: 50%;
  min-height: 640px;
  background-color: #e3efe8;
  background-image: linear-gradient(315deg, #e3efe8 0%, #96a7cf 74%);
  
`;

const Block = styled.div`
  padding: 0.5em;
  margin: 0 1em 0 1em;
`;

const Hidecompleted = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.1em;
  margin: 1em;
  margin-top:auto;
`;

const Dots = styled.div`
  padding: 0px;
  margin: 0px;
  margin-left: 0.5em;
  font-size: 1em;
`;

export { Wrapper, Block, Hidecompleted, Dots };
