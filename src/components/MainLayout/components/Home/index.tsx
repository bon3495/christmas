import clsx from 'clsx';
import { useLayoutEffect, useRef } from 'react';
import Relax from 'rellax';
import { gsap } from "gsap";

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
  const homeRef = useRef<HTMLElement | null>(null)
  const moonRef = useRef<HTMLImageElement | null>(null)
  const trineoSantaRef = useRef<HTMLImageElement | null>(null)
  const mountain1Ref = useRef<HTMLImageElement | null>(null)
  const mountain2Ref = useRef<HTMLImageElement | null>(null)
  const mountain3Ref = useRef<HTMLImageElement | null>(null)
  const pineTreeRef = useRef<HTMLImageElement | null>(null)
  const villageRef = useRef<HTMLImageElement | null>(null)
  const snowRef = useRef<HTMLImageElement | null>(null)

  useLayoutEffect(() => {
    if (!moonRef.current) return;
    new Relax(moonRef.current, {
      speed: -15,
    })
    if (!trineoSantaRef.current) return;
    new Relax(trineoSantaRef.current, {
      speed: -3,
    })
    if (!mountain2Ref.current) return;
    new Relax(mountain2Ref.current, {
      speed: -8,
    })
    if (!mountain3Ref.current) return;
    new Relax(mountain3Ref.current, {
      speed: -8,
    })
    if (!pineTreeRef.current) return;
    new Relax(pineTreeRef.current, {
      speed: -10,
    })
    if (!villageRef.current) return;
    new Relax(villageRef.current, {
      speed: -10,
    })
    const ctx = gsap.context(() => {
      gsap.from('.home__title', {
        opacity: 0,
        y: -60,
        delay: 0.8,
        duration: 1.2
      })
      gsap.from('.home__moon', {
        opacity: 0,
        y: 200,
        delay: 0.8,
        duration: 1.2
      })
      gsap.from('.home__trineo', {
        opacity: 0,
        y: -200,
        delay: 0.8,
        duration: 1.2
      })
      gsap.from('.home__mountain3', {
        opacity: 0,
        y: -150,
        delay: 0.6,
        duration: 1.2
      })
      gsap.from('.home__mountain2', {
        opacity: 0,
        y: 150,
        delay: 0.5,
        duration: 1.2
      })
      gsap.from('.home__pine', {
        opacity: 0,
        y: 150,
        delay: 0.3,
        duration: 1.2
      })
      gsap.from('.home__village', {
        opacity: 0,
        y: 100,
        delay: 0.1,
        duration: 1.2
      })
      gsap.from('.home__mountain1', {
        opacity: 0,
        y: 250,
        delay: 0.7,
        duration: 1.2
      })
    }, homeRef)

    return () => ctx.revert();
  }, [])

  return (
    <section
      className={clsx(
        'relative h-[80vh] md:h-screen overflow-hidden bg-gradient1 pt-16',
        classes.home
      )}
      id="home"
      ref={homeRef}
    >
      <h1 className="home__title section__title mt-6 text-center font-dancing text-[48px] sm:text-[56px] sm:m-0 leading-tight text-titleColor lg:text-[80px]">
        Merry Christmas
      </h1>

      <img
        src={moonImage}
        alt="Home moon image"
        className="home__moon left-0 right-0 bottom-[160px] my-0 mx-auto w-[280px] sm:w-[330px] sm:bottom-[190px] md:bottom-[250px] 2md:bottom-[220px] 2md:w-[420px] lg:bottom-[30%]"
        ref={moonRef}
      />
      <img
        src={trineoSantaImage}
        alt="Home trineo santa image"
        className="home__trineo left-0 right-0 bottom-[230px] my-0 mx-auto w-[200px] sm:bottom-[280px] sm:w-[260px] md:bottom-[350px] 2md:bottom-[330px] 2md:w-[310px] lg:bottom-[48%]"
        ref={trineoSantaRef}
      />
      <img
        src={mountainImage3}
        alt="Home mountain three image"
        className="home__mountain3 w-full bottom-[76px] sm:bottom-[72px] 2md:bottom-[32px] lg:-bottom-[40px]"
        ref={mountain3Ref}

      />
      <img
        src={mountainImage2}
        alt="Home mountain two image"
        className="home__mountain2 w-full bottom-[56px] sm:bottom-[56px] 2md:bottom-[24px] lg:-bottom-[30px]"
        ref={mountain2Ref}

      />
      <img
        src={pineTreeImage}
        alt="Home pine tree image"
        className="home__pine left-0 right-0 my-0 mx-auto w-[100%] bottom-[0] 2md:w-[80%] 2md:-bottom-[40px] lg:-bottom-[86px] lg:w-[70%]"
        ref={pineTreeRef}
      />
      <img
        src={villageImage}
        alt="Home village image"
        className="home__village bottom-4 left-0 right-0 my-0 mx-auto w-[230px] ssm:w-[280px] sm:w-[60%] 2md:w-[50%] 2md:-bottom-[16px] lg:-bottom-[30px] lg:w-[36%]"
        ref={villageRef}
      />
      <img
        src={snowImage}
        alt="Home snow image"
        className="bottom-0 left-0 right-0 w-full 2md:-bottom-[52px] md:-bottom-5 lg:-bottom-[90px]"
        ref={snowRef}
      />
      <img
        src={mountainImage1}
        alt="Home mountain one image"
        className="home__mountain1 -bottom-[1px] left-0 right-0 w-full 2md:-bottom-[20px] lg:-bottom-[90px]"
        ref={mountain1Ref}
      />
    </section>
  );
};

export default HomeSection;
