/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ title, description, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      {/* 탭 바 제목 */}
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      {/* 사이트 이름 */}
      <meta property="og:site_name" content="Paak's Architect" />
      {/* 게시글 제목 */}
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />
      {/* 게시글 설명 */}
      <meta name="og:description" content={metaDescription} />
      <meta name="twitter:description" content={metaDescription} />
      {/* 게시글 추가 정보 */}
      <meta name="twitter:label1" content="Category" />
      <meta name="twitter:data1" content="Development" />
      {/* 게시글 추가 정보2 */}
      <meta name="twitter:label2" content="Time to read" />
      <meta name="twitter:data2" content="10 minutes" />
      {/* 발행 및 수정 시간 */}
      <meta property="article:published_time" content="2022-05-07T09:00:00.000Z" />
      <meta property="article:modified_time" content="2022-05-10T09:00:00.000Z" />
      {/* 썸네일 이미지 */}
      <meta name="twitter:image" content="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <meta property="twitter:image" content="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <meta property="og:image" content="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      {/* 썸네일 이미지 크기 */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:card" content="summary_large_image" />
      {children}
    </>
  )
}

export default Seo
