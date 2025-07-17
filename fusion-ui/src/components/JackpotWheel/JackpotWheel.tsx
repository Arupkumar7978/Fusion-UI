import React, { useState, useRef } from 'react';
import './JackpotWheel.css';

export interface JackpotWheelProps {
  wheelImage: string;
  segments?: number;
  onSpinComplete?: (winningSegment: number) => void;
  disabled?: boolean;
  size?: number;
  duration?: number;
}

const JackpotWheel: React.FC<JackpotWheelProps> = ({
  wheelImage,
  segments = 8,
  onSpinComplete,
  disabled = false,
  size = 400,
  duration = 3000
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  const handleSpin = () => {
    if (isSpinning || disabled) return;

    setIsSpinning(true);
    
    // Calculate random winning segment
    const segmentAngle = 360 / segments;
    const winningSegment = Math.floor(Math.random() * segments);
    
    // Calculate total rotation (multiple full spins + final position)
    const minSpins = 5;
    const maxSpins = 10;
    const totalSpins = Math.random() * (maxSpins - minSpins) + minSpins;
    const finalAngle = winningSegment * segmentAngle;
    const totalRotation = totalSpins * 360 + finalAngle;
    
    setRotation(prev => prev + totalRotation);

    // Handle spin completion
    setTimeout(() => {
      setIsSpinning(false);
      onSpinComplete?.(winningSegment);
    }, duration);
  };

  return (
    <div className="jackpot-wheel-container">
      <div
        className="jackpot-wheel-wrapper"
        style={{ width: size, height: size }}
      >
        {/* Pointer/Indicator */}
        <div className="wheel-pointer">
          <div className="pointer-triangle"></div>
        </div>
        
        {/* Wheel Image */}
        <div
          ref={wheelRef}
          className={`jackpot-wheel ${isSpinning ? 'spinning' : ''}`}
          style={{
            transform: `rotate(${rotation}deg)`,
            transitionDuration: isSpinning ? `${duration}ms` : '0ms',
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src={wheelImage}
            alt="Jackpot Wheel"
            className="wheel-image"
            draggable={false}
          />
        </div>
        
        {/* Center Button */}
        <button
          className={`spin-button ${isSpinning ? 'spinning' : ''} ${disabled ? 'disabled' : ''}`}
          onClick={handleSpin}
          disabled={isSpinning || disabled}
        >
          {isSpinning ? 'SPINNING...' : 'SPIN'}
        </button>
      </div>
    </div>
  );
};

export default JackpotWheel;