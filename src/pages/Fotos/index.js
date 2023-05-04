import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { get } from "loadsh";
import PropTypes from "prop-types";

import { Container } from "../../styles/GlobalStyles";
import Loading from "../../components/Loading";
import { Form } from "./styled";

import axios from "../../services/axios";
import history from "../../services/history";
import sleep from "../../config/sleep";
import * as actions from "../../store/modules/auth/actions";

export default function Fotos({ match }) {
  const dispatch = useDispatch();
  const id = get(match, "params.id", "");

  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);

        setFoto(get(data, "Fotos[0].url", ""));
        console.log(data.Fotos[0].url);
        setIsLoading(false);
      } catch (err) {
        toast.error("Error ao obter imagem");
        setIsLoading(false);
        history.push("/");
        await sleep(1000);
        history.go(0);
      }
    };

    getData();
  }, [id]);

  const handleChange = async (e) => {
    const foto = e.target.files[0];
    const fotoURL = URL.createObjectURL(foto);

    setFoto(fotoURL);

    const formData = new FormData();
    formData.append("aluno_id", id);
    formData.append("foto", foto);

    try {
      setIsLoading(true);
      await axios.post(`/fotos/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Foto enviada com sucessso");
      setIsLoading(false);
    } catch (err) {
      const status = get(err, "response.status", "");

      toast.error("Error ao enviar foto");
      console.log(status);
      if (status == 413) toast.error("Arquivo muito grande");

      if (status == 401) dispatch(actions.loginFailure);

      setIsLoading(false);
    }
  };

  return (
    <>
      <Container>
        <ToastContainer />
        <Loading isLoading={isLoading} />

        <h1 style={{ textAlign: "center" }}> Fotos </h1>

        <Form>
          <label htmlFor="foto">
            {foto ? (
              <img crossOrigin="anonymous" src={foto} alt="Foto" />
            ) : (
              "Selecionar"
            )}
            <input type="file" id="foto" onChange={handleChange}></input>
          </label>
        </Form>
      </Container>
    </>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
