import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useChronometer } from '../hooks/use-chronometer';
import { formatTime } from '../utils/helper';

const TimerContainer = styled.div`
  align-items: center;
  border-radius: 10px;
  border: 2px solid #004466;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 310px;
`;

const Timer = styled.div`
  background: linear-gradient(to top, #002244, #004466);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'San Francisco', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  padding: 5px 0;
  text-align: center;
  width: 100%;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`;

const TimeCharacter = styled.span`
  display: inline-block;
  width: 1ch;
`;

interface ChronometerProps {
  isRunning: boolean;
  onTick: (time: number) => void;
}

const ChronometerComponent: React.ForwardRefRenderFunction<unknown, ChronometerProps> = ({ isRunning, onTick }, ref) => {
  const centiseconds = useChronometer(isRunning, ref);
  const formattedTime = formatTime(centiseconds);

  React.useEffect(() => {
    onTick(centiseconds);
  }, [centiseconds, onTick]);

  return (
    <TimerContainer>
      <Timer>
        {formattedTime.split('').map((char, index) => (
          <TimeCharacter key={index}>{char}</TimeCharacter>
        ))}
      </Timer>
    </TimerContainer>
  );
};

export const Chronometer = forwardRef(ChronometerComponent);
