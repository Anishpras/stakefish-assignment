import BackToMain from '@/components/atoms/BackToMain';
import SingleExchangeDetail from '@/components/organisms/SingleExchangeDetail';
import Loading from '@/components/atoms/Loading';
import { calculateLinkToMainPage } from '@/lib/calculateLinkToMainPage';
import React from 'react';
import SingleExchangeDetailsTemplate from '@/components/template/SIngleExchangeDetailsTemplate';
import { IProps } from './types';

const SingleExchangeDetails = ({ singleExchangeDetailsResultData }: IProps) => {
  const { trust_score_rank } = singleExchangeDetailsResultData as IProps;
  if (singleExchangeDetailsResultData) {
    return (
      <SingleExchangeDetailsTemplate>
        <BackToMain link={calculateLinkToMainPage(trust_score_rank)} />

        <SingleExchangeDetail
          singleExchangeDetailsResultData={
            singleExchangeDetailsResultData as IProps
          }
        />
      </SingleExchangeDetailsTemplate>
    );
  }
  return <Loading />;
};

export default SingleExchangeDetails;
