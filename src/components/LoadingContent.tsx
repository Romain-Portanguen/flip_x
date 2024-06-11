import React from 'react';
import styled from 'styled-components';
import { GradientAnimatedBackground } from '../styles/background';


const LoadingText = styled.p`
  font-size: 1.5rem;
  color: #fff;
`;

export const LoadingContent: React.FC = () => {
  return (
    <GradientAnimatedBackground>
      <LoadingText>Loading...</LoadingText>
    </GradientAnimatedBackground>
  );
};
