import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import Tooltip from '@reach/tooltip'
import '@reach/tooltip/styles.css'

import { ExternalLink } from '../components/Links'
import AppleLogo from '../assets/svg/apple.inline.svg'
import BandcampLogo from '../assets/svg/bandcamp.inline.svg'
import SpotifyLogo from '../assets/svg/spotify.inline.svg'
import YouTubeLogo from '../assets/svg/youtube.inline.svg'

const Song = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;

  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
`

const SongContents = styled.span`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`

const SocialLogo = css`
  height: 36px;
  width: 36px;
  transition: fill 150ms ease-in-out;

  @media only screen and (max-width: 500px) {
    height: 24px;
    width: 24px;
  }
`

function Songs() {
  const data = useStaticQuery(graphql`
    query Songs {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/songs/*.md" } }
      ) {
        edges {
          node {
            frontmatter {
              type
              name
              url
              appleMusicUrl
              youtubeUrl
              bandcampUrl
              spotifyUrl
              published
            }
          }
        }
      }
    }
  `)

  const songsInfo = data.allMarkdownRemark.edges
    .map(({ node }) => node.frontmatter)
    .filter(({ published }) => published === true)
    .sort((s1, s2) => s1.name > s2.name ? 1 : -1)

  return songsInfo.map(({ name, appleMusicUrl, bandcampUrl, youtubeUrl, spotifyUrl }) => {
    return (
      <Song key={name}>
        <h4>{name}</h4>
        <SongContents>
          {spotifyUrl &&
            <Tooltip label="Listen on Spotify">
              <span style={{ paddingLeft: 18, paddingTop: 18 }}>
                <ExternalLink to={spotifyUrl}>
                  <SpotifyLogo css={SocialLogo} />
                </ExternalLink>
              </span>
            </Tooltip>
          }
          {spotifyUrl &&
            <Tooltip label="Listen on Apple Music">
              <span style={{ paddingLeft: 18, paddingTop: 18 }}>
                <ExternalLink to={appleMusicUrl}>
                  <AppleLogo css={SocialLogo} />
                </ExternalLink>
              </span>
            </Tooltip>
          }
          {bandcampUrl &&
            <Tooltip label="Listen on Bandcamp">
              <span style={{ paddingLeft: 18, paddingTop: 18 }}>
                <ExternalLink to={bandcampUrl}>
                  <BandcampLogo css={SocialLogo} />
                </ExternalLink>
              </span>
            </Tooltip>
          }
          {youtubeUrl &&
            <Tooltip label="Watch on YouTube">
              <span style={{ paddingLeft: 18, paddingTop: 18 }}>
                <ExternalLink to={youtubeUrl}>
                  <YouTubeLogo css={SocialLogo} />
                </ExternalLink>
              </span>
            </Tooltip>
          }
          {/* {!bandcampUrl && url &&
            <audio controls css={playerStyle}>
              <source src={url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          } */}
        </SongContents>
      </Song>
    )})
  }

export default Songs
