import React from "react";
import { Title, Paragrafo } from "./style.js";
import GlobalStyles, { Container } from "../../styles/GlobalStyles";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

export default function Login() {
  //  eslint-disable-next-line no-unused-vars
  let toastId = null; // Variável para armazenar o id do toast

  // Função para mostrar a mensagem de sucesso com id personalizado
  const showSuccessToast = () => {
    toastId = toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "success-toast", // Id personalizado para mensagens de sucesso
    });
  };

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: "BOTAO_CLICADO",
    });
  }

  const dispatch = useDispatch();

  return (
    <>
      <ToastContainer />
      {showSuccessToast()}
      <Container>
        <Title isRed={true}>
          <p> Login </p>
          <small>Oie</small>
        </Title>
        <Paragrafo>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            non temporibus repellat? Atque iste aut dolores tempore. Suscipit,
            sint dolor hic mollitia molestiae nobis. Deleniti necessitatibus
            praesentium sed dolore magni.
          </p>
        </Paragrafo>
        <a href=""> Oie </a>
        <button type="button" onClick={handleClick}>
          {" "}
          Send{" "}
        </button>
        <GlobalStyles />
      </Container>
    </>
  );
}
