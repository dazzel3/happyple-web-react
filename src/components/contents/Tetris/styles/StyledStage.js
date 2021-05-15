import styled from "styled-components";
import bgImage from '../../../../assets/tetris-bg.png';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(20vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 20vw;
  background: url(${bgImage}#000);
  background-size: cover;
`;