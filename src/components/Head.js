import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import PYTLogo from '../assets/img/PrettyYoungThangLogo.png'

function Head() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `)
  const { description, siteUrl, title } = data.site.siteMetadata
  return (
    <Helmet title={data.site.siteMetadata.title}>
      <meta property="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteUrl + PYTLogo} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteUrl + PYTLogo} />
    </Helmet>
  )
}

export default Head
