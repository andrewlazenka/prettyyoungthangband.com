import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import {
  BandImage,
  ChordsImage,
  TrinSideBySideImages,
} from '../components/FeaturedImages'
import PYTLogo from '../assets/img/PrettyYoungThangLogo.png'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import Songs from '../components/Songs'
import Theme from '../components/Theme'
import { A } from '../components/Links'
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
  justify-content: ${props => props.children.length > 1 ? 'space-between' : 'center'};
  flex-wrap: wrap;
`

const metaDescription = "Pretty Young Thang brings you all the razzle with twice the dazzle. We are a funk, alternative, rock band from Toronto, ON.";
const metaTitle = "Pretty Young Thang Band";

const FeaturedVideo = props => (
  <iframe
    width="560"
    height="315"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ margin: '0 auto', paddingBottom: 16 }}
    {...props}
  />
)

const HomePage = () => (
  <Theme>
    <Helmet title="Pretty Young Thang">
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={PYTLogo} />
      <meta property="og:site_name" content="Pretty Young Thang" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://prettyyoungthangband.com" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={PYTLogo} />
    </Helmet>
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
          <A to="spotify:artist:6npRHU3Tz5dAPa4AGKBG3w">
            Listen on Spotify
          </A>
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

export default HomePage
