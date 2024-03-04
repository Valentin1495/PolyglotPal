import { useState } from 'react';

type TabsProps = {
  tabsList: {
    id: number;
    title: string;
    content: string;
  }[];
};

export default function Tabs({ tabsList }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const selectTab = (id: number) => {
    setSelectedTab(id);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
      }}
    >
      <section
        style={{
          padding: '5px',
          borderRadius: '3px',
          backgroundColor: '#8888881e',
          display: 'flex',
          width: '400px',
        }}
      >
        {tabsList.map(({ id, title }) => (
          <button
            style={{
              backgroundColor: selectedTab === id ? 'white' : 'transparent',
              color: selectedTab === id ? 'black' : 'rgba(0,0,0,0.5)',
              width: '100%',
              borderRadius: '3px',
              padding: '5px',
              transition: 'all 150ms ease-in-out',
              cursor: 'pointer',
              textAlign: 'center',
            }}
            key={id}
            onClick={() => selectTab(id)}
          >
            {title}
          </button>
        ))}
      </section>
      <section>
        {tabsList.filter((el) => el.id === selectedTab)[0].content}
      </section>
    </div>
  );
}
