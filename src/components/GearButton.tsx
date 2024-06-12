import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCog } from 'react-icons/fa';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const IconButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: #002244;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  position: absolute;
  right: 60px;
  top: 45px;
  transition: transform 0.3s ease;

  &:hover {
    animation: ${rotate} 0.5s ease;
  }
`;

interface GearIconProps {
  onClick: () => void;
}

export const GearIcon: React.FC<GearIconProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} type="button" aria-label="Open settings">
      <FaCog />
    </IconButton>
  );
};
