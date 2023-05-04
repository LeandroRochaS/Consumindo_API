import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get } from "loadsh";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from "react-icons/fa";

import { AlunoContainer, ProfilePicture, Header, NovoAluno } from "./style";
import { Container } from "../../styles/GlobalStyles";
import axios from "../../services/axios";
//import history from "../../services/history";

import Loading from "../../components/Loading";
import { ToastContainer, toast } from "react-toastify";

export default function Alunos() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [alunos, setAlunos] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setisLoading(true);
      const response = await axios.get("/alunos");
      setAlunos(response.data);
      setisLoading(false);
    }

    getData();
  }, []);

  function handleDeleteAsk(e) {
    e.preventDefault();

    if (!isLoggedIn) return toast.warn("Você precisa fazer login");

    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute("display", "block");
    e.currentTarget.remove();
  }
  async function handleDelete(e, id, index) {
    e.persist();
    try {
      if (!isLoggedIn) return;
      setisLoading(true);
      const newAlunos = [...alunos];
      newAlunos.splice(index, 1);
      setAlunos(newAlunos);

      await axios.delete(`/alunos/${id}`);
      setisLoading(false);
    } catch (e) {
      toast.error("Ocorreu um erro ao excluir aluno");
    }
  }

  return (
    <>
      <Container>
        <ToastContainer />

        <Loading isLoading={isLoading} />
        <Header>
          <h1> Alunos </h1>

          <NovoAluno to="/aluno/">Novo Aluno</NovoAluno>
        </Header>

        <AlunoContainer>
          {alunos.map((aluno, index) => (
            <div key={String(aluno.id)}>
              <ProfilePicture>
                {get(aluno, "Fotos[0].url", false) ? (
                  <img crossOrigin="" src={aluno.Fotos[0].url} alt="Fotos" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>

              <span>{aluno.nome}</span>
              <span className="email-aluno">{aluno.email}</span>

              <Link to={`/aluno/${aluno.id}/edit`}>
                <FaEdit size={16} />
              </Link>
              <Link
                onClick={handleDeleteAsk}
                to={`/aluno/${aluno.id}/delete`}
                data-link={`/alunos/${aluno.id}`}
              >
                <FaWindowClose size={16} />
              </Link>

              <FaExclamation
                size={16}
                display="none"
                cursor="pointer"
                onClick={(e) => handleDelete(e, aluno.id, index)}
              />
            </div>
          ))}
        </AlunoContainer>
      </Container>
    </>
  );
}
