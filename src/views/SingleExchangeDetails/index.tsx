import React from 'react';

type IProps = {
  singleExchangeDetailsResultData: object[];
};

const SingleExchangeDetails = ({ singleExchangeDetailsResultData }: IProps) => {
  console.log(singleExchangeDetailsResultData);
  return <div>SingleExchangeDetails</div>;
};

export default SingleExchangeDetails;
