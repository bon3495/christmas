import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import clsx from 'clsx';
import { MdClose, MdMenu } from 'react-icons/md';
import { HeaderData } from './constant';
import logo from '@/assets/imgs/logo.png';
import navImage from '@/assets/imgs/snow-img.png';

const Header = () => {
  const [showMiniMenu, setShowMiniMenu] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);

  const handleToggleShowMiniMenu = () => {
    setShowMiniMenu(prev => !prev);
  };

  useEffect(() => {
    const handleScrollWindow = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScrollWindow);

    return () => {
      window.removeEventListener('scroll', handleScrollWindow);
    };
  }, []);

  return (
    <header
      id="header"
      className={clsx(
        'fixed top-0 left-0 z-[9999] w-full bg-transparent transition-all duration-500 ease-in-out',
        {
          'bg-bodyColor': isScroll,
          'bg-transparent': !isScroll,
        }
      )}
    >
      <nav className="container relative flex items-center justify-between h-14">
        <Link
          to="/"
          className="flex items-center text-2xl text-white gap-x-1 font-dancing"
        >
          <img
            src={logo}
            alt="logo"
            className="h-auto w-[30px] -rotate-12 object-cover"
          />
          <span>Christmas</span>
        </Link>
        {showMiniMenu && (
          <div
            className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-transparent"
            onClick={() => setShowMiniMenu(false)}
          />
        )}

        <ul className="flex-col items-center hidden 2md:flex 2md:flex-row">
          {HeaderData.map(item => (
            <li key={item.id} className="w-full 2md:w-auto">
              <LinkScroll
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                className="block w-full py-4 font-medium text-center text-white transition-all duration-300 ease-linear cursor-pointer 2md:w-auto hover:text-primary 2md:px-5"
                onClick={() => setShowMiniMenu(false)}
              >
                {item.title}
              </LinkScroll>
            </li>
          ))}
        </ul>

        <div
          className={clsx(
            'fixed left-0 top-0 z-50 w-full bg-bodyColor py-14 transition-all duration-500 ease-out 2md:hidden block',
            {
              'translate-y-0': showMiniMenu,
              '-translate-y-full': !showMiniMenu,
            }
          )}
        >
          <ul className="flex flex-col items-center 2md:flex-row">
            {HeaderData.map(item => (
              <li key={item.id} className="w-full 2md:w-auto">
                <LinkScroll
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  className="block w-full py-4 font-medium text-center text-white transition-all duration-300 ease-linear cursor-pointer 2md:w-auto hover:text-primary 2md:px-5"
                  onClick={() => setShowMiniMenu(false)}
                >
                  {item.title}
                </LinkScroll>
              </li>
            ))}
          </ul>

          <button
            className="absolute block p-2 text-2xl text-white transition-all duration-300 ease-in rounded-full top-6 right-6 hover:bg-primary/20 hover:text-primary 2md:hidden"
            onClick={handleToggleShowMiniMenu}
          >
            <MdClose />
          </button>

          <img
            src={navImage}
            alt="navbar image no 1"
            className="absolute block w-10 top-24 left-10 -rotate-12 animate-animationSnow1 2md:hidden"
          />
          <img
            src={navImage}
            alt="navbar image no 2"
            className="absolute right-4 bottom-8 w-[60px] rotate-12 animate-animationSnow2 block 2md:hidden"
          />
        </div>

        {/* Toggle button */}
        <button
          className="block text-2xl text-white 2md:hidden"
          onClick={handleToggleShowMiniMenu}
        >
          <MdMenu />
        </button>
      </nav>
    </header>
  );
};

export default Header;
