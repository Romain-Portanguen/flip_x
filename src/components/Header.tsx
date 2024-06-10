import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1`
  background: linear-gradient(to top, #002244, #004466);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'San Francisco', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0 10px;
  padding-top: 10px;
  text-align: center;
  transition: transform 0.9s ease-in-out, color 0.3s ease-in-out;
  width: 100%;

  @media (min-width: 600px) {
    font-size: 2.9rem;
  }

  &:hover {
    color: #004466;
    cursor: pointer;
    transform: rotateY(-360deg);
  }
`;

export const Header: React.FC = () => (
  <Container>
    <Title>FlipX</Title>
  </Container>
);
