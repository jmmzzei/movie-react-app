import React from "react";
import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";

type GridProp = {
  header: string;
  children: any;
};

export const Grid: React.FC<GridProp> = ({ header, children }) => (
  <StyledGrid>
    <h1>{header}</h1>
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
);
