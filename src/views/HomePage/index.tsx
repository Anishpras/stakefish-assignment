import SingleExchange from '@/components/organisms/SingleExchange';
import SingleExchangeMolecule from '@/components/molecules/SingleExchangeMolecule';
import React from 'react';

type IProps = {
  exchangeListData: object[];
};
type SingleExchangeDataObjectType = {
  name: string;
  id: string;
  country: string;
  url: string;
  image: string;
  trust_score_rank: number;
};
type SingleExchangeType = {
  value: SingleExchangeDataObjectType;
  index: number;
  array: object[];
};
const HomePage = ({ exchangeListData }: IProps) => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
