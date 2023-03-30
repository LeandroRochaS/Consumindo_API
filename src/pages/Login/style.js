import styled from "styled-components";

export const Title = styled.p`
  * {
    margin: 0;
    padding-left: 10px;
  }
  color: ${(props) => (props.isRed ? "red" : "blue")};
  font-size: 50px;

  small {
    font-size: 25px;
  }
`;

export const Paragrafo = styled.p`
  color: blue;
`;
