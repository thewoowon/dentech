import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav className='flex justify-between items-center'>
      <div className='relative w-[243px] h-[33px]'>
        <Link href={"/"}>
          <Image className='cursor-pointer' layout='fill' alt="dentium tech" src={"/images/logo.svg"}></Image>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
