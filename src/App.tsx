import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Link to='/accordion'>Accordion</Link>
      <Link to='/image-slider'>Image Slider</Link>
      <Link to='/random-color-generator'>Random Color Generator</Link>
      <Link to='/star-rating'>Star Rating</Link>
      <Link to='/load-more'>Load More</Link>
      <Link to='/switch-theme'>Switch Theme</Link>
      <Link to='/scroll-indicator'>Scroll Indicator</Link>
      <Link to='tabs'>Tabs</Link>
      <Link to='dialog'>Dialog</Link>
      <Link to='github-profile-finder'>Github Profile Finder</Link>
      <Link to='search-filter'>Search Filter</Link>
      <Link to='tic-tac-toe'>Tic-Tac-Toe</Link>
      <Link to='/scroll-to-top-bottom'>Scroll to Top/Bottom</Link>
      <Link to='/scroll-to-particular-section'>
        Scroll to Particular Section
      </Link>
      <Link to='/use-fetch'>useFetch hook</Link>
      <Link to='/use-on-click-outside'>useOnClickOutside hook</Link>
      <Link to='/use-window-resize'>useWindowResize hook</Link>
    </div>
  );
}

export default App;
