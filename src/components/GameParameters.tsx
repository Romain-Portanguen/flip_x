import React from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 15px;
`;

const Select = styled.select`
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 8px;
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
  const [difficulty, setDifficulty] = React.useState<string>(Difficulty.Normal);

  const handleSave = () => {
    onSave(difficulty);
    onClose();
  };

  return (
    <Modal title="Game Parameters" content="" buttonText="Save" onButtonClick={handleSave}>
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
