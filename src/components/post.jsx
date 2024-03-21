import React from 'react';
import { useDarkMode } from '../context/theme-context';
import { Link } from 'gatsby';

const Post = (props) => {
  const title = props.node.frontmatter.title;
  const subtitle = props.node.frontmatter.subtitle;
  const slug = props.node.fields.slug;
  const date = props.node.frontmatter.date;
  const logoImage = props.node.frontmatter.logoImage;
  const tags = props.node.frontmatter.tags;

  const { darkMode } = useDarkMode();
  
  const capitalize = (str) => {
    return str.toLowerCase().replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());
  };

  return (
    <div>
      <div className={`post-container ${darkMode && 'dark'}`}>
        <Link to={'/' + slug}>
          <div className='post-body'>
            <ul className='post-tags'>
              {tags.map(tag => (
                <li key={tag}><div className='post-badge'>{capitalize(tag)}</div></li>
              ))}
              <img src={logoImage} alt='logo' style={{ borderRadius: '50%', width: '25px', height: '25px'}}></img>
            </ul>
            <div className='post-title'><h3>{title}</h3></div>
            <div className='post-text'>{subtitle}</div>
            <div className='post-date'>{date}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Post;