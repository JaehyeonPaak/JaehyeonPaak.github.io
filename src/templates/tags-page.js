import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Post from "../components/post"
import SearchIcon from "@mui/icons-material/Search"

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState([])

  const handleTagClick = tag => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  return (
    <Layout pageTitle="All Topics" pageType="posts">
      <div
        style={{
          padding: "20px",
          backgroundColor: "rgba(133, 133, 133, 0.301)",
          borderRadius: "10px",
          marginBottom: "40px",
        }}
      >
        <div className="card">
          <label className="input">
            <input
              className="input__field"
              type="text"
              placeholder=""
              onChange={e => setSearchTerm(e.target.value)}
              value={searchTerm}
            ></input>
            <span className="input__label">Search By Title</span>
          </label>
          <SearchIcon
            style={{
              position: "absolute",
              top: "50%",
              right: "8px",
              transform: "translateY(-50%)",
            }}
          ></SearchIcon>
        </div>
        <h3>Filter with tag</h3>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            listStyle: "none",
            padding: 0,
          }}
        >
          {tags.map(tag => {
            const formattedTag = tag.replace(/\b\w/g, c => c.toUpperCase())
            return (
              <li key={tag} style={{ marginRight: "5px", marginBottom: "7px" }}>
                <div
                  className={`post-hashtag ${
                    selectedTags.includes(tag) ? "active" : ""
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  <span>{formattedTag}</span>
                  <span>{tagPostCounts[tag]}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div
        className="post-border"
        style={{ height: "1px", marginBottom: "20px" }}
      ></div>
      <StaticQuery
        query={tagsPageQuery}
        render={data => {
          const filteredPosts = data.allMarkdownRemark.edges.filter(
            ({ node }) =>
              node.frontmatter.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) &&
              (selectedTags.length === 0 ||
                node.frontmatter.tags.some(tag => selectedTags.includes(tag)))
          )
          const numberOfPosts = filteredPosts.length
          return (
            <div>
              <div style={{ margin: "30px 0", paddingLeft: "25px" }}>
                {numberOfPosts === 0 ? (
                  <h5>There is no corresponding post with '{searchTerm}'</h5>
                ) : (
                  <h5 style={{ color: "rgb(170, 170, 170)" }}>
                    There are <b style={{ color: "white" }}>{numberOfPosts}</b>{" "}
                    total posts
                  </h5>
                )}
              </div>
              {filteredPosts.map(({ node }, index) => {
                return <Post key={node.id} node={node} />
              })}
            </div>
          )
        }}
      />
    </Layout>
  )
}

const tagsPageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            date(formatString: "MMM Do YYYY")
            tags
            logoImage
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export const Head = () => <Seo title="Posts" /> // Head 컴포넌트 추가

export default TagsPage
