import React from 'react';

type IProps = {
  name: string;
  value: string;
};

const SocialLink = ({ value, name }: IProps) => {
  if (value) {
    return (
      <a href={value}>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600">{name}</p>
          <p className="text-md underline">{value || 'Not Available'}</p>
        </div>
      </a>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm text-gray-600">{name}</p>
      <p className="text-md">Not Available</p>
    </div>
  );
};

export default SocialLink;
