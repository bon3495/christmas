// eslint-disable-next-line @typescript-eslint/no-var-requires
const Fade = require('react-reveal/Fade');
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import SnowImage from '../SnowImage';

const Links = [
  {
    path: 'https://www.facebook.com',
    Icon: <BsFacebook />,
  },
  {
    path: 'https://www.instagram.com',
    Icon: <BsInstagram />,
  },
  {
    path: 'https://twitter.com',
    Icon: <BsTwitter />,
  },
];

const Footer = () => {
  return (
    <footer className="overflow-hidden section">
      <div className="container relative pb-[2rem] text-center">
        <Fade bottom cascade>
          <Link
            to="/"
            className="inline-block text-xl text-white transition-all duration-300 ease-in font-dancing hover:text-primary md:text-2xl"
          >
            Christmas
          </Link>

          <ul className="flex items-center justify-center my-6 gap-x-8">
            {Links.map(({ path, Icon }) => (
              <li key={path}>
                <a
                  href={path}
                  target="_blank"
                  className="block p-2 text-xl text-white transition-all duration-300 ease-in rounded-full hover:bg-primary/20 hover:text-primary"
                >
                  {Icon}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-center">
            © Copyright Bedimcode (cover by Bon Tran). All rights reversed
          </p>
        </Fade>

        <SnowImage
          className="-top-[2rem] left-[2rem] animate-animationSnow1 md:left-[10rem] md:top-0"
          alt="footer snow 1"
        />
        <SnowImage
          className="bottom-0 right-[3rem] animate-animationSnow2"
          alt="footer snow 2"
        />
      </div>
    </footer>
  );
};

export default Footer;
