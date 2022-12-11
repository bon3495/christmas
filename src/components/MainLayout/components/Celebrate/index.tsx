// eslint-disable-next-line @typescript-eslint/no-var-requires
const Fade = require('react-reveal/Fade');
import celebrateImage from '@/assets/imgs/celebarte-church.png';
import SnowImage from '@/components/SnowImage';

const Celebrate = () => {
  return (
    <section className="section" id="celebrate">
      <h2 className="section__title">
        Celebrate With A <br />
        Lot Of Love
      </h2>
      <div className="container relative grid items-center grid-cols-1 pt-6 gap-y-14 md:grid-cols-2 md:gap-x-8">
        <Fade left cascade>
          <div className="flex flex-col items-center">
            <p className="px-0 text-center ssm:px-4 sm:w-[85%] sm:px-8 md:w-full md:px-0">
              In this holidays, celebrate with much love and peace, offering many
              blessings to our loved ones, friends and neighbors, wishing them a
              good Christmas message.
            </p>
            <button className="button-common">Celebrate Now</button>
          </div>
        </Fade>
        <Fade right cascade>
          <img src={celebrateImage} alt="celebrate image" />
        </Fade>
        <SnowImage
          className="left-[2rem] -top-[3rem] animate-animationSnow1"
          alt="celebrate snow 1"
        />
        <SnowImage
          className="right-[2rem] bottom-0 animate-animationSnow2"
          alt="celebrate snow 2"
        />
        <SnowImage
          className="right-[2rem] top-[10rem] animate-animationSnow1 md:-top-[7rem] md:right-[6rem]"
          alt="celebrate snow 3"
        />
        <SnowImage
          className="left-[20rem] bottom-[7rem] hidden animate-animationSnow2 lg:block"
          alt="celebrate snow 4"
        />
      </div>
    </section>
  );
};

export default Celebrate;
