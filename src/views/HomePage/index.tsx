import SingleExchange from '@/components/organisms/SingleExchange';
import SingleExchangeMolecule from '@/components/molecules/SingleExchangeMolecule';
import React from 'react';
import Loading from '@/components/atoms/Loading';
import {
  IProps,
  SingleExchangeDataObjectType,
  SingleExchangeType,
} from './types';
import EmptyList from '@/components/template/EmptyList';

const HomePage = ({ exchangeListData }: IProps) => {
  if (exchangeListData.length != 0) {
    return (
      <SingleExchange>
        {exchangeListData.map(
          (singleExchange: SingleExchangeType | unknown) => {
            const { id } = singleExchange as SingleExchangeDataObjectType;
            return (
              <SingleExchangeMolecule
                key={id}
                singleExchange={singleExchange as SingleExchangeDataObjectType}
              />
            );
          }
        )}
      </SingleExchange>
    );
  }
  if (exchangeListData.length === 0) {
    return <EmptyList />;
  }
  return <Loading />;
};

export default HomePage;
