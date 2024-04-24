import styled from "styled-components";

const MiNavStyled = styled.nav`
  max-width: 100vw;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  border-radius: 5px;
  background-color: green;
  box-shadow: 5px 10px 15px 5px rgba(0, 0, 0, 0.17);
  :hover {
    height: 48px;
    width: 48px;
  }
  transition: all 0.5s;
`;

export default MiNavStyled;
