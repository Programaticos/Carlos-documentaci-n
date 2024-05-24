import styled from "styled-components";

export const FirstDivStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 10px 15px 5px rgba(0, 0, 0, 0.17);
`;

export const SecondDivStyled = styled.div`
  background: white;
  width: 70vw;
  height: 70vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #323330;
  padding: 50px;
  box-shadow: 0px 4px 15px 4px #000000;
`;
