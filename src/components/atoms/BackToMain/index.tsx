import Link from 'next/link';
import React from 'react';

const BackToMain = ({ link }: { link: string }) => {
  return (
    <div className="container flex max-w-5xl items-start">
      <Link href={link}>
        <button className="flex items-center py-4 font-bold">
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 rotate-180"
            >
              <path
                d="M6.18182 11.4205L5.01136 10.2614L8.51705 6.75568H0V5.0625H8.51705L5.01136 1.5625L6.18182 0.397727L11.6932 5.90909L6.18182 11.4205Z"
                fill="#000"
              />
            </svg>
          </div>
          Go back to Main
        </button>
      </Link>
    </div>
  );
};

export default BackToMain;
