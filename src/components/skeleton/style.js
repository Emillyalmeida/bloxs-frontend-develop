import styled, { keyframes } from "styled-components";

const skeletonLoad = keyframes`
  0% {
    background-color: var(--gray-200);
  }
 
  100%{
    background-color: var(--gray-400)
  }
`;
export const DivSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  height: 220px;
  padding: 10px;

  @media (min-width: 769px) {
    width: 250px;
    height: 280px;
  }

  .Skeleton {
    animation: ${skeletonLoad} 1s linear infinite alternate;
  }

  .div-img {
    width: 100%;
    height: 90px;
    border-radius: 6px;
    @media (min-width: 769px) {
      height: 150px;
    }
  }

  .div-title {
    width: 100%;
    height: 14px;
    border-radius: 5px;
    margin-bottom: 3px;
  }

  .div-span {
    width: 60%;
    height: 10px;
    border-radius: 5px;
  }
`;
