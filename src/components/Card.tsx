import React from 'react';
import styled from 'styled-components';
import { CardProps } from '../@types/card.types';
import { useAvatar } from '../hooks/use-avatar';

const CardContainer = styled.div`
  cursor: pointer;
  height: 110px;
  perspective: 1000px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100px;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

const CardInner = styled.div<{ isFlipped: boolean }>`
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: 100%;
  position: relative;
  text-align: center;
  transform-style: preserve-3d;
  transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  transition: transform 0.6s;
  width: 100%;
`;

const CardFace = styled.div`
  align-items: center;
  backface-visibility: hidden;
  border-radius: 10px;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const CardBack = styled(CardFace)`
  background: linear-gradient(to right, #66aacc, #99ccee);
  color: white;
`;

const CardFront = styled(CardFace)`
  background: white;
  color: #004466;
  font-size: 2rem;
  transform: rotateY(180deg);

  & img {
    border-radius: 10px;
    height: 100%;
    width: 100%;
  }
`;

interface GameCardProps extends CardProps {
  seed: string;
  onClick: () => void;
}

export const GameCard: React.FC<GameCardProps> = ({
  isFlipped,
  onClick,
  content,
  isMatched,
  seed
}) => {
  const avatar = useAvatar(seed, 100);

  return (
    <CardContainer onClick={onClick}>
      <CardInner isFlipped={isFlipped || isMatched}>
        <CardBack />
        <CardFront>{avatar ? <img src={avatar} alt="Avatar" /> : content}</CardFront>
      </CardInner>
    </CardContainer>
  );
};