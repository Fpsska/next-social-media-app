'use client';

import React, { useState } from 'react';

import Image, { ImageProps } from 'next/image';

// /. IMPORTS

const imageStyles = {
  borderRadius: '50%',
  maxWidth: '100%',
  display: 'inline-block',
  verticalAlign: 'middle',
  objectFit: 'cover'
};

export const CustomImage: React.FC<Props> = (props) => {
  const { image, alt, width, height } = props;

  const [imageSource, setImageSource] = useState<string>(image);

  return (
    <Image
      src={imageSource}
      placeholder="blur"
      blurDataURL="assets/images/user-placeholder-avatar.png"
      style={{ ...imageStyles, width: `${width}px`, height: `${height}px` }}
      width={width}
      height={height}
      alt={alt}
      onError={() =>
        setImageSource('/assets/images/user-placeholder-avatar.png')
      }
    />
  );
};

type Props = Pick<ImageProps, 'priority' | 'alt'> & {
  image: string;
  width: number;
  height: number;
};
