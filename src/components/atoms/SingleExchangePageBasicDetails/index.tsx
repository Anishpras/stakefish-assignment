import React from 'react';
import { IProps } from './types';

const SingleExchangePageBasicDetail = ({ name, value }: IProps) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm text-gray-600">{name}</p>
      <p>{value || 'Not Available'}</p>
    </div>
  );
};

export default SingleExchangePageBasicDetail;
