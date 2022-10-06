import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function SingleExchange({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  let pageNumber;
  if (router.query.page !== undefined) {
    pageNumber = parseInt(router.query.page as string);
  }

  return (
    <div className="flex h-full w-full flex-col items-center gap-4 rounded-md border bg-gray-300 bg-opacity-30">
      <h1 className="text-3xl">Exchange List</h1>
      <div className="flex max-w-3xl flex-col gap-4">{children}</div>
      {pageNumber ? (
        <div className="py-10 ">
          <Link href={pageNumber !== 2 ? `/exchanges/${pageNumber - 1}` : `/`}>
            <button className="mx-4 rounded-lg bg-gray-200 p-2 ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  d="M6.18182 11.4205L5.01136 10.2614L8.51705 6.75568H0V5.0625H8.51705L5.01136 1.5625L6.18182 0.397727L11.6932 5.90909L6.18182 11.4205Z"
                  fill="#666666"
                />
              </svg>
            </button>
          </Link>
          {pageNumber.toString()}
          <Link href={`/exchanges/${pageNumber + 1}`}>
            <button className="mx-4 rounded-lg bg-gray-200 p-2 ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.18182 11.4205L5.01136 10.2614L8.51705 6.75568H0V5.0625H8.51705L5.01136 1.5625L6.18182 0.397727L11.6932 5.90909L6.18182 11.4205Z"
                  fill="#666666"
                />
              </svg>
            </button>
          </Link>
        </div>
      ) : (
        <div className="py-10 ">
          {1}
          <Link href="/exchanges/2">
            <button className="mx-4 rounded-lg bg-gray-200 p-2 ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.18182 11.4205L5.01136 10.2614L8.51705 6.75568H0V5.0625H8.51705L5.01136 1.5625L6.18182 0.397727L11.6932 5.90909L6.18182 11.4205Z"
                  fill="#666666"
                />
              </svg>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default SingleExchange;
