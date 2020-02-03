import React from 'react'
import styled from 'styled-components'

import BandPhoto from '../assets/img/GuitarsAndBars.jpg'
import ChordsPhoto from '../assets/img/Chordzilla.png'
import IsaacPhoto from '../assets/img/SuperSaiyanIsaac.jpg'
import VibesPhoto from '../assets/img/VibesAtTrin.jpg'

const FeaturedImage = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: ${props => props.variant === 'side' ? 'inherit' : '60vh'};
  width: ${props => props.variant === 'side' ? '50%' : '100%'};
  ${props => props.variant === 'side' ? 'position: absolute;' : ''}

  ${props => {
    if (props.variant === 'side') {
      if (props.side === 'right') {
        return 'right: 0;'
      } else if (props.side === 'left') {
        return 'left: 0;'
      }
    }
  }}

  @media only screen and (max-width: 768px) {
    height: 50vh;
  }

  @media only screen and (max-width: 500px) {
    height: 40vh;
  }
`

const SideBySideImages = styled.div`
  height: 60vh;
  width: 100%;
  position: relative;

  @media only screen and (max-width: 768px) {
    height: 50vh;
  }

  @media only screen and (max-width: 500px) {
    height: 40vh;
  }
`

export const BandImage = () => <FeaturedImage backgroundImage={BandPhoto} />
export const ChordsImage = () => <FeaturedImage backgroundImage={ChordsPhoto} />

export const TrinSideBySideImages = () => (
  <SideBySideImages>
    <FeaturedImage variant='side' side='left' backgroundImage={VibesPhoto} />
    <FeaturedImage variant='side' side='right' backgroundImage={IsaacPhoto} />
  </SideBySideImages>
)
