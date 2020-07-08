import React, { FC } from "react";
import { Link } from "@reach/router";
import { StyledNavigation } from "../styles/StyledNavigation";

type NavProps = {
  movie: string;
};

export const Navigation: FC<NavProps> = ({ movie }) => (
  <StyledNavigation>
    <div className="navigation-content">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>|</p>
      <p>{movie}</p>
    </div>
  </StyledNavigation>
);
