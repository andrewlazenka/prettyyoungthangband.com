import React from 'react'
import styled from 'styled-components'

const Song = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`

const Songs = ({ songs }) => songs.map(({ name, url }) => (
  <Song>
    <h4>{name}</h4>
    <audio controls>
      <source src={url} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </Song>
))

export default Songs
