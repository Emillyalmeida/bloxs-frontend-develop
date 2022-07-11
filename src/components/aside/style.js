import styled from "styled-components";

export const Menu = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100vh;
  background-color: var(--gray-800);
  color: var(--gray-400);

  h1 {
    font-size: 1rem;
    font-weight: 600;
    padding: 10px 0;
    background-color: var(--gray-900);
    width: 100%;
    text-align: center;
    b {
      font-weight: 700;
      color: var(--gray-50);
    }
  }

  div {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;
    padding: 3px;
    transition: 0.3s;

    h3 {
      font-size: 0.8rem;
      font-weight: 400;
    }
    svg {
      color: var(--purple);
    }

    &:hover {
      background-color: var(--gray-900);
      color: var(--gray-50);
      svg {
        color: var(--blue);
      }
    }
  }

  > div {
    padding: 10px;
  }

  section {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 8px;
    width: 100%;

    h2 {
      text-transform: uppercase;
      font-size: 0.9rem;
      padding-bottom: 10px;
      font-weight: 600;
    }
  }
  button {
    background-color: var(--blue);
    color: var(--gray-50);
    border: none;
    border-radius: 5px;
    width: 80%;
    height: 40px;
    font-weight: 700;
  }
`;
