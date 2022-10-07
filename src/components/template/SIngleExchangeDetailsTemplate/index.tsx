import React from 'react';

type IProps = {
  children: React.ReactNode;
};

const SingleExchangeDetailsTemplate = ({ children }: IProps) => {
  return (
    <div className="flex w-full max-w-5xl flex-col p-10">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default SingleExchangeDetailsTemplate;
