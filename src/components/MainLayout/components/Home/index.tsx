import clsx from 'clsx';
import { useLayoutEffect, useRef } from 'react';
import Relax from 'rellax';
import { gsap } from 'gsap';

import moonImage from '@/assets/imgs/home-moon.png';
import trineoSantaImage from '@/assets/imgs/home-trineo-santa.png';
import mountainImage3 from '@/assets/imgs/home-mountain-3.png';
import mountainImage2 from '@/assets/imgs/home-mountain-2.png';
import mountainImage1 from '@/assets/imgs/home-mountain-1.png';
import pineTreeImage from '@/assets/imgs/home-pine-tree.png';
import villageImage from '@/assets/imgs/home-village.png';
import snowImage from '@/assets/imgs/home-snow.png';
import classes from './styles.module.scss';

const HomeSection = () => {
  const homeRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const moonRelax = new Relax('.home__moon', {
      speed: -15,
    });
    const trineoRelax = new Relax('.home__trineo', {
      speed: -3,
    });
    const mountain2Relax = new Relax('.home__mountain2', {
      speed: -8,
    });
    const mountain3Relax = new Relax('.home__mountain3', {
      speed: -8,
    });
    const pineTreeRelax = new Relax('.home__pine', {
      speed: -10,
    });
    const villageRelax = new Relax('.home__village', {
      speed: -10,
    });

    const ctx = gsap.context(() => {
      gsap.from('.home__title', {
        opacity: 0,
        y: -60,
        delay: 0.8,
        duration: 1.2,
      });
      gsap.from('.home__moon', {
        opacity: 0,
        y: 200,
        delay: 0.8,
        duration: 1.2,
      });
      gsap.from('.home__trineo', {
        opacity: 0,
        y: -200,
        delay: 0.8,
        duration: 1.2,
      });
      gsap.from('.home__mountain3', {
        opacity: 0,
        y: -150,
        delay: 0.6,
        duration: 1.2,
      });
      gsap.from('.home__mountain2', {
        opacity: 0,
        y: 150,
        delay: 0.5,
        duration: 1.2,
      });
      gsap.from('.home__pine', {
        opacity: 0,
        y: 150,
        delay: 0.3,
        duration: 1.2,
      });
      gsap.from('.home__village', {
        opacity: 0,
        y: 100,
        delay: 0.1,
        duration: 1.2,
      });
      gsap.from('.home__mountain1', {
        opacity: 0,
        y: 250,
        delay: 0.7,
        duration: 1.2,
      });
    }, homeRef);

    return () => {
      ctx.revert();
      moonRelax.destroy();
      trineoRelax.destroy();
      mountain2Relax.destroy();
      mountain3Relax.destroy();
      pineTreeRelax.destroy();
      villageRelax.destroy();
    };
  }, []);

  return (
    <section
      className={clsx(
        'relative h-[80vh] overflow-hidden bg-gradient1 pt-16 md:h-screen',
        classes.home
      )}
      id="home"
      ref={homeRef}
    >
      <h1 className="home__title section__title mt-6 text-center font-dancing text-[48px] leading-tight text-titleColor sm:m-0 sm:text-[56px] lg:text-[80px]">
        Merry Christmas
      </h1>

      <img
        src={moonImage}
        alt="Home moon image"
        className="home__moon left-0 right-0 bottom-[160px] my-0 mx-auto w-[280px] sm:bottom-[190px] sm:w-[330px] md:bottom-[250px] 2md:bottom-[220px] 2md:w-[420px] lg:bottom-[30%]"
      />
      <img
        src={trineoSantaImage}
        alt="Home trineo santa image"
        className="home__trineo left-0 right-0 bottom-[230px] my-0 mx-auto w-[200px] sm:bottom-[280px] sm:w-[260px] md:bottom-[350px] 2md:bottom-[330px] 2md:w-[310px] lg:bottom-[48%]"
      />
      <img
        src={mountainImage3}
        alt="Home mountain three image"
        className="home__mountain3 bottom-[76px] w-full sm:bottom-[72px] 2md:bottom-[32px] lg:-bottom-[40px]"
      />
      <img
        src={mountainImage2}
        alt="Home mountain two image"
        className="home__mountain2 bottom-[56px] w-full sm:bottom-[56px] 2md:bottom-[24px] lg:-bottom-[30px]"
      />
      <img
        src={pineTreeImage}
        alt="Home pine tree image"
        className="home__pine left-0 right-0 bottom-[0] my-0 mx-auto w-[100%] 2md:-bottom-[40px] 2md:w-[80%] lg:-bottom-[86px] lg:w-[70%]"
      />
      <img
        src={villageImage}
        alt="Home village image"
        className="home__village bottom-4 left-0 right-0 my-0 mx-auto w-[230px] ssm:w-[280px] sm:w-[60%] 2md:-bottom-[16px] 2md:w-[50%] lg:-bottom-[30px] lg:w-[36%]"
      />
      <img
        src={snowImage}
        alt="Home snow image"
        className="bottom-0 left-0 right-0 w-full md:-bottom-5 2md:-bottom-[52px] lg:-bottom-[90px]"
      />
      <img
        src={mountainImage1}
        alt="Home mountain one image"
        className="home__mountain1 -bottom-[1px] left-0 right-0 w-full 2md:-bottom-[20px] lg:-bottom-[90px]"
      />

      <div className="absolute bottom-0 left-0 right-0 block w-full h-4 bg-gradient2" />
    </section>
  );
};

export default HomeSection;
