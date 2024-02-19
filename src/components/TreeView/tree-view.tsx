import { useState } from 'react';

export default function TreeView() {
  const [showA, setShowA] = useState<boolean>(false);
  const [showB, setShowB] = useState<boolean>(false);
  const [showC, setShowC] = useState<boolean>(false);

  const toggleA = () => setShowA((prev) => !prev);
  const toggleB = () => setShowB((prev) => !prev);
  const toggleC = () => setShowC((prev) => !prev);

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'fixed',
          backgroundColor: 'rgba(255, 97, 97, 0.1)',
          height: '100%',
          width: '20%',
          textAlign: 'left',
          padding: '20px',
        }}
      >
        <button onClick={toggleA}>A {showA ? '-' : '+'}</button>
        {showA && (
          <div
            style={{
              marginLeft: '10px',
            }}
          >
            <section>a</section>
            <button onClick={toggleB}>B {showB ? '-' : '+'}</button>
            {showB && (
              <div
                style={{
                  marginLeft: '10px',
                }}
              >
                <section>b</section>
                <button onClick={toggleC}>C {showC ? '-' : '+'}</button>
                {showC && (
                  <div
                    style={{
                      marginLeft: '10px',
                    }}
                  >
                    D
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
