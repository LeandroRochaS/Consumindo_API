import React from "react";
import { ErrorPage } from "./styled";

export default function Page404() {
  return (
    <>
      <ErrorPage>
        <h1> ERROR 404 </h1>
        <p> Está página não existe</p>
        <button>
          {" "}
          <a href="/">Voltar para Home</a>
        </button>
      </ErrorPage>
    </>
  );
}
