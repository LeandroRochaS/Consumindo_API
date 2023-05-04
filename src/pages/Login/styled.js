import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  * {
    font-family: monospace;
  }

  h1 {
    font-size: 25px;
  }

  input {
    width: 100%;
    border: 0;
    height: 40px;
    font-size: 15px;
    font-weight: 400;
    color: black;
    cursor: pointer;
    margin-top: 10px;
  }

  input:focus {
    transition: 1s all;
    border: 0.1rem solid rgba(black, 0.5);
    border-radius: 10px;
    padding: 10px;
  }
  button {
    margin-top: 15px;
  }

  button:hover {
    transform-style: all 1s;
    filter: brightness(75%);
  }
`;
