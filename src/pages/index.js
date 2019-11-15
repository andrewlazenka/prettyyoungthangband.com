import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import {
  BandImage,
  ChordsImage,
  TrinSideBySideImages,
} from '../components/FeaturedImages'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import Songs from '../components/Songs'
import Theme from '../components/Theme'
import UpcomingShows from '../components/UpcomingShows'

const PageSection = styled.section`
  width: 90%;
  padding: 2.5% 2.5% 5% 2.5%;
  max-width: 1150px;
  margin: 0 auto;
`

const Break = styled.hr`
  margin: 20px 0px;
  background: #000;
  height: 1px;
  border: none;
  width: 100%;
`

function HomePage({ data }) {
  const { shows, songs } = data

  const songsInfo = songs.edges
    .map(({ node }) => node.frontmatter)
    .filter(({ published }) => published === true)

  const showsInfo = shows.edges
    .map(({ node }) => node.frontmatter)

  return (
    <Theme>
      <Helmet title="Pretty Young Thang" />
      <main>
        <section>
          <HeroBanner />
        </section>
        <BandImage />
        <PageSection id="shows">
          <h2>Upcoming Shows</h2>
          <Break />
          <UpcomingShows shows={showsInfo} />
        </PageSection>
        <TrinSideBySideImages />
        <PageSection id="songs">
          <h2>Songs</h2>
          <Break />
          <Songs songs={songsInfo} />
        </PageSection>
        <ChordsImage />
      </main>
      <Footer />
    </Theme>
  )
}

export default HomePage

export const pageQuery = graphql`
  {
    songs: allMarkdownRemark(
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
    shows: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/shows/*.md" } }
    ) {
      edges {
        node {
          frontmatter {
            eventUrl
            city
            date
            location
            locationUrl
            title
          }
        }
      }
    }
  }
`
