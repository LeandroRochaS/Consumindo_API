import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  * {
    font-family: monospace;
  }

  h1 {
    font-size: 25px;
  }

  label {
    margin-top: 10px;
    color: rgba(black, 0.5);
    font-weight: 500;
    transform-origin: 0 0;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease;
    font-size: 18px;
  }

  input {
    width: 100%;
    border: 0;
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    color: black;
    cursor: pointer;
  }

  input:focus {
    transition: 1s all;
    border: 0.1rem solid rgba(black, 0.5);
    border-radius: 10px;
    padding: 10px;
  }

  button:hover {
    transform-style: all 1s;
    filter: brightness(75%);
  }
`;
