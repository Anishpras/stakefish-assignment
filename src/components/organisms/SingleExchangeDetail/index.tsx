import SingleExchangePageBasicDetail from '@/componentsatoms/SingleExchangePageBasicDetails';
import SocialLink from '@/componentsatoms/SocialLink';
import Image from 'next/image';
import React from 'react';
import { IProps, SingleExchangeDetailProps } from './types';

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
  const basicExchangeDetail = [
    { name: 'Exchange Name - ', value: name },
    { name: 'Country - ', value: country },
    { name: 'Trust Score Rank - ', value: trust_score_rank },
    { name: 'Year Established - ', value: year_established },
  ];
  const exchangeSocialLinks = [
    { name: 'Facebook - ', value: facebook_url },
    { name: 'Reddit - ', value: reddit_url },
    { name: 'Telegram - ', value: telegram_url },
    { name: 'Slack - ', value: slack_url },
    { name: 'Twitter - ', value: `https://twitter.com/${twitter_handle}` },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-col items-center justify-evenly gap-4 md:flex-row">
        <div>
          <Image
            className="rounded-full"
            src={image}
            alt={`${name} Image`}
            height="200"
            width="200"
          />
        </div>
        <div>
          {basicExchangeDetail.map((singleExchangeDetail) => {
            const { name, value } = singleExchangeDetail;
            return (
              <SingleExchangePageBasicDetail
                key={name}
                name={name}
                value={value}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-600">Description -</p>
        <p>{description || 'Not Available'}</p>
      </div>
      <div>
        <p>Social Links -</p>
        <div>
          {exchangeSocialLinks.map((singleExchangeSocialLink) => {
            const { name, value } = singleExchangeSocialLink;
            return <SocialLink key={name} name={name} value={value} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleExchangeDetail;
