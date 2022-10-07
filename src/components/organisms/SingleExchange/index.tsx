import PageChanger from '@/components/molecules/PageChanger';
import { useRouter } from 'next/router';
import React from 'react';

function SingleExchange({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  let pageNumber;
  if (router.query.page !== undefined) {
    pageNumber = parseInt(router.query.page as string);
  }

  return (
    <div className="flex h-full w-full flex-col items-center gap-4 rounded-md">
      <h1 className="text-3xl">Exchange List</h1>
      <div className="flex max-w-4xl flex-col gap-4">{children}</div>
      <PageChanger pageNumber={pageNumber} />
    </div>
  );
}

export default SingleExchange;
