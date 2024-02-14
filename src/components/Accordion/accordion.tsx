import { useState } from 'react';
import data from './data.ts';

export default function Accordion() {
  const [multiSelection, setMultiSelection] = useState(false);
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

  return (
    <div>
      <button onClick={() => setMultiSelection((prev) => !prev)}>
        Enable multi selection
      </button>

      {data.map((el) => {
        const { id, question, answer } = el;

        return (
          <section key={id}>
            <h2 onClick={() => toggle(id)}>{question}</h2>
            {selected.includes(id) && <p>{answer}</p>}
          </section>
        );
      })}
    </div>
  );
}
