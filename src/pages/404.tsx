import Link from 'next/link';
import React from 'react';

const FourOFour = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <h1 className="text-5xl">Welcome to the world of Errors</h1>
      <Link href="/">
        <p className="underline hover:cursor-pointer">Go Back to Main Screen</p>
      </Link>
    </div>
  );
};

export default FourOFour;
