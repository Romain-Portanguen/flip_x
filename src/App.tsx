import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/globals';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GameBoard } from './components/GameBoard';

const AppContainer = styled.div`
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
  position: relative;

  @media (max-width: 600px) {
    padding: 20px;
  }

  @media (min-width: 600px) {
    padding: 30px;
  }
`;

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <AppContainer>
      <Header />
      <GameBoard />
      <Footer />
    </AppContainer>
  </>
);

export default App;
