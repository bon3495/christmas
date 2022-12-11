import clsx from 'clsx';
import { SnowImageProps } from './types';
import snowImage from '@/assets/imgs/snow-img.png';

const SnowImage = (props: SnowImageProps) => {
  const { className, image = snowImage, alt } = props;
  return (
    <img
      src={image}
      alt={alt}
      className={clsx('absolute w-[50px]', className)}
    />
  );
};

export default SnowImage;
