import React from "react";

const pill = ({text}: {text: string}) => {
  return (
    <div className="w-fit rounded-full border border-utility-brand px-3 py-1 text-sm font-medium text-utility-brand">
      <span>{text}</span>
    </div>
  );
};

export default pill;
