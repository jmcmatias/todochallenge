import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  padding: 0.5em;
  max-width: 1024px;
  min-width: 480px;
  min-height: 640px;
  background: orange;
`;

const Block = styled.div`
  padding: 0.5em;
  margin: 0 1em 0 1em;
`;

const Hidecompleted = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.1em;
`;

const Dots = styled.div`
  padding: 0px;
  margin: 0px;
  margin-left: 0.5em;
  font-size: 1.5em;
`;

export { Wrapper, Block, Hidecompleted, Dots };
