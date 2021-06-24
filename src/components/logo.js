import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Logo() {
  return (
    <div>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={'/images/logo.png'} alt='Logo' width={80} height={30} />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
