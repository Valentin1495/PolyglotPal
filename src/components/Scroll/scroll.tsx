import { useRef } from 'react';
import './scroll.css';

export default function Scroll() {
  const ref = useRef<HTMLDivElement>(null);

  const sections = [
    {
      label: 'First section',
      className: 'first-section',
    },
    {
      label: 'Second section',
      className: 'second-section',
    },
    {
      label: 'Third section',
      className: 'third-section',
    },
    {
      label: 'Fourth section',
      className: 'fourth-section',
    },
    {
      label: 'Fifth section',
      className: 'fifth-section',
    },
  ];

  const scroll = () => {
    const top = ref.current?.getBoundingClientRect().top;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          padding: '50px 0',
        }}
      >
        <button className='btn' onClick={scroll}>
          Scroll to Third section
        </button>
      </div>

      {sections.map(({ label, className }, idx) => (
        <section key={idx} className={className} ref={idx === 2 ? ref : null}>
          {label}
        </section>
      ))}
    </div>
  );
}
