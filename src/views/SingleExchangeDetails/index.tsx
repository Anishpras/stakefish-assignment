import BackToMain from '@/components/atoms/BackToMain';
import SingleExchangeDetail from '@/components/organisms/SingleExchangeDetail';
import Loading from '@/components/atoms/Loading';
import { calculateLinkToMainPage } from '@/lib/calculateLinkToMainPage';
import React from 'react';
import SingleExchangeDetailsTemplate from '@/components/template/SIngleExchangeDetailsTemplate';

type IProps = {
  name: string;
  country: string;
  trust_score_rank: number;
  image: string;
  year_established: number;
  description: string;
  facebook_url: string;
  reddit_url: string;
  telegram_url: string;
  slack_url: string;
  twitter_handle: string;
  singleExchangeDetailsResultData: object;
};

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
