import styled from "styled-components";

export const TituloH2 = styled.h2`
  font-size: 54px;
  color: #323330;
  background-color: #f0db4f;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px;
  bottom: 32px;
  margin-bottom: 0;
`;

export const DivContainer = styled.div`
  margin: 48px;
  border: 2px solid #f0db4f;
  border-radius: 0 0 5px 5px;
  margin-top: 0;
  height: 220px;
  position: relative;
  top: -2px;
  color: #323330;
  padding: 20px;
`;

export const OtroDivStyled = styled.div`
  button {
    background-color: #f0db4f;
    color: #323330;
    font-family: inherit;
    border: none;
    box-shadow: none;
    width: 120px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #f0db4f;
      color: white;
    }
  }
`;

export const OtroDivMas = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
