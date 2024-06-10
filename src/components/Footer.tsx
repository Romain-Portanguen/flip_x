import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styled from 'styled-components';

const Container = styled.footer`
  align-items: center;
  background: linear-gradient(to top, #002244, #004466);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-sizing: border-box;
  display: flex;
  font-size: 24px;
  font-weight: 700;
  gap: 10px;
  justify-content: center;
  max-width: 800px;
  padding-top: 10px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
`;

const FooterContent = styled.p`
  font-family: 'San Francisco', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  margin: 0;
  text-align: center;
`;

const FooterLink = styled.a`
  background: linear-gradient(to top, #002244, #004466);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #002244;
  text-decoration: none;

  &:hover {
    background: linear-gradient(to top, #002244, #004466);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;

  a {
    font-size: 20px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #66aacc;
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`;

export const Footer: React.FC = () => (
  <Container>
    <FooterContent>
      Made by Romain Portanguen - Software Engineer
    </FooterContent>
    <IconWrapper>
      <FooterLink href="https://github.com/Romain-Portanguen" target="_blank" rel="noreferrer" aria-label='github-profile'>
        <FaGithub />
      </FooterLink>
      <FooterLink href="https://www.linkedin.com/in/romain-portanguen" target="_blank" rel="noreferrer" aria-label='linkedin-profile'>
        <FaLinkedin />
      </FooterLink>
    </IconWrapper>
  </Container>
);