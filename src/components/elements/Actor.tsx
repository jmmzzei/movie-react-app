import React from "react";
import NoImage from "../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { StyledActor } from "../styles/StyledActor";

interface IActor {
  actor: {
    name: string;
    profile_path: string;
    character: string;
  };
}

export const Actor: React.FC<IActor> = ({ actor }) => (
  <StyledActor>
    <img
      alt="actor-thumb"
      src={
        actor.profile_path
          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
          : NoImage
      }
    />
    <span className="actor-name">{actor.name}</span>
    <span className="actor-character">{actor.character}</span>
  </StyledActor>
);
