import React from 'react';

type IProps = {
  exchangeListData: object[];
};

const HomePage = ({ exchangeListData }: IProps) => {
  console.log(exchangeListData);
  return <div>HomePage</div>;
};

export default HomePage;
