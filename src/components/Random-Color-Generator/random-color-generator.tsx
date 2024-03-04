import { useState } from 'react';

export default function RandomColorGenerator() {
  const [type, setType] = useState<string>('hex');
  const [color, setColor] = useState<string>('#ffffff');

  const selectHex = () => {
    setColor('#ffffff');
    setType('hex');
  };

  const selectRGB = () => {
    setColor('rgb(255, 255, 255)');
    setType('rgb');
  };

  const getRandomNumber = (end: number) => {
    return Math.floor(Math.random() * end);
  };

  const changeHexColor = () => {
    const arr = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ];

    let hexNum = '';
    for (let i = 0; i < 6; i++) {
      const randomIdx = getRandomNumber(arr.length);
      hexNum += arr[randomIdx];
    }
    setColor('#' + hexNum);
  };

  const changeRGBcolor = () => {
    const r = getRandomNumber(256);
    const g = getRandomNumber(256);
    const b = getRandomNumber(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: color,
      }}
    >
      <section
        style={{
          padding: '25px',
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
        }}
      >
        <button className='btn' onClick={selectHex}>
          Hex color
        </button>
        <button className='btn' onClick={selectRGB}>
          RGB color
        </button>
        <button
          className='btn'
          onClick={type === 'hex' ? changeHexColor : changeRGBcolor}
        >
          Create random color
        </button>
      </section>

      <section
        style={{
          textAlign: 'center',
          marginTop: '200px',
        }}
      >
        <h1>{type}</h1>
        <h2>{color}</h2>
      </section>
    </div>
  );
}
