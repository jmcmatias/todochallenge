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

export { Wrapper, Block };
