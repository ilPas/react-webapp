import React from "react";
import PropTypes from "prop-types";

//Componente senza stato
function FiglioStock(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <small>{props.eta}</small>
    </div>
  );
}

export default FiglioStock;

FiglioStock.propTypes = {
  nome: PropTypes.string,
  eta: PropTypes.number
};
