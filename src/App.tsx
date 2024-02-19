import './App.css';
import Accordion from './components/Accordion/accordion';
import data from './components/Accordion/data';
import ImageSlider from './components/ImageSlider/image-slider';
import RandomColorGenerator from './components/RandomColorGenerator/random-color-generator';
import StarRating from './components/StarRating/star-rating';
import car1 from './assets/car-1.jpg';
import car2 from './assets/car-2.jpg';
import car3 from './assets/car-3.jpg';
import car4 from './assets/car-4.jpg';
import car5 from './assets/car-5.jpg';
import LoadMore from './components/LoadMore/load-more';

const IMAGES = [
  {
    url: car1,
    alt: 'car1',
  },
  {
    url: car2,
    alt: 'car2',
  },
  {
    url: car3,
    alt: 'car3',
  },
  {
    url: car4,
    alt: 'car4',
  },
  {
    url: car5,
    alt: 'car5',
  },
];

function App() {
  return (
    <>
      <Accordion data={data} />
      <RandomColorGenerator />
      <StarRating />
      <ImageSlider images={IMAGES} />
      <LoadMore />
    </>
  );
}

export default App;
