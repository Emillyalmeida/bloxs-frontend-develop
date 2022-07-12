import styled from "styled-components";

export const Menu = styled.aside`
  width: 115px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  background-color: var(--gray-800);
  color: var(--gray-400);
  @media (min-width: 768px) {
    width: 200px;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 1rem;
    font-weight: 400;
    padding: 10px 0;
    height: 8vh;
    background-color: var(--gray-900);
    width: 100%;
    text-align: center;
    b {
      font-weight: 700;
      color: var(--gray-50);
      padding-right: 5px;
    }
  }

  div {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;
    padding: 3px;
    cursor: pointer;
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
      font-size: 0.7rem;
      padding-bottom: 10px;
      font-weight: 500;
      @media (min-width: 768px) {
        font-size: 0.8rem;
        font-weight: 600;
      }
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
    margin-top: 30px;
    transition: 0.3s;

    &:hover {
      background-color: var(--purple);
    }
  }
`;
