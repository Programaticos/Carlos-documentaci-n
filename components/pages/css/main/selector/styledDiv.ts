import styled from "styled-components";

const StyledDiv = styled.div<{ selected: boolean }>`
  margin: 5px;
  border-radius: 3px;
  height: 20px;
  padding-top: 10px;
  align-items: center;
  display: flex;
  padding-left: 10px;
  background-color: green;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #469133;
    color: aliceblue;
  }
  transition: all 0.5s;
  ${(props) => props.selected && "Background: #469133"}
`;

export default StyledDiv;
