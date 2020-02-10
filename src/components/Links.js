import React from 'react'
import { css } from 'styled-components'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

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

export const A = ({ to, children, ...props }) => (
  <a
    css={LinkStyles}
    href={to}
    {...props}
  >
    {children}
  </a>
)

export const InternalLink = props => <Link css={LinkStyles} {...props} />

export const LocationAwareLink = props => (
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
