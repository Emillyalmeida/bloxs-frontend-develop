import styled from "styled-components";

export const SectionCards = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  width: 95%;
  background-color: ${(props) => props.theme.backgroundColor};

  h2 {
    color: ${(props) => props.theme.color};
    padding: 15px;
    border-bottom: 1px dotted var(--gray-400);
  }

  > div {
    width: 100%;
    padding: 20px 10px;
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    &:hover {
      svg {
        background-color: ${(props) => props.theme.secundaryBg};
        color: var(--gray-600);
      }
    }

    svg {
      color: ${(props) => props.theme.backgroundColor};
      height: 100%;
      width: 22px;
      padding: 0 3px;
      transition: 0.3s;
      border-radius: 5px;
      cursor: pointer;

      @media (min-width: 769px) {
        width: 30px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      width: 90%;
      justify-content: space-between;
      @media (min-width: 768px) {
        flex-direction: row;
      }
    }
  }
`;
