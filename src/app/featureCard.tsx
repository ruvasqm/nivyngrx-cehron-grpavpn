import React from "react";
import Pill from "./pill";

type Props = {
  pillText?: string;
  title: string;
  description: string;
};

const FeatureCard = ({pillText, title, description}: Props) => {
  return (
    <div className="flex flex-col gap-8 lg:px-56">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-4">
          {pillText && <Pill text={pillText} />}
          <h2 className="text-center text-3xl font-semibold text-primary lg:text-4xl">
            {title}
          </h2>
        </div>
        <p className="text-center text-lg font-normal text-tertiary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
