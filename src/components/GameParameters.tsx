import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';

const FormContainer = styled.div`
  align-items: stretch;
  background-color: #002244;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const Label = styled.label`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  gap: 10px;
`;

const Select = styled.select`
  background-color: #004466;
  border-radius: 8px;
  border: 1px solid #ccc;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 10px;

  &:focus {
    border-color: #66ccff;
    outline: none;
  }
`;

enum Difficulty {
  Easy = 'easy',
  Normal = 'normal',
  Hard = 'hard',
  Impossible = 'impossible',
}

interface GameParametersProps {
  onClose: () => void;
  onSave: (difficulty: string) => void;
}

export const GameParameters: React.FC<GameParametersProps> = ({ onClose, onSave }) => {
  const [difficulty, setDifficulty] = useState<string>(Difficulty.Normal);

  const handleSave = useCallback(() => {
    onSave(difficulty);
    onClose();
  }, [difficulty, onClose, onSave]);

  return (
    <Modal title="Game Parameters" buttonText="Save" onButtonClick={handleSave}>
      <FormContainer>
        <Label>
          Difficulty:
          <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value={Difficulty.Easy}>Easy</option>
            <option value={Difficulty.Normal}>Normal</option>
            <option value={Difficulty.Hard}>Hard</option>
            <option value={Difficulty.Impossible}>Impossible</option>
          </Select>
        </Label>
      </FormContainer>
    </Modal>
  );
};
