import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface RatingControlProps {
  scale?: number;
  onChange: (value: any) => void;
}

export const RatingInput: React.FC<RatingControlProps> = ({
  scale = 5,
  onChange,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleRating = (newRating: number) => {
    setRating(newRating);
    onChange({ target: { value: newRating } });
  };

  return (
    <div className='flex justify-start'>
      {[...Array(scale)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <span key={ratingValue} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(0)}>
            {ratingValue <= (hover || rating) ? (
              <FaStar onClick={() => handleRating(ratingValue)} style={{ cursor: 'pointer' }} />
            ) : (
              <FaRegStar onClick={() => handleRating(ratingValue)} style={{ cursor: 'pointer' }} />
            )}
          </span>
        );
      })}
    </div>
  );
};
