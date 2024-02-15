import './App.css';
import Accordion from './components/Accordion/accordion';
import data from './components/Accordion/data';
import RandomColorGenerator from './components/RandomColorGenerator/random-color-generator';
import StarRating from './components/StarRating/star-rating';

function App() {
  return (
    <>
      <Accordion data={data} />
      <RandomColorGenerator />
      <StarRating />
    </>
  );
}

export default App;
