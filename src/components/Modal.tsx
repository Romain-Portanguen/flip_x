import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  animation: fadeIn 0.3s ease-in-out;
  background: linear-gradient(to top, #002244, #004466);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 380px;
  padding: 30px;
  text-align: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalTitle = styled.h2`
  background: linear-gradient(to right, #66aacc, #99ccee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'San Francisco', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
`;

const ModalContent = styled.p`
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const ModalButton = styled.button`
  background: linear-gradient(to top, #3c99dc, #66ccff);
  border-radius: 6px;
  border: none;
  color: #fff;
  color: white;
  cursor: pointer;
  font-family: 'San Francisco', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  padding: 12px 24px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.5);
    outline: none;
  }
`;

interface ModalProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, content, buttonText, onButtonClick }) => {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{content}</ModalContent>
        <ModalButton onClick={onButtonClick}>{buttonText}</ModalButton>
      </ModalWrapper>
    </ModalContainer>
  );
};
