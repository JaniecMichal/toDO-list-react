import React from 'react';
import "./style.css";

const Header = ({ mainTitle }) => (
    <header className="header">
        <h1 className="header__title">{mainTitle}</h1>
    </header>
)

export default Header;