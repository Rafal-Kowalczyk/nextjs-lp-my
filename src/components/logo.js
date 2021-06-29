import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Logo() {
  return (
    <div>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={'/images/logo.svg'} alt='Logo' width={100} height={40} />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
