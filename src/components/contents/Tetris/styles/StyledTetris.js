import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  width: 80vw;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  outline: none;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2vw;
  margin: 0 auto;
  width: 50vw;
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 3vw;
  }
`;