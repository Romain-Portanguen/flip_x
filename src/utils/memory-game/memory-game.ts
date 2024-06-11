import { CardProps } from '../../@types/card.types';
import { generateInitialCards } from '../helper';
import { EASY_FLIP_DELAY, HARD_FLIP_DELAY, IMPOSSIBLE_FLIP_DELAY, NORMAL_FLIP_DELAY, NUMBER_OF_CARDS } from '../../@types/constants';

export class MemoryGame {
  private cards: CardProps[] = [];
  private flippedIndices: number[] = [];
  private attempts: number = 0;
  private matchedPairs: number = 0;
  private difficulty: string;
  private flipDelay: number = NORMAL_FLIP_DELAY;

  constructor(difficulty: string = 'normal') {
    this.difficulty = difficulty;
    this.setFlipDelay();
    this.resetGame();
  }

  getCards(): CardProps[] {
    return this.cards;
  }

  getAttempts(): number {
    return this.attempts;
  }

  getMatchedPairs(): number {
    return this.matchedPairs;
  }

  getFlipDelay(): number {
    return this.flipDelay;
  }

  flipCard(index: number): void {
    if (this.isCardFlippable(index)) {
      this.flippedIndices.push(index);
      this.updateCardFlippedState(index, true);

      if (this.flippedIndices.length === 2) {
        this.attempts++;
        if (this.cardsMatch()) {
          this.markCardsAsMatched();
        } else {
          setTimeout(() => {
            this.resetFlippedCards();
          }, this.flipDelay);
        }
      }
    }
  }

  resetGame(): void {
    this.cards = generateInitialCards(NUMBER_OF_CARDS / 2);
    this.flippedIndices = [];
    this.attempts = 0;
    this.matchedPairs = 0;
  }

  setGameParameters(difficulty: string): void {
    this.difficulty = difficulty;
    this.setFlipDelay();
    this.resetGame();
  }

  private setFlipDelay(): void {
    switch (this.difficulty) {
      case 'easy':
        this.flipDelay = EASY_FLIP_DELAY;
        break;
      case 'normal':
        this.flipDelay = NORMAL_FLIP_DELAY;
        break;
      case 'hard':
        this.flipDelay = HARD_FLIP_DELAY;
        break;
      case 'impossible':
        this.flipDelay = IMPOSSIBLE_FLIP_DELAY;
        break;
      default:
        this.flipDelay = NORMAL_FLIP_DELAY;
    }
  }

  private isCardFlippable(index: number): boolean {
    const card = this.cards[index];
    return !card.isFlipped && !card.isMatched && this.flippedIndices.length < 2;
  }

  private updateCardFlippedState(index: number, isFlipped: boolean): void {
    this.cards = this.cards.map((card, i) =>
      i === index ? { ...card, isFlipped } : card
    );
  }

  private cardsMatch(): boolean {
    const [firstIndex, secondIndex] = this.flippedIndices;
    return this.cards[firstIndex].content === this.cards[secondIndex].content;
  }

  private markCardsAsMatched(): void {
    this.flippedIndices.forEach(index => {
      this.cards[index].isMatched = true;
    });
    this.matchedPairs++;
    this.flippedIndices = [];
  }

  private resetFlippedCards(): void {
    this.flippedIndices.forEach(index => {
      this.cards[index].isFlipped = false;
    });
    this.flippedIndices = [];
  }
}
