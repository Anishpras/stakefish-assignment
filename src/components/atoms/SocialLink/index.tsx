import React from 'react';

type IProps = {
  name: string;
  value: string;
};

const SocialLink = ({ value, name }: IProps) => {
  return (
    <a href={value}>
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-600">{name}</p>
        <p className="text-md underline">{value || 'Not Available'}</p>
      </div>
    </a>
  );
};

export default SocialLink;
