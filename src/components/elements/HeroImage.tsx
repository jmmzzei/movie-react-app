import React, { FC } from "react";
import { StyledHeroImage } from "../styles/StyledHeroImage";

type HeroImageProps = {
  image: string;
  text: string;
  title: string;
};

export const HeroImage: FC<HeroImageProps> = ({ image, text, title }) => (
  <StyledHeroImage image={image}>
    <>
      <div className="heroimage-content">
        <div className="heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  </StyledHeroImage>
);
