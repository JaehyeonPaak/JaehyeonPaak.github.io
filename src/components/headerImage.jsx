import React, { useState, useEffect } from 'react';

const imageUrl = {
    'main':  'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'posts': 'https://images.pexels.com/photos/1379627/pexels-photo-1379627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'about': 'https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}
const titles = {
    'main':  "Paak's Architect",
    'posts': 'All Posts',
    'about': 'About',
}

const subtitles = {
    'main':  'Creating helpful content for Frontend Development',
    'posts': 'Check out all posts with various topics',
    'about': 'Introduce myself',
}

const HeaderImage = ({ pageTitle, pageSubtitle, pageType, singlePostBackground }) => {
    const [background, setBackground] = useState(null);
    const [title, setTitle] = useState(null);
    const [subtitle, setSubtitle] = useState(null);

    useEffect(() => {
        if (singlePostBackground) {
            setBackground(singlePostBackground);
        } else {
            setBackground(imageUrl[pageType]);
        }
        
        if (pageTitle) {
            setTitle(pageTitle);
        } else {
            setTitle(titles[pageType]);
        }

        if (pageSubtitle) {
            setSubtitle(pageSubtitle);
        } else {
            setSubtitle(subtitles[pageType]);
        }
    }, []);
    
    return (
        <div className='header-container'>
            <div className='header-text' style={{backgroundImage: `url(${background})`}}>
                <div className={`header-title ${pageType === 'post' ? 'post' : ''}`}>
                    <span>{title}</span>
                    <span>{subtitle}</span>
                </div>
            </div>
        </div>
    );
};

export default HeaderImage;