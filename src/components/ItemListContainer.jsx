import React from "react";
import styled from "styled-components";
export default function ItemListContainer({ greeting }) {
  return (
    <Main>
      <div>{greeting}</div>
    </Main>
  );
}

const Main = styled.main`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;
