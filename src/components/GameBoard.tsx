import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMemoryGame } from '../hooks/use-memory-game';
import { GameCard } from '../components/Card';
import { Modal } from '../components/Modal';

const BoardContainer = styled.div`
  background-color: #002244;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  padding: 20px;
`;


export const GameBoard: React.FC<{ difficulty: string }> = ({ difficulty }) => {
  const { cards, flipCard, matchedPairs, attempts, resetGame, updateDifficulty } = useMemoryGame(difficulty);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    updateDifficulty(difficulty);
  }, [difficulty, updateDifficulty]);

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setIsModalOpen(true);
    }
  }, [matchedPairs, cards.length]);

  const handleRestart = () => {
    resetGame();
    setIsModalOpen(false);
  };

  return (
    <div>
      <BoardContainer>
        {cards.map((card, index) => (
          <GameCard
            key={index}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            onClick={() => flipCard(index)}
            content={card.content}
            seed={card.content}
          />
        ))}
      </BoardContainer>
      {isModalOpen && (
        <Modal
          title="Congratulations!"
          content={`You found all pairs in ${attempts} attempts.`}
          buttonText="Restart game"
          onButtonClick={handleRestart}
        />
      )}
    </div>
  );
}
