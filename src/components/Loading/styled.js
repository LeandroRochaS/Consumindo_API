import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;

  .section-carregamento {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinner {
    width: 40px;

    height: 40px;

    border: 4px solid rgba(255, 255, 255, 0.2);

    border-top-color: white;

    border-radius: 50%;

    animation: ${spin} 0.8s ease-in-out infinite;

    z-index: 2;
  }
`;
