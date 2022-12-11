// eslint-disable-next-line @typescript-eslint/no-var-requires
const Fade = require('react-reveal/Fade');
import sendNightImage from '@/assets/imgs/send-night.png';
import sendGiftsImage from '@/assets/imgs/send-gifts.png';
import sendSantaImage from '@/assets/imgs/send-santa.png';
import snowImage from '@/assets/imgs/snow-img.png';
import { SendItemProps, SendProps } from './types';

const SendData: SendItemProps[] = [
  {
    id: 1,
    image: sendNightImage,
    title: 'Spend It With Family',
    description: 'Sharing with family is the best gift you can give.',
  },
  {
    id: 2,
    image: sendGiftsImage,
    title: 'Give Lots Of Love',
    description: 'Send a gift and a lot of love to those most in need.',
  },
  {
    id: 3,
    image: sendSantaImage,
    title: 'Share Good Wishes',
    description: 'Wish good messages to loved ones this Christmas.',
  },
];

const SendSection = ({ data = SendData }: SendProps) => {
  return (
    <section className="section" id="send">
      <h2 className="section__title">
        Send Love This <br />
        Christmas
      </h2>
      <div className="container relative grid grid-cols-[200px] justify-center gap-y-12 pt-6 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 md:gap-x-10 lg:gap-x-12">
        <Fade top cascade>
          {data.map(({ id, description, image, title }) => (
            <div className="flex flex-col items-center text-center" key={id}>
              <div className="mb-3 w-[200px] ssm:w-[240px] sm:w-auto">
                <img
                  src={image}
                  alt="Send night image"
                  className="object-cover"
                />
              </div>
              <h3 className="mb-2 text-sm md:text-base">{title}</h3>
              <p className="px-3 text-sm sm:px-4 md:px-2 2md:px-6">
                {description}
              </p>
            </div>
          ))}
        </Fade>
        <img
          src={snowImage}
          alt="send snow 1 image"
          className="absolute top-28 left-8 w-[50px] animate-animationSnow1 sm:-top-[4rem] md:left-[10rem] md:-top-[9rem]"
        />
        <img
          src={snowImage}
          alt="send snow 2 image"
          className="absolute bottom-[25rem] right-[2rem] w-[50px] animate-animationSnow2 sm:hidden"
        />
        <img
          src={snowImage}
          alt="send snow 3 image"
          className="absolute bottom-[9rem] left-[1.5rem] w-[50px] animate-animationSnow1 sm:bottom-[10rem] sm:left-[21rem] md:hidden"
        />
        <img
          src={snowImage}
          alt="send snow 4 image"
          className="absolute -top-[3rem] right-[12rem] hidden  w-[50px] animate-animationSnow2 md:block"
        />
      </div>

    </section>
  );
};

export default SendSection;
