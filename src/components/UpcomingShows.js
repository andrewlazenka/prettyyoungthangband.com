import React from 'react'
import styled from 'styled-components'

import { ExternalLink } from './Links'

const ShowsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Show = styled.article`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
  justify-content: space-around;
`

function UpcomingShows({ shows }) {
  return (
    <ShowsContainer>
      {shows.map(({
          city,
          date,
          eventUrl,
          location,
          locationUrl,
          title,
        }) => (
          <>
            <Show>
              <ExternalLink to={eventUrl}>
                <h3>{title}</h3>
              </ExternalLink>
              <ExternalLink to={locationUrl}>{location}</ExternalLink>
              <span>
                {city} - {date}
              </span>
            </Show>
          </>
        )
      )}
    </ShowsContainer>
  )
}

export default UpcomingShows
