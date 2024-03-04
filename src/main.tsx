import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/not-found.tsx';
import Accordion from './components/Accordion/accordion.tsx';
import { accordionItems } from './components/Accordion/accordion-items.ts';
import ImageSlider from './components/Image-Slider/image-slider.tsx';
import { images } from './components/Image-Slider/images.ts';
import RandomColorGenerator from './components/Random-Color-Generator/random-color-generator.tsx';
import StarRating from './components/Star-Rating/star-rating.tsx';
import LoadMore from './components/Load-More/load-more.tsx';
import SwitchTheme from './components/Switch-Theme/switch-theme.tsx';
import ScrollIndicator from './components/Scroll-Indicator/scroll-indicator.tsx';
import Tabs from './components/Tabs/tabs.tsx';
import { tabsList } from './components/Tabs/tabs-list.ts';
import Dialog from './components/Dialog/dialog.tsx';
import GithubProfileFinder from './components/Github-Profile-FInder/github-profile-finder.tsx';
import SearchFilter from './components/Search-Filter/search-filter.tsx';
import TicTacToe from './components/Tic-Tac-Toe/tic-tac-toe.tsx';
import ScrollTopBottom from './components/Scroll-Top-Bottom/scroll-top-bottom.tsx';
import Scroll from './components/Scroll/scroll.tsx';
import TestHook1 from './components/Use-Fetch/test-hook-1.tsx';
import TestHook2 from './components/Use-On-Click-Outside/test-hook-2.tsx';
import TestHook3 from './components/Use-Window-Resize/test-hook-3.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/accordion',
    element: <Accordion accordionItems={accordionItems} />,
  },
  {
    path: '/image-slider',
    element: <ImageSlider images={images} />,
  },
  {
    path: '/random-color-generator',
    element: <RandomColorGenerator />,
  },
  {
    path: '/star-rating',
    element: <StarRating />,
  },
  {
    path: '/load-more',
    element: <LoadMore />,
  },
  {
    path: '/switch-theme',
    element: <SwitchTheme />,
  },
  {
    path: '/scroll-indicator',
    element: <ScrollIndicator />,
  },
  {
    path: '/tabs',
    element: <Tabs tabsList={tabsList} />,
  },
  {
    path: '/dialog',
    element: <Dialog />,
  },
  {
    path: '/github-profile-finder',
    element: <GithubProfileFinder />,
  },
  {
    path: '/search-filter',
    element: <SearchFilter />,
  },
  {
    path: '/tic-tac-toe',
    element: <TicTacToe />,
  },
  {
    path: '/scroll-to-top-bottom',
    element: <ScrollTopBottom />,
  },
  {
    path: '/scroll-to-particular-section',
    element: <Scroll />,
  },
  {
    path: '/use-fetch',
    element: <TestHook1 />,
  },
  {
    path: '/use-on-click-outside',
    element: <TestHook2 />,
  },
  {
    path: '/use-window-resize',
    element: <TestHook3 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
