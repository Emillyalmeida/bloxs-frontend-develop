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

    ul {
      display: flex;
      width: 90%;
      justify-content: space-between;
    }
  }
`;
