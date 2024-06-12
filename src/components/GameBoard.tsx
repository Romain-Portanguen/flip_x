import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMemoryGame } from '../hooks/use-memory-game';
import { GameCard } from '../components/Card';
import { Modal } from '../components/Modal';
import { formatTime } from '../utils/helper';

const BoardContainer = styled.div`
  background-color: #002244;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  padding: 20px;
`;

interface GameBoardProps {
  difficulty: string;
  onGameStart: () => void;
  onGameEnd: () => void;
  onGameRestart: () => void;
  elapsedTime: number;
}

export const GameBoard: React.FC<GameBoardProps> = ({ difficulty, onGameStart, onGameEnd, onGameRestart, elapsedTime }) => {
  const { cards, flipCard, matchedPairs, attempts, resetGame, updateDifficulty } = useMemoryGame(difficulty);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameHasStarted, setGameHasStarted] = useState(false);

  const handleCardClick = useCallback((index: number) => {
    if (!gameHasStarted) {
      setGameHasStarted(true);
      onGameStart();
    }
    flipCard(index);
  }, [flipCard, gameHasStarted, onGameStart]);

  const handleRestart = useCallback(() => {
    resetGame();
    setGameHasStarted(false);
    setIsModalOpen(false);
    onGameRestart();
  }, [resetGame, onGameRestart]);

  useEffect(() => {
    updateDifficulty(difficulty);
  }, [difficulty, updateDifficulty]);

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      onGameEnd();
      setIsModalOpen(true);
    }
  }, [matchedPairs, cards.length, onGameEnd]);

  return (
    <>
      <BoardContainer>
        {cards.map((card, index) => (
          <GameCard
            key={index}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            onClick={() => handleCardClick(index)}
            content={card.content}
            seed={card.content}
          />
        ))}
      </BoardContainer>
      {isModalOpen && (
        <Modal
          title="Congratulations!"
          content={`
            <p>You found all pairs in ${attempts} attempts.</p>
            <p>Time taken: ${formatTime(elapsedTime)}</p>
          `}
          buttonText="Restart game"
          onButtonClick={handleRestart}
        />
      )}
    </>
  );
};
