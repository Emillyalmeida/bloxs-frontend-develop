import styled from "styled-components";

export const DivHeader = styled.header`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.backgroundColor};

  h2 {
    font-weight: 700;
    color: ${(props) => props.theme.color};
    font-size: 0.9rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 15px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--gray-400);
      width: 30px;
      height: 30px;
      border-radius: 15%;
    }

    svg {
      color: var(--gray-600);
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
