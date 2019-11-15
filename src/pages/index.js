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

const HomePage = () => (
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
        <UpcomingShows />
      </PageSection>
      <TrinSideBySideImages />
      <PageSection id="songs">
        <h2>Songs</h2>
        <Break />
        <Songs />
      </PageSection>
      <ChordsImage />
    </main>
    <Footer />
  </Theme>
)

export default HomePage
