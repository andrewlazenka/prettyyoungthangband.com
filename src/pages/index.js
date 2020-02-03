import React from 'react'
import styled from 'styled-components'
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
import { ExternalLink } from '../components/Links'
// import UpcomingShows from '../components/UpcomingShows'

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

const FrameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const HomePage = () => (
  <Theme>
    <Helmet title="Pretty Young Thang" />
    <main>
      <section>
        <HeroBanner />
      </section>
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
          <ExternalLink to="https://prettyyoungthang.bandcamp.com/releases">
            Find us on Bandcamp
          </ExternalLink>
        </div>
        <Break />
        <Songs />
      </PageSection>
      <TrinSideBySideImages />
      <PageSection>
        <FrameWrapper>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/A5wcmKWODo8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Nobody's Babe Music Video"
          />
        </FrameWrapper>
      </PageSection>
      <ChordsImage />
      <PageSection>
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

export default HomePage
