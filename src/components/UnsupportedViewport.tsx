import React from 'react';
import styled from 'styled-components';
import { GradientAnimatedBackground } from '../styles/background';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 1rem;
  white-space: pre-line;
`;

const Message = styled.p`
  color: #fff;
  font-size: 1rem;
  margin: 0 1rem;
  margin-bottom: 1rem;
`;

export const UnsupportedViewport: React.FC = () => {

  return (
    <GradientAnimatedBackground>
      <ContentWrapper>
        <Title>FlipX</Title>
        <Message>
          Is not supported on your device. <br />
          Go to a computer or tablet to play 🙂‍↔️
        </Message>
      </ContentWrapper>
    </GradientAnimatedBackground>
  );
};
