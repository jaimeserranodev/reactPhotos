import React from 'react';
import './Section.css';
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

export default function CustomSection() {
    return (


<section className="section">
    <div className='section_div'>
        <h1 className='section_h1'>My Gallery of Favorites:<br/>Preserving Precious Memories</h1>
    </div>
</section>
    );
    }