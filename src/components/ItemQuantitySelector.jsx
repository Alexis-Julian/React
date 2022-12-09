import React, { useState } from "react";
import styled from "styled-components";
function ItemQuantitySelector() {
  const [ActiveQuantity, SetActiveQuantity] = useState(false);
  const [CantProduct, SetCantProduct] = useState(1);
  const EventClickCount = (e) => {
    if (e.target.value < 5 && e.target.value) {
      SetCantProduct(e.target.value);
      SetActiveQuantity(!ActiveQuantity);
    }
  };
  const HandleKeyPress = (e) => {
    if (e.key == "Enter") {
      SetCantProduct(e.target.value);
      if (!e.target.value) {
        SetCantProduct(1);
      }
      SetActiveQuantity(!ActiveQuantity);
    }
  };
  console.log(CantProduct);
  return (
    <>
      <button onClick={() => SetActiveQuantity(!ActiveQuantity)}>
        Cantidad ({CantProduct})
      </button>
      <ContItemQuantitySelector>
        <div
          className={
            ActiveQuantity ? "ContInputsCounts Active" : "ContInputsCounts"
          }
        >
          <ul onClick={(e) => EventClickCount(e)}>
            <li>
              <input type="text" value={1} disabled />
            </li>
            <li>
              <input type="text" value={2} disabled />
            </li>
            <li>
              <input type="text" value={3} disabled />
            </li>
            <li>
              <input className="" type="text" value={4} disabled />
            </li>
            <li onKeyPress={(e) => HandleKeyPress(e)}>
              <input id="Count" type="number" placeholder="Ingrese cantidad" />
            </li>
          </ul>
        </div>
      </ContItemQuantitySelector>
    </>
  );
}

const ContItemQuantitySelector = styled.div`
  position: absolute;
  height: 30%;
  width: 100%;
  bottom: 0;
  left: 0;
  visibility: collapse;
  overflow: hidden;
  .ContInputsCounts {
    background-color: cyan;
    visibility: visible;
    transform: translateY(300px);
    transition: 300ms;
    height: 100%;
    ul {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      background: white;
      li {
        flex-grow: 1;
        list-style: none;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #48fafa;
        input {
          width: 100%;
          height: 100%;
          display: flex;
          text-align: center;
          border: none;
          background-color: white;
        }
      }
    }
  }
  .Active {
    transform: translateY(0);
    transition: 300ms;
  }
`;
export default ItemQuantitySelector;
