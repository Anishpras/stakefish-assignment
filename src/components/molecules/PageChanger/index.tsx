import BackArrowButton from '@/components/atoms/BackArrowButton';
import ForwardArrowButton from '@/components/atoms/ForwardArrowButton';
import Link from 'next/link';
import React from 'react';

type Props = {
  pageNumber: number | undefined;
};

const PageChanger = ({ pageNumber }: Props) => {
  if (pageNumber) {
    return (
      <div className="py-10 ">
        <Link href={pageNumber !== 2 ? `/exchanges/${pageNumber - 1}` : `/`}>
          <button className="mx-4 rounded-lg bg-gray-200 p-2 ">
            <BackArrowButton />
          </button>
        </Link>
        {pageNumber.toString()}
        <Link href={`/exchanges/${pageNumber + 1}`}>
          <button className="mx-4 rounded-lg bg-gray-200 p-2 ">
            <ForwardArrowButton />
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="py-10 ">
        {1}
        <Link href="/exchanges/2">
          <button className="mx-4 rounded-lg bg-gray-200 p-2 ">
            <ForwardArrowButton />
          </button>
        </Link>
      </div>
    );
  }
};
export default PageChanger;
