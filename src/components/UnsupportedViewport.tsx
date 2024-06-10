import React from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
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
    <Container>
      <Title>FlipX</Title>
      <Message>
        Is not supported on your device. <br />
        Go to a computer or tablet to play 🙂‍↔️
      </Message>
    </Container>
  );
};

export default UnsupportedViewport;
