import React from 'react';
import Pill from './pill';

type Props = {
  pillText: string;
  title: string;
  description: string;
};

const FeatureCard = ({ pillText, title, description }: Props) => {
  return (
    <div className="flex flex-col gap-8 lg:px-56">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-4">
          <Pill text={pillText} />
          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-primary">
            {title}
          </h2>
        </div>
        <p className="text-center text-tertiary font-normal text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
