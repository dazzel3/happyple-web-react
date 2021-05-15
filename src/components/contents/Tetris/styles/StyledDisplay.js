import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 3px solid #333;
  height: 8vh;
  width: 12vw;
  border-radius: 50px;
  color: ${props => (props.gameOver ? "red" : "#999")};
  background: #000;
  font-family: 'NeoDunggeunmo';
  font-size:1rem;
`;