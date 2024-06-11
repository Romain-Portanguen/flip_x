import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/globals';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GameBoard } from './components/GameBoard';
import { UnsupportedViewport } from './components/UnsupportedViewport';
import { useViewport } from './hooks/use-viewport';
import { LoadingContent } from './components/LoadingContent';
import { GameParameters } from './components/GameParameters';
import { GearIcon } from './components/GearButton';

const AppContainer = styled.div`
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (max-width: 600px) {
    padding: 20px;
  }

  @media (min-width: 600px) {
    padding: 30px;
  }
`;

const App: React.FC = () => {
  const { isSupportedViewport, isLoading } = useViewport(600, 600);
  const [showGameParameters, setShowGameParameters] = useState(false);
  const [difficulty, setDifficulty] = useState('normal');

  const handleSaveParameters = (newDifficulty: string) => {
    setShowGameParameters(false);
    setDifficulty(newDifficulty);
  };

  if (isLoading) {
    return <LoadingContent />;
  }

  return (
    <>
      <GlobalStyles />
      {isSupportedViewport ? (
        <AppContainer>
          <GearIcon onClick={() => setShowGameParameters(true)} />
          <Header />
          <GameBoard difficulty={difficulty} />
          <Footer />
        </AppContainer>
      ) : (
        <UnsupportedViewport />
      )}
      {showGameParameters && (
        <GameParameters
          onClose={() => setShowGameParameters(false)}
          onSave={handleSaveParameters}
        />
      )}
    </>
  );
};

export default App;
