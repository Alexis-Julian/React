import React from 'react';

import styled from 'styled-components';
import './App.css';

import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <DivContainer>
      <Navbar />
      <ItemListContainer greeting={'Hola como estas?'} />
    </DivContainer>
  );
}

export default App;

const DivContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;
