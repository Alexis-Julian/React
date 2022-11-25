import React, { useState } from "react";
import styled from "styled-components";
export default function ItemCount({ stock, initial }) {
  const [Boton, SetBoton] = useState(initial);
  function aritmetica(operador) {
    if (operador === "-" && Boton === 0) {
    } else if (Boton < stock || operador == "-") {
      operador === "+" ? SetBoton(Boton + 1) : SetBoton(Boton - 1);
    }
  }
  return (
    <Itembutton>
      <span
        onClick={() => {
          aritmetica("+");
        }}
      >
        +
      </span>
      <button>Agregar al carrito {Boton}</button>
      <span
        onClick={() => {
          aritmetica("-");
        }}
      >
        -
      </span>
    </Itembutton>
  );
}
const Itembutton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1em;
  span {
    border: 1px solid black;
    padding: 2px 10px;
    border-radius: 3px;
    cursor: pointer;
  }
`;
