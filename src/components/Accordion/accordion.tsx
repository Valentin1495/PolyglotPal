import { useState } from 'react';
import './accordion.css';
import { ChevronDown } from 'lucide-react';

type QA = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  data: QA[];
};

export default function Accordion({ data }: AccordionProps) {
  const [multiSelection, setMultiSelection] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    const show = selected.includes(id);

    if (multiSelection) {
      if (show) {
        setSelected((prev) => prev.filter((el) => el !== id));
      } else {
        setSelected((prev) => [...prev, id]);
      }
    } else {
      if (show) {
        setSelected([]);
      } else {
        setSelected([id]);
      }
    }
  };

  const enableMultiSelection = () => {
    setMultiSelection((prev) => !prev);
    setSelected([]);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <button className='btn' onClick={enableMultiSelection}>
        Enable multi selection
      </button>

      <h2
        style={{
          textAlign: 'center',
        }}
      >
        Frequently Asked Questions
      </h2>

      <div
        style={{
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '50px',
        }}
      >
        {data.map(({ id, question, answer }) => (
          <section key={id} className='accordion-item'>
            <article className='accordion-trigger' onClick={() => toggle(id)}>
              <h3>{question}</h3>
              <ChevronDown
                className={`${selected.includes(id) && 'open'} chevron`}
              />
            </article>

            <article
              className={`${selected.includes(id) && 'open'} accordion-content`}
            >
              <p
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  padding: '20px',
                }}
              >
                {answer}
              </p>
            </article>
          </section>
        ))}
      </div>
    </div>
  );
}
