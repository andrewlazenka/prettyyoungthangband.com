import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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

  return songsInfo.map(({ name, url }) => {
    return (
      <Song>
        <h4>{name}</h4>
        <audio controls>
          <source src={url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </Song>
    )})
  }

export default Songs
