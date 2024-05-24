import styled from "styled-components";

const StyledDiv = styled.div<{ selected: boolean }>`
  margin: 5px;
  border-radius: 3px;
  height: 20px;
  padding-top: 10px;
  align-items: center;
  display: flex;
  padding-left: 10px;
  background-color: #f0db4f;
  color: #323330;
  cursor: pointer;
  &:hover {
    background-color: #f0db5f;
    color: white;
  }
  transition: all 0.5s;
  ${(props) => props.selected && "Background: #F0DB4F"}
`;

export default StyledDiv;
