/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import '../styles/index.scss';
import Header from "./header";
import Footer from "./footer";
import HeaderImage from "./headerImage";
import { ThemeProvider } from "../context/theme-context";
import Seo from "./seo";

const Layout = ({ children, pageTitle, pageDescription, pageType, imageUrl }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider>
        <Seo title={pageTitle} description={pageDescription}>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <HeaderImage 
            pageTitle={pageTitle} 
            pageSubtitle={pageDescription} 
            pageType={pageType} 
            singlePostBackground={imageUrl}
          ></HeaderImage>
          <div className="main-container">
            {children}
          </div>
          <Footer></Footer>
        </Seo>
      </ThemeProvider>
    </>
  )
}

export default Layout
