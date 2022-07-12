import styled from "styled-components";

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: auto;
  background-color: ${(props) => props.theme.secundaryBg};
  gap: 30px;
`;
