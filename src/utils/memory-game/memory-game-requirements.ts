import { CardProps } from '../../@types/card.types';

export interface MemoryGameProps {
  getCards(): CardProps[];
  getAttempts(): number;
  getMatchedPairs(): number;
  flipCard(index: number): void;
  resetGame(): void;
}
