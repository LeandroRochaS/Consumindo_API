import styled from "styled-components";
import { primaryColor } from "../../config/Colors";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${primaryColor};
  width: 100%;
  padding: 0 0 0 0;

  a {
    color: whitesmoke;
    margin: 20px;
    font-weight: bold;
  }
`;
