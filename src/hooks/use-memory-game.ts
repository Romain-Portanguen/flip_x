import { useState, useEffect } from 'react';
import { MemoryGame } from '../utils/memory-game/memory-game';
import { CardProps } from '../@types/card.types';
import { FLIP_DELAY } from '../@types/constants';

export const useMemoryGame = () => {
  const [game] = useState(() => new MemoryGame());
  const [cards, setCards] = useState<CardProps[]>(game.getCards());
  const [attempts, setAttempts] = useState<number>(game.getAttempts());
  const [matchedPairs, setMatchedPairs] = useState<number>(
    game.getMatchedPairs(),
  );

  useEffect(() => {
    setCards(game.getCards());
    setAttempts(game.getAttempts());
    setMatchedPairs(game.getMatchedPairs());
  }, [game]);

  const flipCard = (index: number) => {
    game.flipCard(index);
    setCards([...game.getCards()]);
    setAttempts(game.getAttempts());
    setMatchedPairs(game.getMatchedPairs());

    if (
      game.getCards()[index].isFlipped &&
      game.getCards().filter((card) => card.isFlipped && !card.isMatched)
        .length === 2
    ) {
      setTimeout(() => {
        setCards([...game.getCards()]);
      }, FLIP_DELAY);
    }
  };

  const resetGame = () => {
    game.resetGame();
    setCards(game.getCards());
    setAttempts(game.getAttempts());
    setMatchedPairs(game.getMatchedPairs());
  };

  return { cards, flipCard, matchedPairs, attempts, resetGame };
};
