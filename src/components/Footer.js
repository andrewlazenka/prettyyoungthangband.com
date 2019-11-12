import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.footerBgColor};
  min-height: 100px;
`

const FooterContainerInterior = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.footerBgColor};
  padding: 0 1.3125rem;
  width: 40%;
  max-width: 850px;
  margin: 0 auto;
`

function Footer({ children }) {
  return (
    <FooterContainer>
      <FooterContainerInterior>
        {children}
      </FooterContainerInterior>
    </FooterContainer>
  )
}

export default Footer
