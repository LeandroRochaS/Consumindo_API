import styled from "styled-components";

export const ErrorPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;

  * {
    color: white;
    margin-top: 10px;
  }

  h1 {
    font-size: 100px;
    font-weight: 700;
  }

  p {
    font-size: 30px;
  }
`;
