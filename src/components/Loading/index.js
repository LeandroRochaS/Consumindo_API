import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styled";

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <section className="section-carregamento">
        <div className="spinner" />
      </section>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
