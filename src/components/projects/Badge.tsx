import React from "react";

interface Props {
  name: string;
}

const Badge = ({ name }: Props) => {
  return (
    <span className="bg-mutedBlue text-softGray text-sm font-medium me-2 px-3 py-1 rounded-xl">
      {name}
    </span>
  );
};

export default Badge;
