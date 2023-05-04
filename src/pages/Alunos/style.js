import styled from "styled-components";
import { Link } from "react-router-dom";

export const AlunoContainer = styled.div`
  margin-top: 20px;

  h1 {
    font-size: 25px;
  }

  div {
    font-family: monospace;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    font-size: 15px;
  }

  div + div {
    border-top: 1px solid #4f4f4f;
  }
  .email-aluno {
    max-width: 200px;
    padding-right: 65px;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
export const Header = styled.div`
  font-size: 20px;
`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 10px 0px 10px 0;
`;
