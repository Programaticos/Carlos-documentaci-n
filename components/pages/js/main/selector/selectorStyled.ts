import styled from "styled-components";

const SelectorStyled = styled.div`
  height: 70vh;
  width: 20vw;
  border: 1px solid #f0db4f;
  border-radius: 5px;
  margin-right: 5px;
  overflow: scroll;
  overflow-x: hidden;
  transition: all 0.5s;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #cccccc;
  }
  &::-webkit-scrollbar-thumb {
    background: #f0db4f;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #f0db4f;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`;

export default SelectorStyled;
