import PageChanger from '@/components/molecules/PageChanger';
import React from 'react';
import { IProps } from './types';

const SingleExchangeTemplate = ({ children, pageNumber }: IProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-4 rounded-md">
      <h1 className="text-3xl">Exchange List</h1>
      <div className="flex max-w-4xl flex-col gap-4">{children}</div>
      <PageChanger pageNumber={pageNumber} />
    </div>
  );
};

export default SingleExchangeTemplate;
