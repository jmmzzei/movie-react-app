import React, { FC } from "react";

interface INotFound {
  default: boolean;
}

export const NotFound: FC<INotFound> = ({ default: boolean }) => (
  <div>Nothing found here</div>
);
