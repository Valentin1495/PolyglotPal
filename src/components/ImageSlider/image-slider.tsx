import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import './image-slider.css';

type ImageSliderProps = {
  images: { url: string; alt: string }[];
};

export default function ImageSlider({ images }: ImageSliderProps) {
  const [order, setOrder] = useState<number>(0);

  const slideRight = () => {
    setOrder((prev) => {
      if (order === images.length - 1) return 0;
      return prev + 1;
    });
  };

  const slideLeft = () => {
    setOrder((prev) => {
      if (order === 0) return images.length - 1;

      return prev - 1;
    });
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          maxWidth: '1024px',
          aspectRatio: '10 / 6',
          display: 'flex',
        }}
      >
        {images.map(({ url, alt }, idx) => (
          <img
            src={url}
            alt={alt}
            key={idx}
            style={{
              objectFit: 'cover',
              width: '100%',
              flexShrink: 0,
              flexGrow: 0,
              transform: `translateX(${order * -100}%)`,
              transition: 'transform 300ms ease-in-out',
            }}
          />
        ))}

        <button
          className='chevron'
          onClick={slideRight}
          style={{
            right: 10,
          }}
        >
          <ArrowRight strokeWidth={3} size={24} color='black' />
        </button>
        <button
          className='chevron'
          onClick={slideLeft}
          style={{
            left: 10,
          }}
        >
          <ArrowLeft color='black' size={24} strokeWidth={3} />
        </button>

        <section
          style={{
            position: 'absolute',
            bottom: 5,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '5px',
          }}
        >
          {images.map((_, idx) => (
            <button
              onClick={() => setOrder(idx)}
              key={idx}
              style={{
                cursor: 'pointer',
                width: '10px',
                height: '10px',
                backgroundColor:
                  order === idx ? 'white' : 'rgba(255,255,255,0.5)',
                borderRadius: '9999px',
              }}
            ></button>
          ))}
        </section>
      </div>
    </div>
  );
}
