import { v4 as uuidv4 } from 'uuid';
import { CardProps } from '../@types/card.types';
import { IconUtils } from './icon-utils/icon-utils';
import { AVATAR_SIZE, TIME_END_INDEX, TIME_START_INDEX } from '../@types/constants';

function generateAvatar(seed: string): string {
  const canvas = document.createElement('canvas');
  const options = IconUtils.buildOptions({ seed, size: AVATAR_SIZE });
  IconUtils.renderIcon(options, canvas);
  return canvas.toDataURL();
}

function createCard(seed: string): CardProps {
  const avatarUrl = generateAvatar(seed);
  return { content: avatarUrl, isFlipped: false, isMatched: false };
}

function createCardPairs(seeds: string[]): CardProps[] {
  return seeds.flatMap(seed => [createCard(seed), createCard(seed)]);
}

// ROP: Using the Fisher-Yates algorithm for more efficient mixing
export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function generateUniqueSeeds(numberOfPairs: number): string[] {
  const seeds: Set<string> = new Set();
  while (seeds.size < numberOfPairs) {
    seeds.add(uuidv4());
  }
  return Array.from(seeds);
}

export function generateInitialCards(numberOfPairs: number): CardProps[] {
  const seeds = generateUniqueSeeds(numberOfPairs);
  const cards: CardProps[] = createCardPairs(seeds);
  return shuffleArray(cards);
}

export function formatTime(centiseconds: number) {
  const date = new Date(centiseconds * 10).toISOString();
  const centis = Math.floor((centiseconds % 100)).toString().padStart(2, '0');
  return `${date.slice(TIME_START_INDEX, TIME_END_INDEX)}:${centis}`;
}
