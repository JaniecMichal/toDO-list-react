import React from 'react';
import "./style.css";

const Footer = () => (
    <footer className="footer">
        <h3 className="footer__footerText"
        >Wszelkie prawa zastrzeżone.&copy; ToDo List by Imperator. Projekt 2020.
        </h3>

        <h4 className="footer__titleSource">Źródła</h4>

        <div className="footer__sources">Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik" className="footer__link"
                target="_blank" rel="noreferrer noopener">Freepik</a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon" className="footer__link"
                target="_blank" rel="noreferrer noopener">www.flaticon.com
        </a>
        </div>

        <div className="footer__sources">Icons made by
        <a href="https://freeicons.io/profile/3277" title="Gayrat Muminov" className="footer__link"
                target="_blank" rel="noreferrer noopener">Gayrat Muminov</a>
        from
        <a href="https://freeicons.io/" title="Flaticon" className="footer__link"
                target="_blank" rel="noreferrer noopener">www.flaticon.com
        </a>
        </div>

        <div className="footer__sources">Icons made by
        <a href="https://freeicons.io/profile/714" title="Raj Dev" className="footer__link"
                target="_blank" rel="noreferrer noopener">Raj Dev</a>
        from
        <a href="https://freeicons.io/" title="Flaticon" className="footer__link"
                target="_blank" rel="noreferrer noopener">www.flaticon.com
        </a>
        </div>
    </footer>
);

export default Footer;