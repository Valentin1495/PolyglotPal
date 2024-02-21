import './App.css';
import Accordion from './components/Accordion/accordion';
import data from './components/Accordion/data';
import ImageSlider from './components/Image Slider/image-slider';
import RandomColorGenerator from './components/Random Color Generator/random-color-generator';
import StarRating from './components/Star Rating/star-rating';
import car1 from './assets/car-1.jpg';
import car2 from './assets/car-2.jpg';
import car3 from './assets/car-3.jpg';
import car4 from './assets/car-4.jpg';
import car5 from './assets/car-5.jpg';
import LoadMore from './components/Load More UI/load-more';
import SwitchTheme from './components/Switch Theme/switch-theme';
import TreeView from './components/Tree View UI/tree-view';
import ScrollIndicator from './components/Scroll Indicator/scroll-indicator';

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
      {/* <Accordion data={data} /> */}
      {/* <ImageSlider images={IMAGES} /> */}
      {/* <RandomColorGenerator /> */}
      {/* <StarRating /> */}
      {/* <LoadMore /> */}
      {/* <TreeView />  */}
      {/* <SwitchTheme /> */}
      <ScrollIndicator />
    </>
  );
}

export default App;
