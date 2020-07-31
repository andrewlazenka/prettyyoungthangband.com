import React from 'react'
import { css } from 'styled-components'
import Tooltip from '@reach/tooltip'
import '@reach/tooltip/styles.css'

import { ExternalLink, A } from '../components/Links'

import AppleLogo from '../assets/svg/apple.inline.svg'
import FacebookLogo from '../assets/svg/facebook-app-logo.inline.svg'
import InstagramLogo from '../assets/svg/instagram.inline.svg'
import YouTubeLogo from '../assets/svg/youtube.inline.svg'
import SpotifyLogo from '../assets/svg/spotify.inline.svg'

const SocialLogo = css`
  height: 36px;
  width: 36px;
  transition: fill 150ms ease-in-out;

  @media only screen and (max-width: 500px) {
    height: 24px;
    width: 24px;
  }
`

export default () => (
  <>
    <Tooltip label="Spotify">
      <span>
        <A to="spotify:artist:6npRHU3Tz5dAPa4AGKBG3w">
          <SpotifyLogo css={SocialLogo} />
        </A>
      </span>
    </Tooltip>
    <Tooltip label="Apple">
      <span>
        <ExternalLink to="https://music.apple.com/us/artist/pretty-young-thang/1497863142">
          <AppleLogo css={SocialLogo} />
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
    <Tooltip label="Facebook">
      <span>
        <ExternalLink to="https://www.facebook.com/PrettyYoungThangBand">
          <FacebookLogo css={SocialLogo} />
        </ExternalLink>
      </span>
    </Tooltip>
    <Tooltip label="YouTube">
      <span>
        <ExternalLink to="https://www.youtube.com/channel/UCc31B5W6QVIvp9X202e-Q2Q">
          <YouTubeLogo css={SocialLogo} />
        </ExternalLink>
      </span>
    </Tooltip>
  </>
)
