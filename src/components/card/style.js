import styled from "styled-components";

export const LiCard = styled.li`
  width: 100%;
  height: 240px;

  @media (min-width: 769px) {
    width: 250px;
    height: 280px;
  }
  a {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    gap: 8px;
    align-items: center;

    img {
      width: 100%;
      height: auto;
      min-height: 115px;
      border-radius: 6px;
      @media (min-width: 769px) {
        height: 153px;
      }
    }

    h4 {
      color: ${(props) => props.theme.colorSecundary};
      font-size: 0.8rem;
    }

    span {
      color: var(--gray-600);
      font-size: 0.75rem;
      align-self: flex-start;
    }
  }
`;
