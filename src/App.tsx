import './App.css';
import Accordion from './components/Accordion/accordion';
import data from './components/Accordion/data';
import RandomColorGenerator from './components/RandomColorGenerator/random-color-generator';

function App() {
  return (
    <>
      <Accordion data={data} />
      <RandomColorGenerator />
    </>
  );
}

export default App;
