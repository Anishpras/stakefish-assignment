export type IProps = {
  exchangeListData: object[];
};
export type SingleExchangeDataObjectType = {
  name: string;
  id: string;
  country: string;
  url: string;
  image: string;
  trust_score_rank: number;
};
export type SingleExchangeType = {
  value: SingleExchangeDataObjectType;
  index: number;
  array: object[];
};
