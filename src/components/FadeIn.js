import React from 'react'
import { css } from 'styled-components'

const fadeInVisibleStyle = css`
  opacity: 1;
  transform: none;
  visibility: visible;
`

function useFadeIn(duration = 1, fadeFrom) {
  const [isVisible, setVisible] = React.useState(false)
  const domRef = React.useRef()
  let fadeDirection;

  switch(fadeFrom) {
    case 'top':
      fadeDirection = 'translateY(-20%)'
      break;
    case 'left':
      fadeDirection = 'translateX(-20%)'
      break;
    case 'right':
      fadeDirection = 'translateX(20%)'
      break;
    case 'bottom': //bottom
      fadeDirection = 'translateY(20%)'
      break;
    default:
      break;
  }

  const fadeInBaseStyle = css`
    opacity: 0;
    ${fadeDirection ? 'transform: ' + fadeDirection : ''};
    visibility: hidden;
    transition: opacity ${(duration / 2) + 's'} ease-out, transform ${duration + 's'} ease-out;
    will-change: opacity, visibility;
  `

  React.useEffect(() => {
    const ref = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (!isVisible) {
        entries.forEach((entry) => setVisible(entry.isIntersecting))
      }
    })
    observer.observe(ref)
    return () => observer.unobserve(ref)
  }, [isVisible])

  const fadeCss = isVisible
    ? [fadeInBaseStyle, fadeInVisibleStyle]
    : fadeInBaseStyle

  return [fadeCss, domRef]
}

export default useFadeIn
