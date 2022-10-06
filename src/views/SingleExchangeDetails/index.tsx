import BackToMain from '@/componentsatoms/BackToMain';
import SingleExchangeDetail from '@/componentsorganisms/SingleExchangeDetail';
import { calculateLinkToMainPage } from '@/libcalculateLinkToMainPage';
import React from 'react';

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
  console.log(singleExchangeDetailsResultData);
  return (
    <div>
      <BackToMain link={calculateLinkToMainPage(trust_score_rank)} />
      <h1>Single Exchange Details</h1>
      <SingleExchangeDetail
        singleExchangeDetailsResultData={
          singleExchangeDetailsResultData as IProps
        }
      />
    </div>
  );
};

export default SingleExchangeDetails;
