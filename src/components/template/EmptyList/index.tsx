import Link from 'next/link';
import React from 'react';

const EmptyList = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <h1 className="text-bold text-5xl">Sorry List is empty.</h1>
      <Link href="/">
        <p className="text-lg underline hover:cursor-pointer">
          Go back to main page.
        </p>
      </Link>
    </div>
  );
};

export default EmptyList;
