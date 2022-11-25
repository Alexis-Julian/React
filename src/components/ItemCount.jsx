import React, { useState } from "react";
export default function ItemCount({ stock, initial }) {
  const [Boton, SetBoton] = useState(initial);
  function aritmetica(operador) {
    if (operador === "-" && Boton === 0) {
    } else if (Boton < stock || operador == "-") {
      operador === "+" ? SetBoton(Boton + 1) : SetBoton(Boton - 1);
    }
  }
  return (
    <>
      <span
        onClick={() => {
          aritmetica("+");
        }}
      >
        +
      </span>
      <button>Agregar{Boton}</button>
      <span
        onClick={() => {
          aritmetica("-");
        }}
      >
        -
      </span>
    </>
  );
}
