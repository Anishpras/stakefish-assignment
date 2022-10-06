import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type SingleExchangeDataPropType = {
  name: string;
  id: string;
  country: string;
  url: string;
  image: string;
  trust_score_rank: number;
};

type IProps = {
  key: string;
  singleExchange: SingleExchangeDataPropType;
};

function SingleExchangeMolecule({
  singleExchange: { id, name, country, url, image, trust_score_rank },
}: IProps) {
  return (
    <a href={`/exchange/${id}`} target="_blank" rel="noreferrer noopener">
      <div className="flex flex-col md:flex-row h-full w-full rounded-md border border-dashed border-black bg-gray-300 bg-opacity-30 p-4 hover:cursor-pointer">
        <div className="flex md:flex-col items-center justify-center">
          <p>Rank</p>
          <div className="md:border-r-2  border-black p-4">
            <div className="rounded-lg border border-dashed bg-white bg-opacity-70 p-4">
              <p>{trust_score_rank}</p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col items-center justify-center">
          <p>Logo</p>
          <div className="p-[2.1rem]">
            <div className="h-6 w-6">
              <Image
                src={image}
                height="50"
                width="50"
                alt={`Logo of ${name}`}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="flex md:w-80 md:flex-col items-center justify-center">
          <p>Name</p>
          <div className="p-7">
            <p className="text-center text-xl">{name}</p>
          </div>
        </div>
        <div className="flex md:w-56 md:flex-col items-center justify-center">
          <p>Country</p>
          <div className="p-7">
            <p>{country === null ? `Not Available` : `${country}`}</p>
          </div>
        </div>
        <div className="flex md:flex-col items-center justify-center">
          <p>Website</p>
          <div className="p-7 hover:cursor-pointer">
            {url === null ? (
              <p>Not Available</p>
            ) : (
              <Link href={url}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}

export default SingleExchangeMolecule;
