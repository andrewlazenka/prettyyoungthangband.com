import React from 'react'
import styled, { css } from 'styled-components'
import { Location } from '@reach/router'
import Tooltip from '@reach/tooltip'
import { Link, graphql } from 'gatsby'

import Footer from '../components/Footer'
import HamburgerMenu from '../components/HamburgerMenu'
import ModalMenu from '../components/ModalMenu'
import Theme from '../components/Theme'

import PYTLogo from '../assets/img/PrettyYoungThangLogo.png'
import Band from '../assets/img/Band.png'
import Chords from '../assets/img/Chordzilla.png'
import Shredding from '../assets/img/Shredding.png'
import FacebookLogo from '../assets/svg/facebook-app-logo.inline.svg'
import InstagramLogo from '../assets/svg/instagram.inline.svg'
import ContactUs from '../assets/svg/contact-us.inline.svg'

import '@reach/tooltip/styles.css'

const LogoHeroBanner = styled.div`
  background: url(${PYTLogo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 100vh;
  width: 100%;
  position: relative;
`

const FeaturedImage = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 60vh;
  width: 100%;
`

const BandImage = styled.div`
  background: url(${Band});
`

const ChordsImage = styled.div`
  background: url(${Chords});
`

const ShreddingImage = styled.div`
  background: url(${Shredding});
`

const Main = styled.main``

const SocialsAnchor = styled.div`
  position: absolute;
  bottom: 75px;
  left: 0;
  width: 100%;
`

const SocialsContainer = styled.div`
  width: 35%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const SocialLogo = css`
  height: 36px;
  width: 36px;
  transition: fill 150ms ease-in-out;
`

const LinkStyles = css`
  color: black;
  cursor: pointer;
  transition: color 150ms ease-in-out;

  :hover {
    color: ${props => props.theme.pinkColor};
    text-decoration: underline;
  }

  :hover > svg {
    fill: ${props => props.theme.pinkColor};
  }
`

export const ExternalLink = ({ to, children, ...props }) => (
  <a
    css={LinkStyles}
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
)

export const InternalLink = props => <Link css={LinkStyles} {...props} />

const LocationAwareLink = props => (
  <Location>
    {({ location }) => {
      const [, baseRoute] = location.pathname.split('/')
      const activeRoute =
        location.pathname !== '/' && props.to === `/${baseRoute}`

      const activeRouteStyle = activeRoute
        ? css`
            color: ${({ theme }) => theme.blueColor};
            font-size: 16px;
            text-transform: uppercase;
            height: inherit;
          `
        : css`
            color: ${({ theme }) => theme.fontColor};
            font-size: 16px;
            text-transform: uppercase;
            height: inherit;
          `

      return <InternalLink css={activeRouteStyle} {...props} />
    }}
  </Location>
)

const Show = styled.article`
  display: flex;
  justify-content: space-around;
`

const Song = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

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

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  height: 75px;
  width: 100%;
  z-index: 1;
`

const MenuModelItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemPadding = styled.div`
  padding: 24px 0;
  margin: 0 auto;
`

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  min-height: 100px;
  padding: 0 10%;
`

const menuItems = [
  {
    name: 'Shows',
    to: '/#shows',
  },
  {
    name: 'Songs',
    to: '/#songs',
  },
]

const SocialLinks = () => (
  <>
    <Tooltip label="Facebook">
      <span>
        <ExternalLink to="https://www.facebook.com/PrettyYoungThangBand">
          <FacebookLogo css={SocialLogo} />
        </ExternalLink>
      </span>
    </Tooltip>
    <Tooltip label="Instagram">
      <span>
        <ExternalLink to="https://www.instagram.com/prettyyoungthangband">
          <InstagramLogo css={SocialLogo} />
        </ExternalLink>
      </span>
    </Tooltip>
    <Tooltip label="Contact Us">
      <span>
        <ExternalLink to="https://forms.gle/NWFYS6k5JUUgXqUi7">
          <ContactUs css={SocialLogo} />
        </ExternalLink>
      </span>
    </Tooltip>
  </>
)

function HomePage({ data }) {
  const { shows, songs } = data
  const [menuModalOpen, setMenuModalOpen] = React.useState(false)

  const songsInfo = songs.edges.map(({ node }) => node.frontmatter)

  const liveSongs = songsInfo.filter(song => song.recordingType === 'live')
  const demoSongs = songsInfo.filter(song => song.recordingType === 'demo')
  return (
    <Theme>
      <Main>
        <section>
          <LogoHeroBanner>
            <Header>
              <HamburgerMenu
                active={menuModalOpen}
                onClick={() => setMenuModalOpen(!menuModalOpen)}
              />
              <ModalMenu open={menuModalOpen}>
                <MenuModelItemsContainer>
                  {menuItems.map(({ name, to }, index) => (
                    <ItemPadding key={`${name}-${index}`}>
                      <LocationAwareLink
                        to={to}
                        onClick={() => setMenuModalOpen(false)}
                      >
                        {name}
                      </LocationAwareLink>
                    </ItemPadding>
                  ))}
                  <SocialLinksContainer>
                    <SocialLinks />
                  </SocialLinksContainer>
                </MenuModelItemsContainer>
              </ModalMenu>
            </Header>
            <SocialsAnchor>
              <SocialsContainer>
                <SocialLinks />
              </SocialsContainer>
            </SocialsAnchor>
          </LogoHeroBanner>
        </section>
        <BandImage css={FeaturedImage} />
        <PageSection id="shows">
          <h2>Shows</h2>
          {shows.edges.map(({ node }) => {
            const {
              city,
              date,
              eventUrl,
              location,
              locationUrl,
              title,
            } = node.frontmatter
            return (
              <>
                <Show>
                  <span>{date}</span>
                  <ExternalLink to={eventUrl}>{title}</ExternalLink>
                  <span>{city}</span>
                  <ExternalLink to={locationUrl}>{location}</ExternalLink>
                </Show>
                <Break />
              </>
            )
          })}
        </PageSection>
        <ShreddingImage css={FeaturedImage} />
        <PageSection id="songs">
          <h2>Songs</h2>
          <h3>Live</h3>
          <Break />
          {liveSongs.map(({ name, url }) => (
            <Song>
              <h4>{name}</h4>
              <audio controls>
                <source src={url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </Song>
          ))}
          <h3>Demo</h3>
          {demoSongs.map(({ name, url }) => (
            <Song>
              <h4 style={{ marginRight: 36 }}>{name}</h4>
              <audio controls>
                <source src={url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </Song>
          ))}
          <Break />
        </PageSection>
        <ChordsImage css={FeaturedImage} />
        <br></br>
      </Main>
      <Footer>
        <SocialLinks />
      </Footer>
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
            recordingType
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
