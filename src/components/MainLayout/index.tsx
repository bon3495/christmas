import React from 'react';
import AboutSection from './components/About';
import Celebrate from './components/Celebrate';
import HomeSection from './components/Home';
import SendSection from './components/Send';

const MainLayout = () => {

  return (
    <main className="">
      <HomeSection />
      <AboutSection />
      <SendSection />
      <Celebrate />
    </main>
  );
};

export default MainLayout;
