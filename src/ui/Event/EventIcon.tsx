import React from 'react';

interface Props {
  src: string;
}

export const EventIcon: React.FC<Props> = ({ src }) => {
  return <img src={src} alt="" />;
};
