import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full"
    />
  );
};

export default Avatar;
