import styled from "styled-components";
import { primaryColor } from "../../config/Colors";

export const Nav = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${primaryColor};
  width: 100%;

  a {
    color: whitesmoke;
    margin: 0 0 0 20px;
    font-weight: bold;
  }
`;
