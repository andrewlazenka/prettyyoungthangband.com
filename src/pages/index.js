import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import {
  BandImage,
  ChordsImage,
  TrinSideBySideImages,
} from '../components/FeaturedImages'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import { A } from '../components/Links'
import Head from '../components/Head'
import Songs from '../components/Songs'
import Theme from '../components/Theme'
// import UpcomingShows from '../components/UpcomingShows'

const PageSection = styled.section`
  width: 90%;
  padding: 2.5% 2.5% 2.5% 2.5%;
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

const FrameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.children.length > 1 ? 'space-between' : 'center'};
  flex-wrap: wrap;
`

const FeaturedVideo = ({ src, title = 'Frame Title' }) => (
  <iframe
    width="560"
    height="315"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ margin: '0 auto', paddingBottom: 16 }}
    src={src}
    title={title}
  />
)

const HomePage = ({ data }) => (
  <Theme>
    <Head />
    <HeroBanner />
    <main style={{ background: '#eee' }}>
      <BandImage />
      {/* <PageSection id="shows">
        <h2>Upcoming Shows</h2>
        <Break />
        <UpcomingShows />
      </PageSection> */}
      <PageSection id="songs">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2 style={{ margin: 0 }}>Songs</h2>
          <A to="spotify:artist:6npRHU3Tz5dAPa4AGKBG3w">Listen on Spotify</A>
        </div>
        <Break />
        <Songs />
      </PageSection>
      <TrinSideBySideImages />
      <PageSection id="featured-video">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2 style={{ margin: 0 }}>Featured Videos</h2>
        </div>
        <Break />
        <FrameWrapper>
          <FeaturedVideo
            src="https://www.youtube.com/embed/WLHFvKTXRPQ"
            title="March of the Degenerates Music Video"
          />
          <FeaturedVideo
            src="https://www.youtube.com/embed/F-cTTZZMuz8"
            title="Walking Out on Your Financials Music Video"
          />
        </FrameWrapper>
      </PageSection>
      <ChordsImage />
      <PageSection id="contact-us">
        <FrameWrapper>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScsYfl9SrUtURHr52G_36pGGw6ue_FjRJMH5Ufl0snW3ku1PQ/viewform?embedded=true"
            width="640"
            height="725"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Pretty Young Thang - Contact Us"
          >
            Loading…
          </iframe>
        </FrameWrapper>
      </PageSection>
    </main>
    <Footer />
  </Theme>
)

export const query = graphql`
  query SiteTitle {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`

export default HomePage
