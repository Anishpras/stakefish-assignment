import BackToMain from '@/components/atoms/BackToMain';
import SingleExchangeDetail from '@/components/organisms/SingleExchangeDetail';
import Loading from '@/components/atoms/Loading';
import { calculateLinkToMainPage } from '@/lib/calculateLinkToMainPage';
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
  if (singleExchangeDetailsResultData) {
    return (
      <div className="flex w-full max-w-5xl flex-col p-10">
        <div className="w-full">
          <BackToMain link={calculateLinkToMainPage(trust_score_rank)} />

          <SingleExchangeDetail
            singleExchangeDetailsResultData={
              singleExchangeDetailsResultData as IProps
            }
          />
        </div>
      </div>
    );
  }
  return <Loading />;
};

export default SingleExchangeDetails;
