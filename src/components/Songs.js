import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import Tooltip from '@reach/tooltip'
import '@reach/tooltip/styles.css'

import { ExternalLink } from '../components/Links'
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

const playerStyle = css`
  width: 300px;
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
              youtubeUrl
              bandcampUrl
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

  return songsInfo.map(({ name, url, bandcampUrl, youtubeUrl }) => {
    return (
      <Song key={name}>
        <h4>{name}</h4>
        <SongContents>
          {bandcampUrl &&
            <iframe
              title={name}
              style={{ border: 0, height: '42px' }}
              css={playerStyle}
              src="https://bandcamp.com/EmbeddedPlayer/track=3858596418/size=small/bgcol=333333/linkcol=e000a3/transparent=true"
              seamless
            >
              <a href={bandcampUrl}>
                {name} by Pretty Young Thang
              </a>
            </iframe>
          }
          {!bandcampUrl && url &&
            <audio controls css={playerStyle}>
              <source src={url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
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
        </SongContents>
      </Song>
    )})
  }

export default Songs
