import React from 'react'
import { StyledHeroImage } from '../styles/StyledHeroImage'

export default ({ image, text, title }) => (
    <StyledHeroImage image={image}>
        <div className="heroimage-content">
            <div className="heroimage-text">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    </StyledHeroImage>
)