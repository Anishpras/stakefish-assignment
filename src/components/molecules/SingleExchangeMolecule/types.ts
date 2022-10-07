export type SingleExchangeDataPropType = {
  name: string;
  id: string;
  country: string;
  url: string;
  image: string;
  trust_score_rank: number;
};

export type IProps = {
  key: string;
  singleExchange: SingleExchangeDataPropType;
};
