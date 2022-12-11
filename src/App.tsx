import { useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';

const App = () => {
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
