import styled from "styled-components";

const MiNavStyled = styled.nav`
  max-width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  border: 1px solid black;
  border-radius: 5px;
  :hover {
    height: 45px;
    transition: all 0.1s;
  }
`;

export default MiNavStyled;
