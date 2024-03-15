import React from 'react';
import Layout from '../components/layout';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const SinglePost = ({ data }) => {
    const post = data.markdownRemark.frontmatter;
    const capitalize = (str) => {
        return str.toLowerCase().replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());
    };
    
    return (
        <Layout pageTitle={post.title} pageType='post' pageDescription={post.subtitle} imageUrl={post.backgroundImage}>
            <div className='single-post-container'>
                <div className='single-post__tags'>
                    <span>Category: </span>
                    <ul className='post-tags'>
                        {post.tags.map(tag => (
                            <li key={tag}><div className='post-badge'>{capitalize(tag)}</div></li>
                        ))}
                    </ul>
                </div>
                <div className='single-post__date'>
                    <span>Published | Edited: {post.date}</span>
                </div>
                <div className='single-post__time'>
                    <MenuBookIcon></MenuBookIcon> 
                    <span> Reading Time: {data.markdownRemark.timeToRead}min</span>
                </div>
                <div className='single-post__border'></div>
                {/* body */}
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
            </div>
            {/* <Img className='card-image-top' fluid={post.image.childImageSharp.fluid}></Img> */}
        </Layout>
    );
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            id
            html
            timeToRead
            frontmatter {
                title
                subtitle
                date(formatString: "MMM Do YYYY")
                tags
                backgroundImage
            }
        }
    }
`;

export default SinglePost;