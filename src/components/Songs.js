import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import Tooltip from '@reach/tooltip'
import '@reach/tooltip/styles.css'

import { ExternalLink } from './Links'
import useFadeIn from './FadeIn'
import AppleLogo from '../assets/svg/apple.inline.svg'
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

  /* @media only screen and (max-width: 450px) {
    flex-direction: column;
  } */
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

const Break = styled.hr`
  margin: 20px 0px;
  background: #000;
  height: 1px;
  border: none;
  width: 100%;
  opacity: 20%;
`

const SongInfo = ({
  name,
  appleMusicUrl,
  youtubeUrl,
  spotifyUrl,
  lastSong,
}) => {
  const [songTitleFadeStyle, titleDomRef] = useFadeIn(1.5, 'left')
  const [songLinksFadeStyle, linksDomRef] = useFadeIn(1.5, 'right')
  const iconContainerStyle = { paddingLeft: 8, paddingRight: 8 }

  return (
    <>
      <Song>
        <h4 ref={titleDomRef} css={songTitleFadeStyle}>
          {name}
        </h4>
        <div ref={linksDomRef} css={songLinksFadeStyle}>
          <SongContents>
            {spotifyUrl && (
              <Tooltip label="Listen on Spotify">
                <span style={iconContainerStyle}>
                  <ExternalLink to={spotifyUrl}>
                    <SpotifyLogo css={SocialLogo} />
                  </ExternalLink>
                </span>
              </Tooltip>
            )}
            {appleMusicUrl && (
              <Tooltip label="Listen on Apple Music">
                <span style={iconContainerStyle}>
                  <ExternalLink to={appleMusicUrl}>
                    <AppleLogo css={SocialLogo} />
                  </ExternalLink>
                </span>
              </Tooltip>
            )}
            {youtubeUrl && (
              <Tooltip label="Watch on YouTube">
                <span style={iconContainerStyle}>
                  <ExternalLink to={youtubeUrl}>
                    <YouTubeLogo css={SocialLogo} />
                  </ExternalLink>
                </span>
              </Tooltip>
            )}
          </SongContents>
        </div>
      </Song>
      {!lastSong && <Break />}
    </>
  )
}

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
    .sort((s1, s2) => (s1.name > s2.name ? 1 : -1))

  return songsInfo.map((info, i) => {
    const lastSong = i === songsInfo.length - 1
    return <SongInfo key={info.name} lastSong={lastSong} {...info} />
  })
}

export default Songs
