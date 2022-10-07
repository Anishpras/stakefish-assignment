import SingleExchangeTemplate from '@/components/template/SingleExchangeTemplate';
import { useRouter } from 'next/router';
import React from 'react';

function SingleExchange({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  let pageNumber;
  if (router.query.page !== undefined) {
    pageNumber = parseInt(router.query.page as string);
  }

  return (
    <SingleExchangeTemplate pageNumber={pageNumber}>
      {children}
    </SingleExchangeTemplate>
  );
}

export default SingleExchange;
