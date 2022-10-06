import Image from 'next/image';
import React from 'react';
type IProps = {
  singleExchangeDetailsResultData: object;
};
type SingleExchangeDetailProps = {
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
};
const SingleExchangeDetail = ({ singleExchangeDetailsResultData }: IProps) => {
  const {
    name,
    country,
    trust_score_rank,
    image,
    year_established,
    description,
    facebook_url,
    reddit_url,
    telegram_url,
    slack_url,
    twitter_handle,
  } = singleExchangeDetailsResultData as SingleExchangeDetailProps;
  return (
    <div>
      <h2>{name}</h2>
      <p>{country}</p>
      <p>{trust_score_rank}</p>
      <div>
        <Image src={image} alt={`${name} Image`} height="100" width="100" />
      </div>
      <p>{year_established}</p>
      <p>{description}</p>
    </div>
  );
};

export default SingleExchangeDetail;
