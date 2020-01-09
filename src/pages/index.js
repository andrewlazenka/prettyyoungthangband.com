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
        <h2>Songs</h2>
        <Break />
        <Songs />
      </PageSection>
      <TrinSideBySideImages />
      <PageSection>
        <div
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScsYfl9SrUtURHr52G_36pGGw6ue_FjRJMH5Ufl0snW3ku1PQ/viewform?embedded=true"
            width="640"
            height="677"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Pretty Young Thang - Contact Us"
          >
            Loading…
          </iframe>
        </div>
      </PageSection>
      <ChordsImage />
    </main>
    <Footer />
  </Theme>
)

export default HomePage
