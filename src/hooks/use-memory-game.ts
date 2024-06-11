import { useState, useEffect, useCallback } from 'react';
import { MemoryGame } from '../utils/memory-game/memory-game';
import { CardProps } from '../@types/card.types';

export const useMemoryGame = (initialDifficulty: string) => {
  const [game, setGame] = useState(() => new MemoryGame(initialDifficulty));
  const [cards, setCards] = useState<CardProps[]>(game.getCards());
  const [attempts, setAttempts] = useState<number>(game.getAttempts());
  const [matchedPairs, setMatchedPairs] = useState<number>(game.getMatchedPairs());
  const [difficulty, setDifficulty] = useState<string>(initialDifficulty);

  useEffect(() => {
    setCards(game.getCards());
    setAttempts(game.getAttempts());
    setMatchedPairs(game.getMatchedPairs());
  }, [game]);

  const flipCard = (index: number) => {
    if (!game.getCards()[index].isFlipped && !game.getCards()[index].isMatched) {
      game.flipCard(index);
      setCards([...game.getCards()]);
      setAttempts(game.getAttempts());
      setMatchedPairs(game.getMatchedPairs());

      if (
        game.getCards()[index].isFlipped &&
        game.getCards().filter((card) => card.isFlipped && !card.isMatched).length === 2
      ) {
        setTimeout(() => {
          setCards([...game.getCards()]);
        }, game.getFlipDelay());
      }
    }
  };

  const resetGame = () => {
    game.resetGame();
    setCards(game.getCards());
    setAttempts(game.getAttempts());
    setMatchedPairs(game.getMatchedPairs());
  };

  const updateDifficulty = useCallback((newDifficulty: string) => {
    setDifficulty(newDifficulty);
    const newGame = new MemoryGame(newDifficulty);
    setGame(newGame);
  }, []);

  return { cards, flipCard, matchedPairs, attempts, resetGame, updateDifficulty, difficulty };
};
