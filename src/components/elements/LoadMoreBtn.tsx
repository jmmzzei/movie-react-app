import React from "react";
import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";

export default ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
);
