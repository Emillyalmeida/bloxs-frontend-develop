import styled from "styled-components";

export const SectionCards = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  width: 95%;
  background-color: var(--gray-50);

  h2 {
    color: var(--gray-900);
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

    svg {
      color: var(--gray-50);
      height: 100%;
      width: 10%;
      padding: 0 3px;
      transition: 0.3s;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: var(--gray-200);
        color: var(--gray-600);
      }
    }

    ul {
      display: flex;
      width: 90%;
      justify-content: space-between;
    }
  }
`;
