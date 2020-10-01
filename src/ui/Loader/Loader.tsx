import React from 'react';

import './loader.css';

interface Props {}

export const Loader: React.FC<Props> = () => {
  return (
    <div className="progress">
      <div className="indeterminate"> </div>
    </div>
  );
};
