import React from 'react'
import { css } from 'styled-components'
import Tooltip from '@reach/tooltip'
import '@reach/tooltip/styles.css'

import { ExternalLink } from '../components/Links'

import FacebookLogo from '../assets/svg/facebook-app-logo.inline.svg'
import InstagramLogo from '../assets/svg/instagram.inline.svg'
import YouTubeLogo from '../assets/svg/youtube.inline.svg'
import ContactUs from '../assets/svg/contact-us.inline.svg'

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
    <Tooltip label="YouTube">
      <span>
        <ExternalLink to="https://www.youtube.com/channel/UCU4XJIUIVtH680j3v7IxK0w">
          <YouTubeLogo css={SocialLogo} />
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
