import React from 'react';
import "./style.css"

const Section = ({ title, body, extraContent }) => (
    <section className="section">

        <header className="section__header">
            <h2 className="section__headerTitle">{title}</h2>

        </header>
        <div>
            {extraContent}
            {body}
        </div>

    </section>
);

export default Section;