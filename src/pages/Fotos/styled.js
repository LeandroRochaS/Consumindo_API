import styled from "styled-components";
import * as colors from "../../config/Colors";

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    border: 5px dashed ${colors.primaryColor};
    border-radius: 50%;
    margin: 30px auto;
    overflow: hidden;
  }
  input {
    display: none;
  }
  img {
    width: 180px;
    height: 180px;
    50%;
  }
`;
