import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { get } from "loadsh";
import { isEmail, isInt, isFloat } from "validator";
import axios from "../../services/axios";
import history from "../../services/history";
import { useDispatch } from "react-redux";
import { FaUserCircle, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container } from "../../styles/GlobalStyles";
import { toast, ToastContainer } from "react-toastify";
import { Form } from "../Register/style";
import { SpaceButton, ProfilePicture, Title } from "./style";
import Loading from "../../components/Loading";
import * as actions from "../../store/modules/auth/actions";
import sleep from "../../config/sleep";

export default function Aluno({ match }) {
  const dispatch = useDispatch();
  const id = get(match, "params.id", "");

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [foto, setFoto] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, "Fotos[0].url", "");

        setFoto(Foto);

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);

        const status = get(err, "response.status", 0);
        const errors = get(err, "response.data.errors", []);

        if (status == 400) errors.map((error) => toast.error(error));
        history.push("/");
        history.go(0);
      }
    }

    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error("Nome deve ter entre 3 e 255 caracteres");
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      formErrors = true;
      toast.error("Sobrenome deve ter entre 3 e 255 caracteres");
    }

    if (!isEmail(email)) {
      // eslint-disable-next-line no-unused-vars
      formErrors = true;
      toast.error("E-mail inválido");
    }
    if (!isInt(String(idade))) {
      formErrors = true;
      toast.error("Idade inválida");
    }

    if (!isFloat(String(peso)) && !isInt(String(peso))) {
      // eslint-disable-next-line no-unused-vars
      formErrors = true;
      toast.error("Peso inválido");
    }
    if (!isFloat(String(altura)) && !isInt(String(altura))) {
      // eslint-disable-next-line no-unused-vars
      formErrors = true;
      toast.error("Altura inválida");
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });

        toast.success("Aluno(a) editado(a) com sucesso");
        await sleep(2000);

        history.push("/");
        history.go(0);
      } else {
        setIsLoading(true);

        await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success("Aluno(a) criado(a) com sucesso");
        await sleep(2000);

        history.push("/");
        history.go(0);
      }

      setIsLoading(false);
    } catch (err) {
      const status = get(err, "response.status", "");
      const data = get(err, "response.data", {});
      const errors = get(data, "errors", []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error("Error Desconhecido");
      }

      if (status == 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
        <Title>
          <h1>{id ? "Editar Aluno" : "Novo Aluno"} </h1>
        </Title>

        {id && (
          <ProfilePicture>
            {foto ? (
              <img crossOrigin="anonymous" src={foto} alt={nome} />
            ) : (
              <FaUserCircle size={180} />
            )}
            <Link to={`/fotos/${id}`}>
              <FaEdit size={24} />
            </Link>
          </ProfilePicture>
        )}
        {console.log(foto)}

        <ToastContainer />
        <Form onSubmit={handleSubmit}>
          <label htmlFor="nome">
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
            />
          </label>
          <label htmlFor="sobrenome">
            Sobrenome:
            <input
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              placeholder="Sobrenome"
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
          </label>
          <label htmlFor="idade">
            Idade:
            <input
              type="number"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              placeholder="Idade"
            />
          </label>
          <label htmlFor="peso">
            Peso:
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Peso"
            />
          </label>
          <label htmlFor="altura">
            Altura:
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Altura"
            />
          </label>
          <SpaceButton>
            <button type="submit">{id ? "Editar" : "Criar Aluno"}</button>
          </SpaceButton>
        </Form>
      </Container>
    </>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
