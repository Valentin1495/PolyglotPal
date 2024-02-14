import './App.css';
import Accordion from './components/Accordion/accordion';
import data from './components/Accordion/data';

function App() {
  return (
    <>
      <Accordion data={data} />
    </>
  );
}

export default App;
