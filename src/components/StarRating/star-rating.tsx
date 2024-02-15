import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function StarRating() {
  const [prevIndex, setPrevIndex] = useState<number>(-1);
  const [index, setIndex] = useState<number>(-1);
  const [determined, setDetermined] = useState<boolean>(false);
  const determineRating = (idx: number) => {
    setDetermined(true);
    setIndex(idx);
    setPrevIndex(idx);
  };

  const starIcons = Array.from({ length: 5 }, (_, idx) => (
    <StarIcon
      key={idx}
      style={{
        height: '100px',
        width: '100px',
        color: index >= idx ? 'yellow' : 'black',
      }}
      onMouseEnter={() => setIndex(idx)}
      onMouseLeave={() => (!determined ? setIndex(-1) : setIndex(prevIndex))}
      onClick={() => determineRating(idx)}
    />
  ));

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      {starIcons}
    </div>
  );
}
