import React from "react";

interface INotFound {
  default: boolean;
}

export const NotFound: React.FC<INotFound> = ({ default: boolean }) => (
  <div>Nothing found here</div>
);
