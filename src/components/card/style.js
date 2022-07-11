import styled from "styled-components";

export const LiCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 180px;
  height: 250px;
  justify-content: space-between;
  gap: 8px;

  img {
    width: 100%;
    border-radius: 6px;
  }

  h4 {
    color: var(--gray-800);
    font-size: 0.8rem;
  }

  span {
    color: var(--gray-600);
    font-size: 0.75rem;
  }
`;
