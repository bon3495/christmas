// eslint-disable-next-line @typescript-eslint/no-var-requires
const Fade = require('react-reveal/Fade');
import aboutImage from '@/assets/imgs/about-christmas.png';
import snowImage from '@/assets/imgs/snow-img.png';

const AboutSection = () => {
  return (
    <section className="section" id="about">
      <h2 className="section__title">
        About Sharing <br />
        Happiness
      </h2>
      <div className="container relative grid items-center grid-cols-1 pt-6 gap-y-14 md:grid-cols-2 md:gap-x-8">
        <Fade right cascade>
          <div className="flex flex-col items-center order-2">
            <p className="px-0 text-center ssm:px-4 sm:w-[85%] sm:px-8 md:w-full md:px-0">
              Sharing these holidays is the best gift you can give, give or share
              your love with the people you love the most and celebrate with great
              happiness.
            </p>

            <button className="button-common">Share Now</button>
          </div>
        </Fade>

        <Fade left cascade>
          <img
            src={aboutImage}
            alt="about image"
            className="order-1"
          />
        </Fade>
        <img
          src={snowImage}
          alt="about snow 1 image"
          className="absolute top-48 left-6 w-[50px] animate-animationSnow1"
        />
        <img
          src={snowImage}
          alt="about snow 2 image"
          className="absolute right-3 bottom-2 w-[50px] animate-animationSnow2"
        />
      </div>
    </section>
  );
};

export default AboutSection;
